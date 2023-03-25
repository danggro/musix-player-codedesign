import Image from "next/image";
import album from "../public/album.png";
import PlayingSong from "./icon/PlayingSong";

export default function ListMusic({ children, albumName, end, first, active }) {
  return (
    <li
      className={`flex space-x-[20px]   ${
        end ? "" : "border-b border-b-secondary/70 pb-[20px]"
      } ${first ? "" : "pt-[20px]"}`}
    >
      <Image src={album} alt="" className="w-[50px] object-fit" />
      <div>
        <h4
          className={`mb-1 text-base font-semibold ${
            active ? "text-blue" : ""
          }`}
        >
          <div className="flex items-center space-x-1">
            <span>{children}</span>

            {active && <PlayingSong />}
          </div>
        </h4>
        <p className="text-sm font-semibold opacity-40">{albumName}</p>
      </div>
    </li>
  );
}
