import './index.css'
import ReactDom from 'react-dom'
import React from 'react'

export interface TestProps {}

export const Test: React.FunctionComponent<TestProps> = (props) => {
  return (
    <div
      className="dark:bg-black group bg-white lg:bg-red-500 h-screen w-screen
     "
    >
      <button disabled className="peer btn over">
        提交
      </button>
    </div>
  )
}

ReactDom.render(<Test />, document.getElementById('root'))
