import { NavLink } from "react-router-dom";

const Header = () => {
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
                <NavLink to="/">home</NavLink>
              </li>
              <li>
                <a>post-stuff</a>
                <ul className="p-2">
                  <li>
                    <NavLink to="/posts/add">add post</NavLink>
                  </li>
                  <li>
                    <NavLink to="/img">add img</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <a>shop-stuff</a>
                <ul className="p-2">
                <li>
                    <NavLink to="/shop/products">shop</NavLink>
                  </li>
                  <li>
                    <NavLink to="/shop/categories">categories</NavLink>
                  </li>
                  <li>
                    <NavLink to="/shop/carts">carts</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <a>user-stuff</a>
                <ul className="p-2">
                  <li>
                    <NavLink to="/users/signup">sign up</NavLink>
                  </li>
                  <li>
                    <NavLink to="/users/login">login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/users/logout">logout</NavLink>
                  </li>
                  <li>
                    <NavLink to="/users/list">list</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <a>category-stuff</a>
                <ul className="p-2">
                  <li>
                    <NavLink to="/categories/list">list</NavLink>
                  </li>
                  <li>
                    <NavLink to="/categories/add">add</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-xl">
            MyBlog
          </NavLink>
        </div>

        <div className="flex-none hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <details className="z-10">
                <summary>post-stuff</summary>
                <ul className="p-2">
                  <li>
                    <NavLink to="/posts/add">add post</NavLink>
                  </li>
                  <li>
                    <NavLink to="/img">add img</NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details className="z-10">
                <summary>shop-stuff</summary>
                <ul className="p-2">
                  <li>
                    <NavLink to="/shop/products">shop</NavLink>
                  </li>
                  <li>
                    <NavLink to="/shop/categories">categories</NavLink>
                  </li>
                  <li>
                    <NavLink to="/shop/carts">carts</NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details className="z-10">
                <summary>user-stuff</summary>
                <ul className="p-2">
                  <li>
                    <NavLink to="/users/signup">sign up</NavLink>
                  </li>
                  <li>
                    <NavLink to="/users/login">login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/users/logout">logout</NavLink>
                  </li>
                  <li>
                    <NavLink to="/users/list">list</NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details className="z-10">
                <summary>category-stuff</summary>
                <ul className="p-2">
                  <li>
                    <NavLink to="/categories/list">list</NavLink>
                  </li>
                  <li>
                    <NavLink to="/categories/add">add</NavLink>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
          {/* TODO: change this by user */}
          <div role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
