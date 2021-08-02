import React, { useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import { routers } from './router'
import { SideMenu } from './side-menu'
import './app.scss'
export interface AppProps {
  [p: string]: any
}

export const App: React.FunctionComponent<AppProps> = (props) => {
  // const location = useLocation()
  return (
    <Router>
      <div styleName="box">
        <SideMenu />
        <div styleName="router-box">
          {routers.map((item) => {
            return <Route path={item.path} key={item.path} component={item.component} />
          })}
        </div>
      </div>
    </Router>
  )
}
const WapperApp = process.env.NODE_ENV === 'development' ? hot(App) : App
export default WapperApp
