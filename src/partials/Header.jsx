import { Link, NavLink } from "react-router-dom";
import { useApp } from "../context/AppContext";
import CartIcon from "./CartIcon";

const Header = () => {
  const { appUser } = useApp();
  return (
    <header className="z-10">
      <nav className="navbar bg-base-100 shadow-xl">
        <div className="flex-1">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Blog</a>
                <ul className="p-2">
                  <li>
                    <NavLink to="/" className="text-nowrap">
                      post list
                    </NavLink>
                  </li>
                  {appUser && (
                    <li>
                      <NavLink to="/posts/add" className="text-nowrap">
                        post add
                      </NavLink>
                    </li>
                  )}
                  <li>
                    <NavLink to="/categories/list" className="text-nowrap">
                      category list
                    </NavLink>
                  </li>
                  {appUser && (
                    <li>
                      <NavLink to="/categories/add" className="text-nowrap">
                        category add
                      </NavLink>
                    </li>
                  )}
                  {/* <li>
                    <NavLink to="/img" className="text-nowrap">
                      img add *
                    </NavLink>
                  </li> */}
                </ul>
              </li>
              <li>
                <a>Shop</a>
                <ul className="p-2">
                  <li>
                    <NavLink to="/shop/products" className="text-nowrap">
                      product list
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/shop/categories" className="text-nowrap">
                      category list
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/shop/carts" className="text-nowrap">
                      cart list
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <a>User</a>
                <ul className="p-2">
                  <li>
                    <NavLink to="/users/signup" className="text-nowrap">
                      sign up
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/users/list" className="text-nowrap">
                      login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/users/logout" className="text-nowrap">
                      logout
                    </NavLink>
                  </li>
                  {/* <li>
                    <NavLink to="/users/list" className="text-nowrap">
                      list
                    </NavLink>
                  </li> */}
                </ul>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-xl">
            MyFrontend
          </NavLink>
        </div>

        <div className="flex-none hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details className="z-10">
                <summary>Blog</summary>
                <ul className="p-2">
                  <li>
                    <NavLink to="/" className="text-nowrap">
                      post list
                    </NavLink>
                  </li>
                  {appUser && (
                    <li>
                      <NavLink to="/posts/add" className="text-nowrap">
                        post add
                      </NavLink>
                    </li>
                  )}
                  <li>
                    <NavLink to="/categories/list" className="text-nowrap">
                      category list
                    </NavLink>
                  </li>
                  {appUser && (
                    <li>
                      <NavLink to="/categories/add" className="text-nowrap">
                        category add
                      </NavLink>
                    </li>
                  )}
                  {/* <li>
                    <NavLink to="/img" className="text-nowrap">
                      img add *
                    </NavLink>
                  </li> */}
                </ul>
              </details>
            </li>
            <li>
              <details className="z-10">
                <summary>Shop</summary>
                <ul className="p-2">
                  <li>
                    <NavLink to="/shop/products" className="text-nowrap">
                      product list
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/shop/categories" className="text-nowrap">
                      category list
                    </NavLink>
                  </li>
                  {appUser && appUser.isAdmin && (
                    <li>
                      <NavLink to="/shop/carts" className="text-nowrap">
                        cart list
                      </NavLink>
                    </li>
                  )}
                </ul>
              </details>
            </li>
            <li>
              <details className="z-10">
                <summary>User</summary>
                <ul className="p-2">
                  <li>
                    <NavLink to="/users/signup" className="text-nowrap">
                      sign up
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/users/list" className="text-nowrap">
                      login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/users/logout" className="text-nowrap">
                      logout
                    </NavLink>
                  </li>
                  {/* <li>
                    <NavLink to="/users/list" className="text-nowrap">
                      list
                    </NavLink>
                  </li> */}
                </ul>
              </details>
            </li>
          </ul>
          {appUser && (
            <>
              {appUser.ShopCart && <CartIcon cart={appUser.ShopCart} />}
              <div role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <Link to={`/users/${appUser.id}`}>
                    <img
                      alt={`${appUser.firstName} ${appUser.lastName}`}
                      src={appUser.avatar}
                    />
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
