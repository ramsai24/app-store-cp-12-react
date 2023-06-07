// Write your code here

import './index.css'

const TabItem = props => {
  const {tabList, tabIdUpdate} = props

  const tabIdUpdation = () => {
    tabIdUpdate(tabList.tabId)
  }

  return (
    <li>
      <button type="button" onClick={tabIdUpdation}>
        {tabList.displayText}
      </button>
    </li>
  )
}

export default TabItem
