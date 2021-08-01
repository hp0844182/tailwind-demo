import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { routers } from './router'
import css from 'classNames'
import './side.scss'
export interface SideMenuProps {}

export const SideMenu: React.FunctionComponent<SideMenuProps> = (props) => {
  const location = useLocation()
  return (
    <div styleName="box">
      {routers.map((item) => {
        return (
          <Link
            styleName={css('link', {
              active: location.pathname === item.path,
            })}
            key={item.path}
            to={item.path}
          >
            {item.name}
          </Link>
        )
      })}
    </div>
  )
}
