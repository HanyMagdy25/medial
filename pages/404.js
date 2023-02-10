import NextLink from "next/link";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <div className="container">
        <div className="text-center pt-5">
          <h2>404</h2>
          <h3>Page not found</h3>
          <p>
            Oops! The page you are looking for does not exist. It might have
            been moved or deleted.
          </p>

          <NextLink href="/">
            <button>Back To home</button>
          </NextLink>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
