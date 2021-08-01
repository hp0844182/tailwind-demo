import React from 'react'
import './index.scss'
export interface AnimateBackProps {}

export const AnimateBack: React.FunctionComponent<AnimateBackProps> = (props) => {
  123
  return (
    <div styleName="container">
      <div styleName="wrraper">
        <div
          styleName="back-dot"
          className=" absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full  mix-blend-multiply  blur-xl"
        ></div>
        <div
          styleName="back-dot"
          className=" top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full  mix-blend-multiply  blur-xl"
        ></div>
        <div
          styleName="back-dot"
          className=" -bottom-8 left-32 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply  blur-xl"
        ></div>

        <div className="m-8 relative space-y-4 ">
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
