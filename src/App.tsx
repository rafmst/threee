import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Splash from './components/Splash'
import Home from './pages/Home'
import Lists from './pages/Lists'
import { AuthProvider } from './services/Auth'
import PrivateRoute from './services/PrivateRoute'

function App() {
  return (
    <AuthProvider>
      <Splash />
      <Router>
        <div>
          <Nav />
          <div className="container">
            <PrivateRoute exact path="/" component={Lists} />
            <Route exact path="/home" component={Home} />
          </div>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
