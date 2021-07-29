import React, { useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'
import FloatLabel from './template/float-label'
export interface AppProps {
  [p: string]: any
}

export const App: React.FunctionComponent<AppProps> = (props) => {
  const [count, setCount] = useState(0)

  return <FloatLabel />
}
const WapperApp = process.env.NODE_ENV === 'development' ? hot(App) : App
export default WapperApp
