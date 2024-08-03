import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

class PasswordManager extends Component {
  state = {
    isShowButton: false,
    searchInput: '',
    website: '',
    username: '',
    password: '',
    initialList: [],
  }

  getDeleteButtonClicked = id => {
    const {initialList} = this.state
    const filteredList = initialList.filter(each => each.id !== id)

    this.setState({initialList: filteredList})
  }

  onChangeSite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  newClassList = () => {
    const newValue = (
      <div className="no-password-list-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
          className="no-password-img"
        />
        <p className="no-password-img-text">No Passwords</p>
      </div>
    )

    return newValue
  }

  onSearchToChange = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onSearchResults = () => {
    const {initialList, searchInput} = this.state

    const newItemsList = initialList.filter(each =>
      each.site.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return newItemsList
  }

  onChangeIsShownButton = () => {
    this.setState(prevState => ({isShowButton: !prevState.isShowButton}))
  }

  onAddingUserPassword = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newObject = {id: uuidv4(), password, name: username, site: website}

    this.setState(prevState => ({
      initialList: [...prevState.initialList, newObject],
      searchInput: '',
      website: '',
      username: '',
      password: '',
    }))
  }

  render() {
    const newRenderList = this.newClassList()
    const {initialList, isShowButton, website, username, password} = this.state

    const readyList = this.onSearchResults()
    const isEmptyList = readyList.length > 0

    const appLogo =
      'https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png'
    const searchWebsiteImg =
      'https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png'
    const usernameImage =
      'https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png'
    const passwordImage =
      'https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png'
    const passwordManager =
      'https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png'
    const searchImg =
      'https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png'

    return (
      <div className="app-container">
        <div>
          <img className="app-logo" src={appLogo} alt="app logo" />
        </div>
        <div className="inputs-and-image-card">
          <div className="inputs-card">
            <h1 className="inputs-card-heading">Add New Password</h1>
            <form onSubmit={this.onAddingUserPassword}>
              <div className="website-input-container">
                <img
                  alt="website"
                  className="website-image"
                  src={searchWebsiteImg}
                />
                <input
                  value={website}
                  type="text"
                  onChange={this.onChangeSite}
                  placeholder="Enter Website"
                  className="website-input"
                />
              </div>
              <div className="website-input-container">
                <img
                  alt="username"
                  className="website-image"
                  src={usernameImage}
                />
                <input
                  value={username}
                  onChange={this.onChangeUsername}
                  type="text"
                  placeholder="Enter Username"
                  className="website-input"
                />
              </div>
              <div className="website-input-container">
                <img
                  alt="password"
                  className="website-image"
                  src={passwordImage}
                />
                <input
                  value={password}
                  onChange={this.onChangePassword}
                  type="password"
                  placeholder="Enter Password"
                  className="website-input"
                />
              </div>
              <div className="submit-button-container">
                <button type="submit" className="submit-button">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="image-card">
            <img
              src={passwordManager}
              alt="password manager"
              className="password-manager"
            />
          </div>
        </div>

        <div className="no-password-view">
          <div className="header-class">
            <div className="header-first-text">
              <h1 className="header-main-text">Your Passwords </h1>
              <p className="list-count">{initialList.length}</p>
            </div>
            <div className="website-input-container2">
              <img alt="search" className="search-image" src={searchImg} />
              <input
                onChange={this.onSearchToChange}
                type="search"
                placeholder="Search"
                className="search-input"
              />
            </div>
          </div>
          <hr className="horizontal-line" />
          <div className="show-password-class">
            <input
              onChange={this.onChangeIsShownButton}
              id="checkbox"
              type="checkbox"
            />
            <label className="show-password" htmlFor="checkbox">
              Show Passwords
            </label>
          </div>
          <div>
            {isEmptyList ? (
              <ul className="unordered-list-container">
                {readyList.map(each => (
                  <PasswordItem
                    eachList={each}
                    key={each.id}
                    isShowButton={isShowButton}
                    getDeleteButtonClicked={this.getDeleteButtonClicked}
                  />
                ))}
              </ul>
            ) : (
              newRenderList
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
