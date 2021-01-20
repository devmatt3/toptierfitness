import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import { repoName } from './prismic-configuration';
import { Home, Preview, NotFound } from './pages'

/**
 * Main application com ponenet
 */
const App = (props) => {

  return (
    <Fragment>
      <Helmet>
        <script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`} />
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Route exact from='/' component={Home} />
          <Route exact path='/preview' component={Preview} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
