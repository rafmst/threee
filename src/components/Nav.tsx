import React, { useContext } from 'react'
import './Nav.scss'
import { signInWithGoogle, signOut } from './../firebase'
import { AuthContext } from './../services/Auth'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface NavProps extends RouteComponentProps<any> {}

const Nav = (props: NavProps) => {
  const { history } = props
  const { authenticated, user } = useContext(AuthContext)

  const _signIn = async () => {
    await signInWithGoogle()
    history.push('/')
  }

  const _signOut = async () => {
    await signOut()
    history.push('/home')
  }

  return (
    <div id="nav">
      <a href="/" className="logo">
        <svg
          width="103"
          height="26"
          viewBox="0 0 103 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41.0762 20V8.42773H45.3047V5.9082H33.8984V8.42773H38.127V20H41.0762Z"
            fill="black"
          />
          <path
            d="M47.7266 20H50.5684V13.8184C50.5684 12.4219 51.3887 11.4746 52.8145 11.4746C54.1035 11.4746 54.7969 12.2461 54.7969 13.7402V20H57.6387V13.0664C57.6387 10.4785 56.2617 9.02344 53.9473 9.02344C52.3652 9.02344 51.1934 9.76562 50.6953 10.9961H50.5195V5.11719H47.7266V20Z"
            fill="black"
          />
          <path
            d="M60.4023 20H63.2441V14.0332C63.2441 12.5195 64.3086 11.6016 65.8613 11.6016C66.3203 11.6016 66.9844 11.6895 67.209 11.7773V9.18945C66.9648 9.10156 66.4863 9.05273 66.0957 9.05273C64.7285 9.05273 63.6152 9.87305 63.332 10.9473H63.1562V9.22852H60.4023V20Z"
            fill="black"
          />
          <path
            d="M73.5176 11.1719C74.8457 11.1719 75.7051 12.0605 75.7637 13.4863H71.1738C71.2715 12.0898 72.1992 11.1719 73.5176 11.1719ZM75.8223 16.9336C75.5195 17.6465 74.748 18.0469 73.625 18.0469C72.1406 18.0469 71.2031 17.0508 71.1641 15.4492V15.3027H78.5566V14.4336C78.5566 11.0156 76.6816 8.99414 73.5078 8.99414C70.3047 8.99414 68.332 11.1621 68.332 14.668C68.332 18.1641 70.2656 20.2344 73.5469 20.2344C76.1836 20.2344 78.0391 18.9648 78.4688 16.9336H75.8223Z"
            fill="black"
          />
          <path
            d="M85.5488 11.1719C86.877 11.1719 87.7363 12.0605 87.7949 13.4863H83.2051C83.3027 12.0898 84.2305 11.1719 85.5488 11.1719ZM87.8535 16.9336C87.5508 17.6465 86.7793 18.0469 85.6562 18.0469C84.1719 18.0469 83.2344 17.0508 83.1953 15.4492V15.3027H90.5879V14.4336C90.5879 11.0156 88.7129 8.99414 85.5391 8.99414C82.3359 8.99414 80.3633 11.1621 80.3633 14.668C80.3633 18.1641 82.2969 20.2344 85.5781 20.2344C88.2148 20.2344 90.0703 18.9648 90.5 16.9336H87.8535Z"
            fill="black"
          />
          <path
            d="M97.5801 11.1719C98.9082 11.1719 99.7676 12.0605 99.8262 13.4863H95.2363C95.334 12.0898 96.2617 11.1719 97.5801 11.1719ZM99.8848 16.9336C99.582 17.6465 98.8105 18.0469 97.6875 18.0469C96.2031 18.0469 95.2656 17.0508 95.2266 15.4492V15.3027H102.619V14.4336C102.619 11.0156 100.744 8.99414 97.5703 8.99414C94.3672 8.99414 92.3945 11.1621 92.3945 14.668C92.3945 18.1641 94.3281 20.2344 97.6094 20.2344C100.246 20.2344 102.102 18.9648 102.531 16.9336H99.8848Z"
            fill="black"
          />
          <path
            d="M0 0.572797C0 0.25645 0.25645 0 0.572797 0H22.1149C22.4313 0 22.6877 0.25645 22.6877 0.572797V5.40421C22.6877 5.72056 22.4313 5.97701 22.1149 5.97701H0.572797C0.25645 5.97701 0 5.72056 0 5.40421V0.572797Z"
            fill="black"
          />
          <path
            d="M0 20.5958C0 20.2794 0.25645 20.023 0.572797 20.023H22.1149C22.4313 20.023 22.6877 20.2794 22.6877 20.5958V25.4272C22.6877 25.7435 22.4313 26 22.1149 26H0.572797C0.25645 26 0 25.7435 0 25.4272V20.5958Z"
            fill="black"
          />
          <path
            d="M8.3837 10.5843C8.3837 10.2679 8.64015 10.0115 8.95649 10.0115H22.1149C22.4313 10.0115 22.6877 10.2679 22.6877 10.5843V15.4157C22.6877 15.7321 22.4313 15.9885 22.1149 15.9885H8.9565C8.64015 15.9885 8.3837 15.7321 8.3837 15.4157V10.5843Z"
            fill="black"
          />
        </svg>
      </a>
      <div className="menus">
        <ul>
          {(() => {
            if (!authenticated) {
              return (
                <li>
                  <button onClick={_signIn}>Sign in w/ Google</button>
                </li>
              )
            } else {
              return (
                <>
                  <li>
                    <a href="/">Configuration</a>
                  </li>
                  <li>
                    <button onClick={_signOut}>Sign out</button>
                  </li>
                  <li>
                    <span>{user?.displayName}</span>
                  </li>
                </>
              )
            }
          })()}
        </ul>
      </div>
    </div>
  )
}

export default withRouter(Nav)
