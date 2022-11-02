import s from './TransactionDetailsMobile.module.css';
import { useState } from 'react';
import { ConfirmActionModal } from 'components/Modal/QuestionModal';
import { observer } from 'mobx-react-lite';
import { authStore } from 'mobxStores/stores';

const TransactionDetailsMobile = () => {
  const [modal, setModal] = useState(false);
  const [transactionOnDeleteId, setTransactionOnDeleteId] = useState('');
  const { deleteTransactionMob, userData } = authStore;

  const handleDeleteTransaction = async id => {
    setModal(false);
    try {
      await deleteTransactionMob(id);
    } catch (error) {
      return error.message;
    }
  };
  const amountNormalizer = (sign, amount) => {
    return `${sign}` + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ') + ' грн.';
  };
  const onDelete = id => {
    setModal(true);
    setTransactionOnDeleteId(id);
  };
  const elements = userData.transactions.map(item => {
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
      <ul className={s.list}>{elements.reverse()}</ul>
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
