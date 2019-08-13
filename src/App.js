import React, { Component } from 'react';
import './App.css';
import Transactions from './components/Transactions';
import Operations from './components/Operations';
import Transaction from './components/Transaction';
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      transactions: [],
      balance: ''
    }
  }
  getBalance =() =>{
  let balance = this.state.transactions.map( a=> a.amount)
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const finalBalance = balance.reduce(reducer)
  this.setState({
    balance: finalBalance
  })
  }
  componentDidMount = async ()=>{
    let data = await axios.get("http://localhost:5000/transactions", function(){})
    console.log(data.data)
    this.setState({
      transactions: data.data
    })
    this.getBalance()
  }

  
  newTransaction = async transaction => {
    let data = await axios.post("http://localhost:5000/transaction", transaction, function(){})
    this.setState({
      transactions: data.data
    })
    this.getBalance()

  }


  render(){
  return (
  <div>
    <div>Balance: <span className={this.state.balance > 0? "positive": "negative"}>{this.state.balance}</span></div>
    <Operations newTransaction={this.newTransaction} balance={this.state.balance} />
    <Transactions transactions={this.state.transactions} /> 
  </div>
    )
  }         
}

export default App;
