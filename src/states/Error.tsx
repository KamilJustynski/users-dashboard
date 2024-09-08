import { ErrorSvg } from "../svg/Error";

export const Error = () => {
  return (
    <div className="flex flex-col gap-10 w-screen h-screen pb-44 justify-center items-center">
      <ErrorSvg />
      <h1 className="text-3xl font-bold">Ooops! Something went wrong...</h1>
      <p className="text-xl">
        Please check your network connection and try again
      </p>
    </div>
  );
};
