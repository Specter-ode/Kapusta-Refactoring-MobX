import s from './UserMenu.module.css';
import { useState } from 'react';
import { ReactComponent as LogOut } from '../../../assets/svg/logout.svg';
import { ConfirmActionModal } from '../../Modal/QuestionModal';
import { observer } from 'mobx-react-lite';
import { authStore } from 'mobxStores/stores';

const UserMenu = observer(() => {
  const [modal, setModal] = useState(false);
  const email = authStore.userData.email;
  const onExit = () => {
    authStore.logout();
    setModal(false);
  };

  return (
    email && (
      <nav className={s.nav}>
        <span className={s.name}>{email[0].toUpperCase()}</span>
        <p className={s.full_name}>{email}</p>
        <p className={s.exit} onClick={() => setModal(true)}>
          Exit
        </p>
        <LogOut className={s.icon_logOut} onClick={() => setModal(true)} />
        {modal && (
          <ConfirmActionModal
            className={s.modal}
            title="Do you really want to leave?"
            onClickYes={() => onExit()}
            onClickNo={() => setModal(false)}
          />
        )}
      </nav>
    )

    //    googleUser && <nav className={s.nav}>
    //    <span className={s.name}>{googleUser[0].toUpperCase()}</span>
    //    <LogOut className={s.icon_logOut} onClick={exit}/>
    //  </nav>
  );
});

export default UserMenu;
