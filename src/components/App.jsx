import 'modern-normalize/modern-normalize.css';
import Header from 'components/Header/Header';
import PagesRoutes from 'PagesRoutes/PagesRoutes';
import { useEffect } from 'react';
import { authStore, transactionStore } from 'mobxStores/stores';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { observer } from 'mobx-react-lite';

const App = () => {
  const { currentUser, accessToken } = authStore;
  const { getExpense, getIncome, getExpenseCategories, getIncomeCategories } = transactionStore;

  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));
    const refreshToken = JSON.parse(localStorage.getItem('refreshToken'));
    const sid = JSON.parse(localStorage.getItem('sid'));
    if (accessToken && refreshToken && sid) {
      authStore.setAccessToken(accessToken);
      authStore.setRefreshToken(refreshToken);
      authStore.setSid(sid);
    }
  }, []);

  useEffect(() => {
    if (!currentUser && accessToken) {
      authStore.getCurrentUser(accessToken);
    }
  }, [accessToken, currentUser]);

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
    <div>
      <Header />
      <PagesRoutes />

      <ToastContainer
        autoClose={3000}
        hideProgressBar
        position="top-center"
        theme="colored"
        transition={Zoom}
      />
    </div>
  );
};
export default observer(App);
