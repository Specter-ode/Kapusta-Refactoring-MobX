import { Navigate, Outlet } from 'react-router-dom';
import { authStore } from 'mobxStores/stores';
import { observer } from 'mobx-react-lite';

const PublicRoute = observer(() => {
  const correctPath = window.innerWidth > 767 ? '/transactions/expenses' : '/transactions';
  const { currentUser, accessToken } = authStore;
  return <>{currentUser && accessToken ? <Navigate to={correctPath} /> : <Outlet />}</>;
});

export default PublicRoute;
