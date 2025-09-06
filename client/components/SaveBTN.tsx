import { CiShare2 } from "react-icons/ci";
import { baseUrl } from "../utils/BaseUrl";
export default function SaveBTN({
  editorOptions,
}: {
  editorOptions: { code: string | undefined; lang: string | undefined };
}) {
  const saveBtnhandler = async () => {
    const sendUrl = await fetch(`${baseUrl}api/saveCode`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editorOptions),
    });
    const data: { msg: string; id: string } = await sendUrl.json();
    if (data.msg === "ok") {
      window.location.assign(data.id);
    } else {
      alert("error try again later");
    }
  };
  return (
    <button
      disabled={window.location.pathname.length > 1}
      onClick={saveBtnhandler}
      className={` text-white px-6 py-1 rounded-2xl cursor-pointer ${
        window.location.pathname.length > 1 ? "bg-[gray]" : "bg-[#4069FF]"
      }`}
    >
      <div className="flex items-center gap-2">
        <CiShare2 />
        <p>Share</p>
      </div>
    </button>
  );
}
