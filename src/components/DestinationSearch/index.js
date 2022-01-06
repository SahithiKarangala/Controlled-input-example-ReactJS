import {Component} from 'react'
import DestinationProfile from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchedInput: '',
  }

  onSearchDestination = event => {
    this.setState({searchedInput: event.target.value})
  }

  render() {
    const {searchedInput} = this.state
    const {destinationsList} = this.props
    const searchedItems = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchedInput.toLowerCase()),
    )
    console.log(searchedItems)

    return (
      <div className="app-container">
        <h1 className="main-heading">Destination Search</h1>
        <div className="search-bar-container">
          <input
            type="search"
            placeholder="Search"
            className="search-bar"
            onChange={this.onSearchDestination}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            alt="search icon"
            className="searchIcon"
          />
        </div>

        <ul className="list-container">
          {searchedItems.map(eachItem => (
            <DestinationProfile destinations={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
