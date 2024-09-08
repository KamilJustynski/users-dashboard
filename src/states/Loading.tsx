import { ThreeCircles } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="w-screen h-screen pb-44 flex justify-center items-center">
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#3B82F6"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
