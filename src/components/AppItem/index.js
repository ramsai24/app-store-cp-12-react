// Write your code here

import './index.css'

const AppItem = props => {
  const {appList} = props

  return (
    <li className="app-list-container">
      <img className="img-logo" src={appList.imageUrl} alt={appList.appName} />
      <p>{appList.appName}</p>
    </li>
  )
}

export default AppItem
