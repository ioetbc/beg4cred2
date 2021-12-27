import React from 'react'

import Shop from './Shop'
import HomePage from './HomePage'
import Contact from './Contact'
import Tattoos from './Tattoos'
import AboutContact from './AboutContact'
import { NFTDetails } from './pages/NFTDetails'
import { HashRouter, Switch, Link, Route, Redirect } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export default function AppRouter() {
  return (
    <>
      <HashRouter>
        <Route path="/" exact render={() => <HomePage />}></Route>
        <Route
          render={({ location }) => (
            <>
              <TransitionGroup>
                <CSSTransition key={location.pathname} classNames="fade" timeout={1000}>
                  <Switch location={location}>
                    <Route
                      path={['/shop/workIsHell', '/shop/editedAds']}
                      exact
                      render={() => <Shop location={location} />}
                    />
                    <Route path="/shop/details" render={() => <NFTDetails location={location} />} />
                    <Route path="/contact" render={() => <Contact location={location} />} />
                    <Route path="/tattoos" render={() => <Tattoos location={location} />} />
                    <Route path="/about" render={() => <AboutContact location={location} />} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </>
          )}
        />
      </HashRouter>
    </>
  )
}
