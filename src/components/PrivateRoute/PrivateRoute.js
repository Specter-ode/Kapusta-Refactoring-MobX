import { Navigate, Outlet } from 'react-router-dom';
import { authStore } from 'mobxStores/stores';
import { observer } from 'mobx-react-lite';

const PrivateRoute = () => {
  const { currentUser, accessToken } = authStore;
  return <>{currentUser && accessToken ? <Outlet /> : <Navigate to="/" />}</>;
};

export default observer(PrivateRoute);
