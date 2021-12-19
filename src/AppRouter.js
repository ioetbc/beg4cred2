import React from 'react'

import App from './App'
import { NFTDetails } from './pages/NFTDetails'
import { HashRouter, Switch, Link, Route, Redirect } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export default function AppRouter() {
  return (
    <>
      <HashRouter>
        <Route path="/" render={() => <App />}></Route>
        <Route
          render={({ location }) => (
            <>
              <TransitionGroup>
                <CSSTransition key={location.pathname} classNames="fade" timeout={1000}>
                  <Switch location={location}>
                    <Route path={`/NFT`} render={() => <NFTDetails location={location} />} />
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
