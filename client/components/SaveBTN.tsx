import { CiShare2 } from "react-icons/ci";

export default function SaveBTN() {
  return (
    <button className="bg-[#4069FF] text-white px-6 py-1 rounded-2xl cursor-pointer">
      <div className="flex items-center gap-2">
        <CiShare2 />
        <p>Share</p>
      </div>
    </button>
  );
}
