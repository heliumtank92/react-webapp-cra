import React from 'react'
import {
  createBrowserRouter
  // redirect
} from 'react-router-dom'
import ErrorBoundary from 'src/Components/ErrorBoundary'

import APP_ROUTES from 'src/Constants/APP_ROUTES'
// import { checkIfLoggedIn } from 'src/Utils/authentication'

const MainLayout = React.lazy(
  () => import(
    /* webpackChunkName: "MainLayout" */
    /* webpackMode: "lazy" */
    /* webpackPreload: true */
    'src/Layouts/Main.Layout'
  )
)

const DsExampleLayout = React.lazy(
  () => import(
    /* webpackChunkName: "DsExampleLayout" */
    /* webpackMode: "lazy" */
    /* webpackPreload: true */
    'src/Layouts/DsExample.Layout'
  )
)

const Page404Page = React.lazy(
  () => import(
    /* webpackChunkName: "Page404Page" */
    /* webpackMode: "lazy" */
    /* webpackPreload: true */
    'src/Pages/Page404/Page404.Container'
  )
)

const ExamplesPage = React.lazy(
  () => import(
    /* webpackChunkName: "ExamplesPage" */
    /* webpackMode: "lazy" */
    /* webpackPreload: true */
    'src/DesignSystem/Examples'
  )
)

// const DEFAULT_LOGGED_IN_ROUTE = NAV_LINKS.ANY
// const DEFAULT_NOT_LOGGED_IN_ROUTE = NAV_LINKS.ANY

// const constructFromUrl = (route, params, redirectRoute) => {
//   const fromUrl = route
//   Object.entries(params).forEach(entry => {
//     const [key, value] = entry
//     fromUrl.replace(`:${key}`, value)
//   })
//   const redirectUrl = `${redirectRoute}?from=${fromUrl}`
//   return redirectUrl
// }

// const redirectIfNotLoggedIn = (route) => ({ params }) => {
//   const isLoggedIn = checkIfLoggedIn()
//   if (!isLoggedIn) {
//     const redirectUrl = constructFromUrl(route, params, DEFAULT_NOT_LOGGED_IN_ROUTE)
//     return redirect(redirectUrl)
//   }
// }

// const redirectIfLoggedIn = (route) => ({ params }) => {
//   const isLoggedIn = checkIfLoggedIn()
//   if (isLoggedIn) {
//     const redirectUrl = constructFromUrl(route, params, DEFAULT_LOGGED_IN_ROUTE)
//     return redirect(redirectUrl)
//   }
// }

const getAppRouter = () => createBrowserRouter([
  {
    element: <DsExampleLayout />,
    children: [
      {
        path: APP_ROUTES.DS_EXAMPLES.pathname,
        element: <ExamplesPage />
      }
    ],
    errorElement: <ErrorBoundary />
  },
  {
    path: APP_ROUTES.ANY.pathname,
    element: <Page404Page />
  }
])

export default getAppRouter
