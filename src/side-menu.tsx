import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { routers } from './router'
import css from 'classNames'
export interface SideMenuProps {}

export const SideMenu: React.FunctionComponent<SideMenuProps> = (props) => {
  const location = useLocation()
  return (
    <div className="w-[200px] bg-blue-600 shadow-xl space-y-2 text-white  h-screen flex flex-col p-4">
      {routers.map((item) => {
        return (
          <Link
            className={css(
              { 'bg-white text-blue-500': location.pathname === item.path },
              'h-12 w-full hover:bg-blue-900/20  flex items-center p-2 rounded',
            )}
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
