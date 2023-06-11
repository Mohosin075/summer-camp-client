import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
  const handleGoBack = () => {
    navigate('/')
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="px-4 lg:py-12">
        <div className="lg:gap-4 lg:flex items-center justify-center">
          <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
            <h1 className="font-bold text-red-600 text-9xl">404</h1>
            <p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-red-500">Oops!</span> Page not found
            </p>
            <p className="mb-8 text-center text-gray-500 md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>
            <button
              onClick={handleGoBack}
              className="btn btn-warning btn-outline btn-xs sm:btn-sm md:btn-md"
            >
              home
            </button>
          </div>
          <div className="mt-4 flex justify-center">
            <img
              src="https://makeyouknow.com/assets/images/icon/error.gif"
              alt="img"
              className="object-cover w-48 h-48"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
