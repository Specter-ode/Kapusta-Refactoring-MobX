import instance from './auth';

export const getIncomeCategories = async () => {
  const result = await instance.get('/transaction/income-categories');
  return result.data;
};
export const getExpenseCategories = async () => {
  const result = await instance.get('/transaction/expense-categories');
  return result.data;
};
export const getPeriodData = async body => {
  const result = await instance.get(`/transaction/period-data?date=${body}`, body);
  return result.data;
};
export const getIncome = async () => {
  const result = await instance.get('/transaction/income');
  return result.data;
};
export const getExpense = async () => {
  const result = await instance.get('/transaction/expense');
  return result.data;
};
export const deleteTransaction = async id => {
  const result = await instance.delete(`/transaction/${id}`);
  return result.data;
};
export const addExpense = async body => {
  const result = await instance.post('/transaction/expense', body);
  return result.data;
};

export const addIncome = async body => {
  const result = await instance.post('/transaction/income', body);
  return result.data;
};
