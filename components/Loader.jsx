import { AiOutlineLoading } from "react-icons/ai";

const Loader = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-8 gap-2">
      <AiOutlineLoading className="loading-icon" />
      <span className="text-lg font-semibold">Loading...</span>
    </div>
  );
};
export default Loader;
