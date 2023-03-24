import './index.css'

import {Component} from 'react'

import BrowserhistoryItem from '../browserHistoryItem/index'

class Browserhistory extends Component {
  state = {searchInput: ''}

  onSearchResults = event => {
    this.setState({searchInput: event.target.value})
  }

  //   deleteEachItem = id => {

  //   }

  render() {
    const {historyList} = this.props
    const {searchInput} = this.state

    const searchResults = historyList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg-container">
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history"
          />
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search"
            />
            <input
              type="search"
              placeholder="Search History"
              className="input"
              onChange={this.onSearchResults}
            />
          </div>
        </div>
        <div className="history-container">
          <div className="history-item-container">
            <ul>
              {searchResults.length === 0 ? (
                <p>There is no history to show</p>
              ) : (
                searchResults.map(eachItem => (
                  <BrowserhistoryItem eachItem={eachItem} key={eachItem.id} />
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Browserhistory
