import './index.css'

import {Component} from 'react'

class Tabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      eachList: props.eachList,

      newTab: props.newTab,
      tabId: props.eachList.tabId,
    }
  }

  changeTab = () => {
    const {newTab, tabId} = this.state
    // const {reqTabId} = this.props
    // console.log(reqTabId)
    newTab(tabId)
  }

  checkActiveTab = () => {
    const {tabId} = this.state
    const {reqTabId} = this.props

    // console.log(reqTabId)
    if (reqTabId === tabId) {
      return 'active-tab-btn'
    }
    return 'in-active-tab-btn'
  }

  render() {
    const {eachList} = this.state
    // console.log(eachList)
    const {displayText} = eachList
    // console.log(displayText)
    return (
      <li className="each-tab-list">
        <button
          type="button"
          onClick={this.changeTab}
          className={this.checkActiveTab()}
        >
          {displayText}
        </button>
      </li>
    )
  }
}

export default Tabs
