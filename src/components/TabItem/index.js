// Write your code here

import './index.css'

const TabItem = props => {
  const {tabList, tabIdUpdate, isActive} = props

  const tabActiveStatus = isActive ? 'active-tab-btn' : ''
  const tabIdUpdation = () => {
    tabIdUpdate(tabList.tabId)
  }

  return (
    <li className="tab-item">
      <button
        className={`btn ${tabActiveStatus}`}
        type="button"
        onClick={tabIdUpdation}
      >
        {tabList.displayText}
      </button>
    </li>
  )
}

export default TabItem
