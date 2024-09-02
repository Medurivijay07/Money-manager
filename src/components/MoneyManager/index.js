import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    transactionType: 'INCOME',
    transactionsList: [],
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeTransaction = event => {
    this.setState({transactionType: event.target.value})
  }

  onSubmitting = event => {
    event.preventDefault()
    const {title, amount, transactionType, income, expenses} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      transactionType,
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      title: '',
      amount: '',
      transactionType: 'INCOME',
    }))
    this.setState({balance: income - expenses})
  }

  deleteTransaction = id => {
    const {transactionsList} = this.state
    const filteredtransactionList = transactionsList.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({transactionsList: filteredtransactionList})
  }

  calculateMoneyDetails = () => {
    const {transactionsList} = this.state

    let income = 0
    let expenses = 0
    transactionsList.forEach(eachItem => {
      if (eachItem.transactionType === 'INCOME') {
        income += parseInt(eachItem.amount)
      }
      if (eachItem.transactionType === 'EXPENSES') {
        expenses += parseInt(eachItem.amount)
      }
    })
    const balance = income - expenses
    return {income, expenses, balance}
  }

  render() {
    const {title, amount, transactionType, transactionsList} = this.state
    const {income, expenses, balance} = this.calculateMoneyDetails()
    return (
      <div className="main-container">
        <div className="manager-container">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your{' '}
            <span className="manager-style">Money Manager</span>
          </p>
        </div>
        <MoneyDetails balance={balance} income={income} expenses={expenses} />
        <div className="bottom-container">
          <div className="form-container">
            <h1>Add Transaction</h1>
            <form className="form-details" onSubmit={this.onSubmitting}>
              <label htmlFor="title">TITLE</label>
              <input
                type="text"
                placeholder="TITLE"
                id="title"
                className="input"
                onChange={this.onChangeTitle}
                value={title}
              />
              <label htmlFor="amount">AMOUNT</label>
              <input
                type="text"
                placeholder="AMOUNT"
                id="amount"
                className="input"
                onChange={this.onChangeAmount}
                value={amount}
              />
              <label htmlFor="type">TYPE</label>
              <select
                id="type"
                className="input"
                onChange={this.onChangeTransaction}
                value={transactionType}
              >
                {transactionTypeOptions.map(eachType => (
                  <option value={eachType.optionId}>
                    {eachType.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1>History</h1>
            <ul className="unordered-list">
              <table border="2">
                <li>
                  <tr>
                    <th>
                      <p>Title</p>
                    </th>
                    <th>
                      <p>Amount</p>
                    </th>
                    <th>
                      <p>Type</p>
                    </th>
                    <th>Action</th>
                  </tr>
                </li>
                {transactionsList.map(eachItem => (
                  <TransactionItem
                    transaction={eachItem}
                    key={eachItem.id}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </table>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
