// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transaction, deleteTransaction} = props
  const {title, amount, transactionType, id} = transaction

  const onDeleting = () => {
    deleteTransaction(id)
  }

  return (
    <li>
      <tr>
        <td>
          <p>{title}</p>
        </td>
        <td>{amount}</td>
        <td>{transactionType}</td>
        <td>
          <button
            className="del-button"
            data-testid="delete"
            onClick={onDeleting}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
              alt="delete"
              className="delete"
            />
          </button>
        </td>
      </tr>
    </li>
  )
}

export default TransactionItem
