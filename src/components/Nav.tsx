import React from 'react'
import './Nav.css'

type NavProps = {}
type NavState = {
  fade: boolean
}

class Nav extends React.Component<NavProps, NavState> {
  constructor(props: NavProps) {
    super(props)
    this.state = {
      fade: false,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ fade: true })
    }, 1000)
  }

  render() {
    return <div id="nav">This is the navigation</div>
  }
}

export default Nav
