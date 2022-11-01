import Modal from 'components/Modal/Modal';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import { useGetExpenseQuery, useGetIncomeQuery } from 'redux/transaction/transactionOperations';
import s from './Balance.module.css';
import { authStore } from 'mobxStores/stores';

const Balance = observer(() => {
  const [modalActive, setModalActive] = useState(false);
  const transactions = authStore.userData.transactions;
  const { pathname } = useLocation();
  const getUserBalance = authStore.userData.balance;
  const [enteredBalance, setEnteredBalance] = useState(getUserBalance);

  const [amount, setAmount] = useState(
    `${getUserBalance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ')} UAH`
  );

  const handleChange = e => {
    const { value } = e.target;
    if (!Number(value) && value) return;
    setAmount(value);
    setEnteredBalance(value);
  };
  const inputStatus = transactions.length > 0;
  useEffect(() => {
    setAmount(`${getUserBalance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ')} UAH`);
  }, [getUserBalance]);

  useEffect(() => {
    if (
      pathname === '/transactions/expenses' &&
      transactions.length === 0 &&
      getUserBalance === 0
    ) {
      setModalActive(true);
      return;
    }
  }, [pathname, transactions, getUserBalance]);

  const handleToggle = () => {
    setModalActive(!modalActive);
  };

  const confirmBalance = e => {
    e.preventDefault();
    const value = Number(enteredBalance).toFixed(2);
    authStore.updateUserBalance(Number(value));
    e.target.balance.blur();
  };

  const onFocus = () => {
    setAmount('');
  };

  const onBlur = () => {
    setAmount(`${getUserBalance.toFixed(2)} UAH`);
  };

  return (
    <div className={s.container}>
      <span className={s.balance}>Balance:</span>

      <form className={s.wrap} onSubmit={confirmBalance}>
        <div className={s.amount}>
          <input
            className={s.input}
            name="balance"
            value={amount}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            disabled={inputStatus}
          />
        </div>

        <button className={s.confirmBtn} type="submit" disabled={inputStatus}>
          CONFIRM
        </button>
        {modalActive && (
          <Modal
            className={s.modal}
            handleToggle={handleToggle}
            active={modalActive}
            setActive={setModalActive}
          />
        )}
      </form>
    </div>
  );
});

export default Balance;
