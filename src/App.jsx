import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import PostSingle from "./pages/PostSingle";
import PostAdd from "./pages/PostAdd";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/posts/:id" element={<PostSingle />} />
    <Route path="/posts/add" element={<PostAdd />} />
    <Route path="/users/login" element={<div>login</div>} />
    <Route path="/users/logout" element={<div>logout</div>} />
    <Route path="*" element={<ErrorPage />} />
  </Route>)
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
