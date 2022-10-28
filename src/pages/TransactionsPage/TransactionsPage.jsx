import s from './TransactionsPage.module.css';
import { ReactComponent as BarChart } from 'assets/svg/bar_chart.svg';
import Balance from 'components/Balance/Balance';
import Dashboard from '../../components/Dashboard/Dashboard';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ExpensesAndIncome from 'components/Dashboard/ExpensesAndIncome/ExpensesAndIncome';
import Calendar from 'components/Calendar/Calendar';
import { observer } from 'mobx-react-lite';
import { transactionStore, authStore } from 'mobxStores/stores';

const TransactionsPage = () => {
  const { pathname } = useLocation();
  const vision = window.innerWidth > 767 || pathname === '/transactions';
  const calendarVision = window.innerWidth < 768 && pathname === '/transactions';
  const [date, setDate] = useState(() => new Date());
  const { getExpense, getIncome, getExpenseCategories, getIncomeCategories } = transactionStore;
  const { currentUser, accessToken } = authStore;
  useEffect(() => {
    if (currentUser && accessToken) {
      getExpense();
      getIncome();
      getExpenseCategories();
      getIncomeCategories();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken, currentUser]);

  return (
    <main className={s.meta}>
      <div className={s.container}></div>
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
    </main>
  );
};

export default observer(TransactionsPage);
