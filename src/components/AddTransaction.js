import React, {useState, useContext, Component} from 'react'
import { GlobalContext } from '../context/GlobalState';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Checkbox from '@material-ui/core/Checkbox';


export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  var [showModal, setShowModal] = useState(false);

  const { addTransaction } = useContext(GlobalContext);

  const getValue = (v) => {
    if(v.target.value == "inc"){
      setAmount((-1)*amount);
    }
  }

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    
    addTransaction(newTransaction);
    
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <table>
        <tr>
            <th><Checkbox color="secondary" value="inc" onChange={(v) => getValue(v)} /></th>
            <th>EXPENSE TRANSACTION</th>
          </tr>
        </table>
        
        <table>
        
          <tr>
          <th>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Expense Details" />
        </div>
        </th>
        <th>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount 
          </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
        </div>
        </th>
        </tr>
        </table>
        <button className="btn">Transaction</button>

      
        <Popup modal={showModal} position="center">
          <div>Popup content here !!</div>
        </Popup>

      </form>
      
      

    </>
  )
}
