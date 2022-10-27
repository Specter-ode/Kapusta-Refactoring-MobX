import instance from './auth';

export const getIncomeCategories = async () => {
  const result = await instance.get('/transaction/income-categories');
  console.log('getIncomeCategories result: ', result);
  return result.data;
};
export const getExpenseCategories = async () => {
  const result = await instance.get('/transaction/expense-categories');
  console.log('getExpenseCategories result: ', result);
  return result.data;
};
export const getPeriodData = async body => {
  const result = await instance.get(`/transaction/period-data?date=${body}`, body);
  console.log('getPeriodData result: ', result);
  return result.data;
};
export const getIncome = async () => {
  const result = await instance.get('/transaction/income');
  console.log('getIncome result: ', result);
  return result.data;
};
export const getExpense = async () => {
  const result = await instance.get('/transaction/expense');
  console.log('getExpense result: ', result);
  return result.data;
};
export const deleteTransaction = async id => {
  const result = await instance.delete(`/transaction/${id}`);
  console.log('deleteTransaction result: ', result);
  return result.data;
};
export const addExpense = async body => {
  const result = await instance.post('/transaction/expense', body);
  console.log('addExpense result: ', result);
  return result.data;
};

export const addIncome = async body => {
  const result = await instance.post('/transaction/expense', body);
  console.log('addIncome result: ', result);
  return result.data;
};
