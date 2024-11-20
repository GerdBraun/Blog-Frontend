import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">404 Page not found</h1>
          <p className="py-6">
            The page you requested could not be found.
          </p>
          <Link to="/" className="btn">home</Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
