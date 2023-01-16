import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import AppStore, { PersistedAppStore } from 'src/Configurations/AppStore'
import App from './App'

import * as serviceWorkerRegistration from 'src/serviceWorkerRegistration'
import reportWebVitals from 'src/reportWebVitals'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={AppStore}>
      <PersistGate
        persistor={PersistedAppStore}
        onBeforeLift={() => ({})}
      >
        {(persisted) => <App persisted={persisted} />}
      </PersistGate>
    </Provider>
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
