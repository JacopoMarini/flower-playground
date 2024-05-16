import { APP_ROUTES } from '../../utils/appRoutes'

export type NavigateProps = {
  path: keyof typeof APP_ROUTES
  replace?: boolean
}
