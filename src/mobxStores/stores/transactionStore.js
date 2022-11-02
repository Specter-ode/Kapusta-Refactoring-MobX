import * as api from 'helpers/api/transactions';
import { toast } from 'react-toastify';
import { makeAutoObservable } from 'mobx';
import { authStore } from './index';

class TransactionStore {
  incomeCategories = [];
  expenseCategories = [];
  periodData = {};
  incomeTransactions = {};
  expenseTransactions = {};
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }
  setError = error => {
    this.error = error;
  };
  setLoading = bool => {
    this.loading = bool;
  };
  setIncomeCategories = data => {
    this.incomeCategories = data;
  };
  setExpenseCategories = data => {
    this.expenseCategories = data;
  };
  setPeriod = data => {
    this.periodData = data;
  };
  setIncome = data => {
    this.incomeTransactions = data;
  };
  setExpense = data => {
    this.expenseTransactions = data;
  };
  setNewIncome = data => {
    this.incomeTransactions.incomes.push(data);
  };
  setNewExpense = data => {
    this.expenseTransactions.expenses.push(data);
  };
  setTransactions = deletedId => {
    this.expenseTransactions.expenses = this.expenseTransactions.expenses.filter(
      el => deletedId !== el._id
    );
    this.incomeTransactions.incomes = this.incomeTransactions.incomes.filter(
      el => deletedId !== el._id
    );
  };
  changeExpenseMonthStats = (month, sum) => {
    const newMonthStats = this.expenseTransactions.monthsStats;
    newMonthStats[month] = newMonthStats[month] + sum;
  };
  changeIncomeMonthStats = (month, sum) => {
    const newMonthStats = this.incomeTransactions.monthsStats;
    newMonthStats[month] = newMonthStats[month] + sum;
  };
  get income() {
    return this.incomeTransactions.incomes;
  }
  get expense() {
    return this.expenseTransactions.expenses;
  }
  get incomeStats() {
    return this.incomeTransactions.monthsStats;
  }
  get expenseStats() {
    return this.expenseTransactions.monthsStats;
  }

  getIncomeCategories = async () => {
    try {
      this.setError(null);
      this.setLoading(true);
      const result = await api.getIncomeCategories();
      this.setIncomeCategories(result);
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
      this.setExpenseCategories(result);
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
      this.setPeriod(result);
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
      this.setIncome(result);
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
      this.setExpense(result);
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
      const result = await api.addExpense(data);

      this.setNewExpense(result.transaction);
      authStore.setNewBalance(result.newBalance);
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
      const result = await api.addIncome(data);
      this.setNewIncome(result.transaction);
      authStore.setNewBalance(result.newBalance);
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
      const result = await api.deleteTransaction(id);
      this.setTransactions(id);
      authStore.setNewBalance(result.newBalance);
    } catch (error) {
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
