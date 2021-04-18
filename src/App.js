import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
     <GlobalProvider>
       <div className = "">
       <div className = "">
        
       
      <div className="container">
      <Header />
      <Balance />
      <IncomeExpenses />
      <AddTransaction /> 

        
      </div>
      
      </div>
      <div className = "">
        <TransactionList />
      </div>
      </div>
      
      </GlobalProvider>
  );
}

export default App;