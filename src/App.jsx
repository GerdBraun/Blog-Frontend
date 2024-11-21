import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Layout";
import ErrorPage from "./pages/ErrorPage";
import PostList from "./pages/PostList";
import PostSingle from "./pages/PostSingle";
import PostAdd from "./pages/PostAdd";
import PostEdit from "./pages/PostEdit";
import UserList from "./pages/UserList";
import UserSingle from "./pages/UserSingle";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<PostList />} />
      <Route path="posts">
        <Route path=":id" element={<PostSingle />} />
        <Route path="add" element={<PostAdd />} />
        <Route path="edit">
          <Route path=":id" element={<PostEdit />} />
        </Route>
      </Route>
      <Route path="users">
        <Route path="signup" element={<div>sign up</div>} />
        <Route path="login" element={<div>login</div>} />
        <Route path="logout" element={<div>logout</div>} />
        <Route path="list" element={<UserList />} />
        <Route path=":id" element={<UserSingle />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
