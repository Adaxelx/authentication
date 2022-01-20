import { lazy } from "react";
import { useUser } from "./UserContext";

const AuthenticatedApp = lazy(() => import("./AuthenticatedApp"));
const UnauthenticatedApp = lazy(() => import("./UnauthenticatedApp"));

const App = () => {
  const { user } = useUser();
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};
export default App;
