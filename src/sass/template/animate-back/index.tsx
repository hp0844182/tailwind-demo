import React from 'react'
import './index.scss'
export interface AnimateBackProps {}

export const AnimateBack: React.FunctionComponent<AnimateBackProps> = (props) => {
  123
  return (
    <div styleName="container">
      <div styleName="wrraper">
        <div styleName="back-dot dot1"></div>
        <div styleName="back-dot dot2"></div>
        <div styleName="back-dot dot3"></div>

        <div styleName="content-box">
          <div
            className="p-5 bg-white rounded-lg flex items-center 
          justify-between space-x-8"
          >
            <div className="flex-1 h-4 bg-gray-300 rounded"></div>
            <div className="w-24 h-6 rounded-lg bg-purple-300"></div>
          </div>
          <div
            className="p-5 bg-white rounded-lg flex items-center 
          justify-between space-x-6"
          >
            <div className="flex-1 h-4 bg-gray-300 rounded"></div>
            <div className="w-20 h-6 rounded-lg bg-yellow-300"></div>
          </div>
          <div
            className="p-5 bg-white rounded-lg flex items-center 
          justify-between space-x-10"
          >
            <div className="flex-1 h-4 bg-gray-300 rounded"></div>
            <div className="w-28 h-6 rounded-lg bg-pink-400"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
