import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import errorPage from "../../assets/Error-page.json";
import { Helmet } from "react-helmet-async";
const ErrorPage = () => {
  const { error } = useRouteError();
  return (
    <>
      <Helmet>
        <title>404 Error | Epic Tutors</title>
      </Helmet>
      <section className="flex">
        <div className="container flex flex-col items-center justify-center">
          <div className="relative lg:w-1/2 ">
            <div className=" lg:w-11/12  sm:h-96">
              <Lottie animationData={errorPage} loop={true} />
            </div>
          </div>
          <div className="text-center mt-36 mr-52 md:pl-36">
            <p className="text-2xl font-semibold md:text-3xl mt-5  text-red-600">
              {error?.message}
            </p>
            <Link to="/">
              <button className="btn btn-outline btn-info md:mt-5">
                Back to homepage
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
