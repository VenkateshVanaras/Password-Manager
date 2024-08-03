import './index.css'

const PasswordItem = props => {
  const {eachList, isShowButton, getDeleteButtonClicked} = props
  const {site, id, password, name} = eachList
  const initialLetter = site[0].toUpperCase()
  const deleteImg =
    'https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png'
  const starsImg =
    'https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png'

  const deleteButtonClicked = () => {
    getDeleteButtonClicked(id)
  }

  return (
    <li className="list-item">
      <p className="initial-letter">{initialLetter}</p>
      <div className="all-paras">
        <p className="para">{site}</p>
        <p className="para">{name}</p>
        {isShowButton ? (
          <p className="para">{password}</p>
        ) : (
          <img alt="stars" className="password-img" src={starsImg} />
        )}
      </div>
      <button
        data-testid="delete"
        className="delete-button"
        type="button"
        onClick={deleteButtonClicked}
      >
        <img alt="delete" className="delete" src={deleteImg} />
      </button>
    </li>
  )
}

export default PasswordItem
