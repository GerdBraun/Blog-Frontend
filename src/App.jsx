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
import ImageUpload from "./pages/ImageUpload";
import ShopCartList from "./pages/ShopCartList";
import ShopCartSingle from "./pages/ShopCartSingle";
import ShopProductList from "./pages/ShopProductList";
import Logout from "./pages/Logout";

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
      <Route path="shop">
        <Route path="products" element={<ShopProductList />} />
        <Route path="products/:id" element={<div>shop-product-single</div>} />
        <Route path="categories" element={<div>shop-categories</div>} />
        <Route path="categories/:id" element={<div>shop-category-single</div>} />
        <Route path="carts" element={<ShopCartList />} />
        <Route path="carts/:id" element={<ShopCartSingle />} />
      </Route>
      <Route path="users">
        <Route path="signup" element={<div>sign up</div>} />
        <Route path="login" element={<div>login</div>} />
        <Route path="logout" element={<Logout />} />
        <Route path="list" element={<UserList />} />
        <Route path=":id" element={<UserSingle />} />
      </Route>
      <Route path="img" element={<ImageUpload />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
