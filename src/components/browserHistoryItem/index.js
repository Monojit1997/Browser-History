import './index.css'

const BrowserhistoryItem = props => {
  const {eachItem} = props
  const {timeAccessed, logoUrl, title, domainUrl} = eachItem
  //     const deleteItem = () => {
  //       deleteEachItem(id)
  //     }
  return (
    <li className="list-item">
      <p>{timeAccessed}</p>
      <div className="image-container">
        <img src={logoUrl} alt="domain logo" />
      </div>
      <div className="title-logo-container">
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div>
        <button type="button" data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserhistoryItem
