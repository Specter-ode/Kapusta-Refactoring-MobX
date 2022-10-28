import * as api from 'helpers/transactions';
import { toast } from 'react-toastify';
import { makeAutoObservable, toJS } from 'mobx';

class TransactionStore {
  incomeCategories = [];
  expenseCategories = [];
  periodData = {};
  incomeTransactions = {};
  expenseTransactions = {};
  loading = false;
  error = null;
  testIncome = {};

  constructor() {
    makeAutoObservable(this);
  }
  setError = error => {
    this.error = error;
  };
  setLoading = bool => {
    this.loading = bool;
  };
  get income() {
    return this.incomeTransactions.incomes;
  }
  get expense() {
    return this.expenseTransactions.expenses;
  }
  getIncomeCategories = async () => {
    try {
      this.setError(null);
      this.setLoading(true);
      const result = await api.getIncomeCategories();
      this.incomeCategories = result;
    } catch (error) {
      toast.error(`Sorry, request failed. We can't load income categories.`);
      this.setError(error);
    } finally {
      this.setLoading(false);
    }
  };

  getExpenseCategories = async () => {
    try {
      this.setError(null);
      this.setLoading(true);
      const result = await api.getExpenseCategories();
      this.expenseCategories = result;
    } catch (error) {
      toast.error(`Sorry, request failed. We can't load expense categories.`);
      this.setError(error);
    } finally {
      this.setLoading(false);
    }
  };

  getPeriodData = async data => {
    try {
      this.setError(null);
      this.setLoading(true);
      const result = await api.getPeriodData(data);
      this.periodData = result;
    } catch (error) {
      toast.error(`Sorry, request failed. We can't load period data.`);
      this.setError(error);
    } finally {
      this.setLoading(false);
    }
  };

  getIncome = async () => {
    try {
      this.setError(null);
      this.setLoading(true);
      const result = await api.getIncome();
      this.incomeTransactions = result;
    } catch (error) {
      toast.error(`Sorry, request failed. We can't load expense categories.`);
      this.setError(error);
    } finally {
      this.setLoading(false);
    }
  };

  getExpense = async () => {
    try {
      this.setError(null);
      this.setLoading(true);
      const result = await api.getExpense();
      this.expenseTransactions = result;
    } catch (error) {
      toast.error(`Sorry, request failed. We can't load expense categories.`);
      this.setError(error);
    } finally {
      this.setLoading(false);
    }
  };

  addExpense = async data => {
    try {
      this.setError(null);
      this.setLoading(true);
      await api.addExpense(data);
    } catch (error) {
      toast.error(`Sorry, expense transaction has not been added. `);
      this.setError(error);
    } finally {
      this.setLoading(false);
    }
  };
  addIncome = async data => {
    try {
      this.setError(null);
      this.setLoading(true);
      await api.addIncome(data);
    } catch (error) {
      toast.error(`Sorry, income transaction has not been added. `);
      this.setError(error);
    } finally {
      this.setLoading(false);
    }
  };

  deleteTransaction = async id => {
    try {
      this.setError(null);
      this.setLoading(true);
      console.log('id: ', id);
      const result = await api.deleteTransaction(id);
      console.log('result: ', result);
    } catch (error) {
      console.log('error deleteTransaction: ', error);
      toast.error(
        `Sorry, request failed.Transaction has not been deleted. May be you have problems with network`
      );
      this.setError(null);
    } finally {
      this.setLoading(false);
    }
  };
}

export default new TransactionStore();
