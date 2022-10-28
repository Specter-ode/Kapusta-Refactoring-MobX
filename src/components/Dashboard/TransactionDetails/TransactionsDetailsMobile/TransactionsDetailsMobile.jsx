import s from './TransactionDetailsMobile.module.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { ConfirmActionModal } from 'components/Modal/QuestionModal';
import { observer } from 'mobx-react-lite';
import { transactionStore, authStore } from 'mobxStores/stores';
import { toJS } from 'mobx';

const TransactionDetailsMobile = () => {
  const [modal, setModal] = useState(false);
  const getUserTransaction = authStore.userData.transactions;
  const [transactionOnDeleteId, setTransactionOnDeleteId] = useState('');
  const [totalArr, setTotalArr] = useState(() => getUserTransaction);

  const { deleteTransaction } = transactionStore;
  const { getCurrentUser } = authStore;

  // useEffect(() => {
  //   setTotalArr([...getUserTransaction].reverse());
  // }, [getUserTransaction]);

  const handleDeleteTransaction = async id => {
    setModal(false);
    try {
      await deleteTransaction(id);
      await getCurrentUser();
      setTotalArr(totalArr.filter(item => item._id !== id));
    } catch (error) {
      return error.message;
    }
  };
  console.log('totalArr: ', totalArr.length);
  console.log('getUserTransaction: ', toJS(getUserTransaction.length));
  const amountNormalizer = (sign, amount) => {
    return `${sign}` + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ') + ' грн.';
  };
  const onDelete = id => {
    setModal(true);
    setTransactionOnDeleteId(id);
  };
  const elements = totalArr.map(item => {
    const transactionsType = item.category === 'З/П' || item.category === 'Доп. доход';
    return (
      <li className={s.list__item} key={item._id}>
        <div className={s.item__container}>
          <h2 className={s.title}>{item.description}</h2>
          <div className={s.text__container}>
            <p className={s.item__text}>{item.date}</p>
            <p className={s.item__text}>{item.category}</p>
          </div>
        </div>
        <div className={s.divSumAndButtonFlex}>
          {transactionsType ? (
            <p className={s.plus}>{amountNormalizer('+', item.amount)}</p>
          ) : (
            <p className={s.minus}>{amountNormalizer('-', item.amount)}</p>
          )}
          <button onClick={() => onDelete(item._id)} type="button" className={s.btnDelete}></button>
        </div>
      </li>
    );
  });
  return (
    <div className={s.tableContainer}>
      <ul className={s.list}>{elements}</ul>
      {modal && (
        <ConfirmActionModal
          title="Are you sure?"
          onClickYes={() => handleDeleteTransaction(transactionOnDeleteId)}
          onClickNo={() => setModal(false)}
        />
      )}
    </div>
  );
};

export default observer(TransactionDetailsMobile);
