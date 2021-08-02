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
          <div styleName="box">
            <div styleName="box1-left"></div>
            <div styleName="box1-right"></div>
          </div>
          <div styleName="box">
            <div styleName="box2-left"></div>
            <div styleName="box2-right"></div>
          </div>
          <div styleName="box">
            <div styleName="box3-left"></div>
            <div styleName="box3-right"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
