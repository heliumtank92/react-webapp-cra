import React from 'react'
import {
  createBrowserRouter,
  redirect
} from 'react-router-dom'
import ErrorBoundary from 'src/Components/ErrorBoundary'

import { APP_ROUTES, NAV_LINKS } from 'src/Constants/APP_ROUTES'
import { checkIfLoggedIn } from 'src/Utils/authentication'

const AuthLayout = React.lazy(
  () => import(
    /* webpackChunkName: "AuthLayout" */
    /* webpackMode: "lazy" */
    /* webpackPreload: true */
    'src/Layouts/Auth.Layout'
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

const UnauthLayout = React.lazy(
  () => import(
    /* webpackChunkName: "DsExampleLayout" */
    /* webpackMode: "lazy" */
    /* webpackPreload: true */
    'src/Layouts/Unauth.Layout'
  )
)

const HomePage = React.lazy(
  () => import(
    /* webpackChunkName: "HomePage" */
    /* webpackMode: "lazy" */
    /* webpackPreload: true */
    'src/Pages/Home/Home.Container'
  )
)

const LoginPage = React.lazy(
  () => import(
    /* webpackChunkName: "LoginPage" */
    /* webpackMode: "lazy" */
    /* webpackPreload: true */
    'src/Pages/Login/Login.Container'
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

const ExamplesPage = React.lazy(() => import('src/DesignSystem/Examples'))

console.log(NAV_LINKS)
const DEFAULT_LOGGED_IN_ROUTE = NAV_LINKS.AUTH.HOME
const DEFAULT_NOT_LOGGED_IN_ROUTE = NAV_LINKS.UNAUTH.LOGIN

const constructFromUrl = (route, params, redirectRoute) => {
  const fromUrl = route
  Object.entries(params).forEach(entry => {
    const [key, value] = entry
    fromUrl.replace(`:${key}`, value)
  })
  const redirectUrl = `${redirectRoute}?from=${fromUrl}`
  return redirectUrl
}

const redirectIfNotLoggedIn = (route) => ({ params }) => {
  const isLoggedIn = checkIfLoggedIn()
  if (!isLoggedIn) {
    const redirectUrl = constructFromUrl(route, params, DEFAULT_NOT_LOGGED_IN_ROUTE)
    return redirect(redirectUrl)
  }
}

const redirectIfLoggedIn = (route) => ({ params }) => {
  const isLoggedIn = checkIfLoggedIn()
  if (isLoggedIn) {
    const redirectUrl = constructFromUrl(route, params, DEFAULT_LOGGED_IN_ROUTE)
    return redirect(redirectUrl)
  }
}

const getAppRouter = () => createBrowserRouter([
  {
    path: APP_ROUTES.AUTH.BASE,
    element: <AuthLayout />,
    children: [
      {
        path: APP_ROUTES.AUTH.HOME,
        element: <HomePage />,
        loader: redirectIfNotLoggedIn(NAV_LINKS.AUTH.HOME)
      }
    ],
    errorElement: <ErrorBoundary />
  },
  {
    path: APP_ROUTES.UNAUTH.BASE,
    element: <UnauthLayout />,
    children: [
      {
        path: APP_ROUTES.UNAUTH.LOGIN,
        element: <LoginPage />,
        loader: redirectIfLoggedIn(NAV_LINKS.UNAUTH.LOGIN)
      }
    ],
    errorElement: <ErrorBoundary />
  },
  {
    path: APP_ROUTES.DS_EXAMPLES.BASE,
    element: <DsExampleLayout />,
    children: [
      {
        path: APP_ROUTES.DS_EXAMPLES.INDEX,
        element: <ExamplesPage />
      }
    ],
    errorElement: <ErrorBoundary />
  },
  {
    path: APP_ROUTES.ANY.BASE,
    element: <Page404Page />
  }
])

export default getAppRouter
