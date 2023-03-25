import Image from "next/image";
import album from "../public/album.png";
import Controls from "./Controls";
import ListMusic from "./ListMusic";

export default function Preview() {
  return (
    <div className="relative z-0 flex flex-col items-center justify-center min-h-screen py-10 bg-all min-w-screen">
      <div className="absolute w-full h-full bg-blur -z-10"></div>

      <div className=" p-[50px] w-[700px] bg-primary/90 shadow-box rounded-t-[8px]">
        <div className="flex space-x-6 ">
          <div className="relative flex-shrink-0">
            <Image src={album} alt="" />
          </div>
          <div className="w-full">
            <p className="text-base opacity-40">
              {`Mesin Tempur`} &sdot; {`Hip Hop Sux! (2021)`}
            </p>
            <h3 className="text-[32px] mb-6">Supir Angkot Goblok</h3>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="428"
                height="18"
                fill="none"
                viewBox="0 0 428 18"
              >
                <path
                  fill="#71C6FF"
                  d="M0 9a2 2 0 012-2h242v4H2a2 2 0 01-2-2z"
                ></path>
                <path fill="#424242" d="M244 7h182a2 2 0 110 4H244V7z"></path>
                <circle cx="244" cy="9" r="9" fill="#fff"></circle>
              </svg>
              <div className="flex justify-between mb-6">
                <p className="text-sm opacity-40">0:18</p>
                <p className="text-sm opacity-40">0:29</p>
              </div>
              <Controls />
            </div>
          </div>
        </div>
      </div>
      <div className="p-[50px] w-[700px] bg-primary/90 shadow-box rounded-b-[8px]">
        <p className="text-base font-semibold uppercase opacity-40 mb-[30px] tracking-widest">
          playlist
        </p>
        <ul>
          <ListMusic albumName="Mesin Tempur" first>
            Hip Hop Sux!
          </ListMusic>
          <ListMusic albumName="Mesin Tempur">Mari Membaca</ListMusic>
          <ListMusic albumName="Mesin Tempur" active>
            Supir Angkot Goblok
          </ListMusic>
          <ListMusic albumName="Mesin Tempur" end>
            Aku Death Metal
          </ListMusic>
        </ul>
      </div>
    </div>
  );
}
