import s from './Chart.module.css';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { transactionStore } from 'mobxStores/stores';
import { observer } from 'mobx-react-lite';

const formated = number =>
  new Intl.NumberFormat('uk', { minimumFractionDigits: 2 }).format(number).replace(',', '.');

const handleChosenCategoryUniqueLabels = (arr, category) => {
  return arr
    ?.filter(item => item.category === category)
    ?.map(({ description }) => description)
    .filter((el, index, array) => array.indexOf(el) === index);
};

const Chart = ({ dateTransactionFilter, category }) => {
  const { expenseTransactions, incomeTransactions } = transactionStore;
  const { expenses } = expenseTransactions;
  const { incomes } = incomeTransactions;
  const MONTH_CASHFLOW = [];

  const [diagramWidth, setDiagramWidth] = useState(window.innerWidth - 40);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const handleResize = () => {
    if (window.innerWidth < 480) {
      setDiagramWidth(window.innerWidth - 40);
    } else setDiagramWidth(440);
    setIsMobile(window.innerWidth < 768);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (incomes !== undefined && expenses !== undefined) {
    MONTH_CASHFLOW.push(...incomes, ...expenses);
  }
  const chosenCategoryUniqueLabels = handleChosenCategoryUniqueLabels(MONTH_CASHFLOW, category);

  const diagramForSelectedMonth = chosenCategoryUniqueLabels
    ?.map(item => ({
      descriptionName: item,
      amount: dateTransactionFilter(MONTH_CASHFLOW).reduce((acc, transaction) => {
        return item === transaction.description ? acc + transaction.amount : acc;
      }, 0),
    }))
    .sort((firstAmount, secondAmount) => secondAmount.amount - firstAmount.amount)
    .filter(el => el.amount !== 0);
  const maxAmount = diagramForSelectedMonth[0]?.amount;
  return (
    <ul className={s.list}>
      {diagramForSelectedMonth.map(({ descriptionName, amount }, index) => (
        <li className={s.item} key={nanoid()}>
          {isMobile ? (
            <>
              <div
                className={s.description}
                style={{
                  width: (amount / maxAmount) * diagramWidth + 10,
                }}
              >
                <p className={s.category}>{descriptionName}&nbsp;</p>
                <p className={s.price}>{formated(amount)}&nbsp;&#8372;</p>
              </div>
              <div
                style={{
                  width: (amount / maxAmount) * diagramWidth,
                  height: 15,
                  background: index % 3 === 0 ? '#FF751D' : '#FED9BF',
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                }}
              ></div>
            </>
          ) : (
            <>
              <p className={s.price}>{formated(amount)}&nbsp;&#8372;</p>
              <div
                style={{
                  width: 38,
                  height: (amount / maxAmount) * 328,
                  background: index % 3 === 0 ? '#FF751D' : '#FED9BF',
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                }}
              ></div>
              <p className={s.category}>{descriptionName}&nbsp;</p>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};
export default observer(Chart);
