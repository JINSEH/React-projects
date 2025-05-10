import Create from "./pages/Create";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import RootLayout from "./layouts/RootLayout";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="create" element={<Create />}></Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
