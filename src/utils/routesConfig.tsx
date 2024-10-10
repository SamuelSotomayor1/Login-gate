import { Home } from "../components/home";
import { Login } from "../components/login";

export const routes = [
    {
      path: '/',
      component: <Home />
    },
    {
      path: '/login',
      component: <Login />
    }
]