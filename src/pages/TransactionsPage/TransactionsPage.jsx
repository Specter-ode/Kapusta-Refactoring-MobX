import s from './TransactionsPage.module.css';
import { ReactComponent as BarChart } from 'assets/svg/bar_chart.svg';
import Balance from 'components/Balance/Balance';
import Dashboard from '../../components/Dashboard/Dashboard';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ExpensesAndIncome } from 'components/Dashboard/ExpensesAndIncome/ExpensesAndIncome';
import Calendar from 'components/Calendar/Calendar';
// import {
//   useGetExpenseQuery,
//   useGetIncomeQuery,
//   useGetExpenseCategoriesQuery,
//   useGetIncomeCategoriesQuery,
// } from 'redux/transaction/transactionOperations';
import { observer } from 'mobx-react-lite';
import { transactionStore, authStore } from 'mobxStores/stores';

const TransactionsPage = observer(() => {
  const { pathname } = useLocation();
  const vision = window.innerWidth > 767 || pathname === '/transactions';
  const calendarVision = window.innerWidth < 768 && pathname === '/transactions';
  const [date, setDate] = useState(() => new Date());
  const { getExpense, getIncome, getExpenseCategories, getIncomeCategories } = transactionStore;
  const { currentUser, accessToken } = authStore;
  useEffect(() => {
    if (currentUser && accessToken) {
      // getExpense();
      // getIncome();
      getExpenseCategories();
      getIncomeCategories();
    }
  }, [accessToken, currentUser, getExpenseCategories, getIncomeCategories]);
  // const { refetch: expenseRefetch, isSuccess: expenseSuccess } = useGetExpenseQuery();
  // const { refetch: incomeRefetch, isSuccess: incomeSuccess } = useGetIncomeQuery();
  // const { refetch: expenseCategoriesRefetch, isSuccess: expenseCategoriesSuccess } =
  //   useGetExpenseCategoriesQuery();
  // const { refetch: incomeCategoriesRefetch, isSuccess: incomeCategoriesSuccess } =
  //   useGetIncomeCategoriesQuery();
  // const isLogin = authStore.currentUser;
  // const isToken = authStore.accessToken;
  // useEffect(() => {
  //   if (isLogin && isToken) {
  //     expenseRefetch();
  //     incomeRefetch();
  //     expenseCategoriesRefetch();
  //     incomeCategoriesRefetch();
  //   }
  // }, [
  //   expenseRefetch,
  //   incomeRefetch,
  //   incomeCategoriesRefetch,
  //   expenseCategoriesRefetch,
  //   isLogin,
  //   isToken,
  // ]);
  return (
    <main className={s.meta}>
      <div className={s.container}></div>
      {/* {expenseSuccess && incomeSuccess && expenseCategoriesSuccess && incomeCategoriesSuccess && ( */}
      <div className={s.main}>
        {vision && (
          <div className={s.wrap}>
            <Link className={s.reportsBtn} to="/reports">
              <span className={s.reports}>Reports</span>
              <BarChart className={s.icon} />
            </Link>
            <Balance />
          </div>
        )}
        {calendarVision && (
          <div className={s.absCalendar}>
            <Calendar date={date} setDate={setDate} />
          </div>
        )}

        <Dashboard date={date} setDate={setDate} />
        <Routes>
          <Route path="expenses" element={<ExpensesAndIncome date={date} setDate={setDate} />} />
          <Route path="incomes" element={<ExpensesAndIncome date={date} setDate={setDate} />} />
        </Routes>
      </div>
      {/* )} */}
    </main>
  );
});

export default TransactionsPage;
