import React from "react";
import Library from "./components/Library";
import { createBrowserRouter } from "react-router-dom";
import Open from "./components/Open";

function App() {
  return <div></div>;
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Open />,
  },
  {
    path: "/library",
    element: <Library />,
  },
]);

export default App;
