import 'modern-normalize/modern-normalize.css';
import Header from 'components/Header/Header';
import PagesRoutes from 'PagesRoutes/PagesRoutes';
// import { useEffect } from 'react';
// import { authStore } from 'mobxStores/stores';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { observer } from 'mobx-react-lite';

const App = () => {
  // useEffect(() => {
  //   if (!authStore.currentUser && authStore.accessToken) {
  //     console.log('запрос authStore.getCurrentUser: ');
  //     authStore.getCurrentUser();
  //   }
  // }, []);

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
