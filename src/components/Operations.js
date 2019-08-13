import React, { Component } from 'react'

class Operations extends Component {
  constructor(){
    super()
    this.state = {
      amount: '',
      vendor: '',
      category:''
    }
  }

  makeDeposit = () =>{
    let newTransaction = {...this.state}
    this.props.newTransaction(newTransaction)
    }
  
  makeWithdraw = () => {
    let newTransaction = {...this.state}
    newTransaction.amount = -newTransaction.amount
    this.props.newTransaction(newTransaction)
  }

  changeHandler = e =>{
    let name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }

  render(){

    return (
        <div>
        <input name="amount" type='number' placeholder="Amout" value={this.state.amount} onChange={this.changeHandler}/>
        <input name="vendor" type="text" placeholder="Vendor" value={this.state.vendor} onChange={this.changeHandler}/>
        <input name="category" type="text" placeholder="Category" value={this.state.category} onChange={this.changeHandler}/>
        <div><button onClick={this.makeDeposit} >Deposit</button><button onClick={this.makeWithdraw}>Withdraw</button></div>
        </div>
        );
  }
} 
export default Operations;