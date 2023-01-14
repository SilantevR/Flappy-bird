import { createBrowserRouter } from 'react-router-dom'
import { NotFoundPage } from '../../pages/NotFoundPage'
import { ExamplePage } from '../../pages/ExamplePage'
import { ProfilePage } from '../../pages/ProfilePage'
import { PasswordPage } from '../../pages/PasswordPage'
import { SignInPage } from '../../pages/SignInPage'
import { SignUpPage } from '../../pages/SignUpPage'

export const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFoundPage />,
  },
  {
    path: '/',
    element: <SignInPage />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/password',
    element: <PasswordPage />,
  },
  // {
  //   path: '/leaderboard',
  //   element: <LeaderboardPage />,
  // },
  // {
  //   path: '/game',
  //   element: <GamePage />,
  // },
])
