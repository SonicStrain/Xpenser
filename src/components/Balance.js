import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);
  var sum = amounts.reduce((acc, item) => (acc += item), 0);

  if(sum < 0){
    sum = 0;
    alert("You have crossed your budget!")
  }

  return (
    <>
    <table>
      <tr>
      <th>
      <h4>Remaining budget</h4>
    <h1>{moneyFormatter(sum)}</h1>
    </th>
    <p>_____</p>
    <th>
      <h4>Net Transaction</h4>
    <h1 className="content" dangerouslySetInnerHTML={{__html: total}}></h1>
    </th>
    </tr>
    </table>
    </>
  )
}
