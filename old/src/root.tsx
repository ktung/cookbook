import { Outlet, useRouteError } from "react-router";
import Home from "./routes/home";

export default function App() {
  return <Outlet />;
}
export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
      </head>
      <body>
        <Home />
      </body>
    </html>
  );
}