import * as api from 'helpers/auth';
import * as transactionsApi from 'helpers/transactions';
import { toast } from 'react-toastify';
import { makeAutoObservable, toJS } from 'mobx';

class AuthStore {
  userData = {};
  loading = false;
  error = null;
  accessToken = '';
  refreshToken = '';
  sid = '';
  currentUser = false;

  constructor() {
    makeAutoObservable(
      this
      //   { deep: true }
    );
  }
  setUserData = data => {
    this.userData = data;
  };
  setNewBalance = newBalance => {
    this.userData.balance = newBalance;
  };
  setAccessToken = token => {
    this.accessToken = token;
  };
  setRefreshToken = token => {
    this.refreshToken = token;
  };
  setError = error => {
    this.error = error;
  };
  setIsLogin = bool => {
    this.currentUser = bool;
  };
  setLoading = bool => {
    this.loading = bool;
  };
  setSid = n => {
    this.sid = n;
  };
  setNewTransaction = data => {
    this.userData.transactions.push(data);
  };
  setTransactions = deletedId => {
    this.userData.transactions = this.userData.transactions.filter(el => deletedId !== el._id);
  };
  deleteTransactionMob = async id => {
    try {
      this.setError(null);
      this.setLoading(true);
      const result = await transactionsApi.deleteTransaction(id);
      this.setNewBalance(result.newBalance);
      this.setTransactions(id);
    } catch (error) {
      toast.error(
        `Sorry, request failed.Transaction has not been deleted. May be you have problems with network`
      );
      this.setError(null);
    } finally {
      this.setLoading(false);
    }
  };
  addExpenseMob = async data => {
    try {
      this.setError(null);
      this.setLoading(true);
      const result = await transactionsApi.addExpense(data);
      console.log('result: ', result);
      this.setNewTransaction(result.transaction);
    } catch (error) {
      console.log('error: ', error);
      toast.error(`Sorry, expense transaction has not been added. `);
      this.setError(error);
    } finally {
      this.setLoading(false);
    }
  };

  addIncomeMob = async data => {
    try {
      this.setError(null);
      this.setLoading(true);
      const result = await transactionsApi.addIncome(data);
      this.setNewTransaction(result.transaction);
    } catch (error) {
      toast.error(`Sorry, expense transaction has not been added. `);
      this.setError(error);
    } finally {
      this.setLoading(false);
    }
  };
  register = async data => {
    try {
      this.setError(null);
      this.setLoading(true);
      await api.registration(data);
      toast.success('Your registration is successful!  You also login in app');
      this.login(data);
    } catch ({ response }) {
      if (response.status === 409) {
        this.login(data);
        return;
      }
      toast.error(`Sorry, Register failed. Try again.`);
      this.setError(response.data);
    } finally {
      this.setLoading(false);
    }
  };

  login = async data => {
    console.log('data: ', data);
    try {
      this.setError(null);
      this.setLoading(true);
      const result = await api.login(data);
      localStorage.setItem('accessToken', JSON.stringify(result.accessToken));
      localStorage.setItem('refreshToken', JSON.stringify(result.refreshToken));
      localStorage.setItem('sid', JSON.stringify(result.sid));
      this.setUserData(result.userData);
      this.setAccessToken(result.accessToken);
      this.setRefreshToken(result.refreshToken);
      this.setSid(result.sid);
      this.setIsLogin(true);
      return result;
    } catch (error) {
      toast.error(`Sorry, login failed. Check email and password. Try again.`);
      this.setError(error.response.data);
    } finally {
      this.setLoading(false);
    }
  };
  logout = async () => {
    try {
      this.setError(null);
      this.setLoading(true);
      await api.logout();
      this.setUserData({});
      this.setAccessToken('');
      this.setRefreshToken('');
      this.setIsLogin(false);
    } catch (error) {
      console.log('error: ', error);
      toast.error(`Sorry, logout failed. Try again.`);
      this.setError(error.response.data);
    } finally {
      this.setLoading(false);
    }
  };

  initNewSession = async () => {
    try {
      const accessToken = JSON.parse(localStorage.getItem('accessToken'));
      const refreshToken = JSON.parse(localStorage.getItem('refreshToken'));
      const sid = JSON.parse(localStorage.getItem('sid'));
      console.log('accessToken initNewSession: ', accessToken);
      console.log('refreshToken initNewSession: ', refreshToken);
      console.log('sid initNewSession: ', sid);
      this.setError(null);
      this.setLoading(true);
      const result = await api.newSession(sid);
      console.log('result initNewSession: ', result);
      api.setToken(result.newAccessToken);
      this.setToken(result.newAccessToken);
      this.setRefreshToken(result.newRefreshToken);
      this.setSid(result.newSid);
      toast.info('Hello, you are already signed in');
    } catch (error) {
      toast.error(
        'Unauthorized. May be you have problems with network or token timed out.Please login again'
      );
      this.setError(error);
    } finally {
      this.setLoading(false);
    }
  };
  getCurrentUser = async () => {
    try {
      this.setError(null);
      this.setLoading(true);
      const result = await api.currentUser();
      this.setUserData(result);
      console.log('result getCurrentUser authStore: ', result);
      toast.info('getCurrentUser info');
    } catch (error) {
      toast.error(
        'Unauthorized. May be you have problems with network or token timed out.Please login again'
      );
      this.setError(error);
    } finally {
      this.setLoading(false);
    }
  };
  updateUserBalance = async amount => {
    try {
      await api.userBalance({ newBalance: amount });
      this.setNewBalance(amount);
      toast.success('Your balance was confirm');
    } catch (error) {
      toast.error('Your network is dead. Try it later');
      this.setError(error.response.data);
    }
  };
}

export default new AuthStore();
