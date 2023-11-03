import { RiDeleteBin6Line } from "react-icons/ri";

export default function DeleteBtn() {
  return (
    <Link
      className="text-[#bbbbbb] flex gap-3 items-center tracking-[1px] text-[15px] hover:animate-bounce hover:text-blue-500"
      href=""
    >
      <RiDeleteBin6Line /> Delete
    </Link>
  );
}
