import { useAuth } from "../auth/authProvider";

export const Game = () => {
  const auth = useAuth();
  return (
    <div>Bienvenido al Juego {auth.getUser()?.username || ""}</div>
  )
}
