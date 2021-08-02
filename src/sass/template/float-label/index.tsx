import React from 'react'
import './index.scss'
export interface FloatLabelProps {
  [p: string]: any
}

export const FloatLabel: React.FunctionComponent<FloatLabelProps> = (props) => {
  return (
    <div styleName="container">
      <div styleName="sub-box">
        <div styleName="box">
          <div styleName="inner-top">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div styleName="inner-bottom">
            <h1 styleName="title">Welcome back!</h1>
            <form action="" method="POST">
              <div styleName="email">
                <input id="email" name="email" type="text" placeholder="john@doe.com" />
                <label htmlFor="email">Email address</label>
              </div>
              <div styleName="password">
                <input id="password" type="password" name="password" placeholder="Password" />
                <label htmlFor="password">Password</label>
              </div>

              <input styleName="submit" type="sumbit" value="Sign in" />
            </form>
            <a href="#" styleName="forget">
              {' '}
              Forgot your password?{' '}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
