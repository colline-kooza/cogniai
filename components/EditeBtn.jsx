import Link from "next/link";
import { FiEdit2 } from "react-icons/fi";

export default function EditeBtn() {
  return (
    <div>
      <Link
        className="text-[#bbbbbb] flex gap-3 items-center tracking-[1px] text-[15px] hover:animate-bounce hover:text-blue-500"
        href=""
      >
        <FiEdit2 /> Edit
      </Link>
    </div>
  );
}
