// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <ul className="unordered-list">
      <li className="card-container1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount" className="amount">
            Rs {balance}
          </p>
        </div>
      </li>
      <li className="card-container2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount" className="amount">
            Rs {income}
          </p>
        </div>
      </li>
      <li className="card-container3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount" className="amount">
            Rs {expenses}
          </p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
