import React, { Component } from 'react'
import Transaction from './Transaction';

class Transactions extends Component {
  render(){
      let transactions = this.props.transactions

    return (
      transactions.map(t => <Transaction key={t.vendor} key={t.amount} key={t.category} transaction={t} amout={t.amount} vendor={t.vendor} category={t.category} />)
    );
  }
} 
export default Transactions;