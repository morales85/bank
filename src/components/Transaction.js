import React, { Component } from 'react'

class Transaction extends Component {

  render(){
    let transaction = this.props.transaction
    return (
      <tr>
        <td>Amount:{transaction.amount}</td>
        <td>Vendor:{transaction.vendor}</td>
        <td>Category:{transaction.category}</td>
      </tr>
        )
  }
}
  export default Transaction;