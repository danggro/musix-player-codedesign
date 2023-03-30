import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import mockTracklist from "@/utils/trackList.json";
import Progress from "./data/Progress";
import Bookmark from "./icon/Bookmark";
import Pause from "./data/Pause";
import Play from "./data/Play";
import Previous from "./data/Previous";
import Next from "./data/Next";
import Shuffle from "./data/Shuffle";
import LoopCurrent from "./data/LoopCurrent";
import Speaker from "./icon/Speaker";
import Volume from "./data/Volume";
import PlayingSong from "./icon/PlayingSong";

export default function Preview() {
  const [trackList, setTrackList] = useState(mockTracklist);
  let [curTrack, setCurTrack] = useState(0);
  let playlist = [];
  const [albumimage, setAlbumimage] = useState("");
  const [albumname, setAlbumname] = useState("");
  const [artist, setArtist] = useState("");
  const [year, setYear] = useState("");
  const [bookmark, setBookmark] = useState(false);
  const [audio, setAudio] = useState(null);
  const [active, setActive] = useState(false);
  const [title, setTitle] = useState("");
  const [length, setLength] = useState(0);
  const [time, setTime] = useState(0);
  const [slider, setSlider] = useState(1);
  const [drag, setDrag] = useState(0);
  const [volume, setVolume] = useState(0.8);
  let [end, setEnd] = useState(0);
  const [shuffled, setShuffled] = useState(false);
  const [looped, setLooped] = useState(false);
  const [setHidvol, setSetHidvol] = useState(false);
  const [setHidvolBot, setSetHidvolBot] = useState(false);
  const [botSpeak, setBotSpeak] = useState(false);

  const fmtMSS = (s) => new Date(1000 * s).toISOString().substr(15, 4);

  useEffect(() => {
    const audio = new Audio(trackList[curTrack].src);

    const setAudioData = () => {
      setLength(audio.duration);
      setTime(audio.currentTime);
    };

    const setAudioTime = () => {
      const curTime = audio.currentTime;
      setTime(curTime);
      setSlider(curTime ? ((curTime * 100) / audio.duration).toFixed(1) : 0);
    };

    const setAudioVolume = () => setVolume(audio.volume);

    const setAudioEnd = () => setEnd((end += 1));

    // events on audio object
    audio.addEventListener("loadeddata", setAudioData);
    audio.addEventListener("timeupdate", setAudioTime);
    audio.addEventListener("volumechange", setAudioVolume);
    audio.addEventListener("ended", setAudioEnd);

    setAudio(audio);
    setTitle(trackList[curTrack].title);
    setAlbumimage(trackList[curTrack].albumImg);
    setAlbumname(trackList[curTrack].albumName);
    setArtist(trackList[curTrack].artist);
    setYear(trackList[curTrack].year);

    return () => {
      audio.pause();
    };
  }, []);

  const shufflePlaylist = (arr) => {
    if (arr.length === 1) return arr;
    const rand = Math.floor(Math.random() * arr.length);
    return [arr[rand], ...shufflePlaylist(arr.filter((_, i) => i != rand))];
  };

  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else if (end) {
      if (shuffled) {
        playlist = shufflePlaylist(playlist);
      }
      !looped ? next() : play();
    }
  }, [end]);

  useEffect(() => {
    if (audio != null) {
      audio.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audio != null) {
      pause();
      const val = Math.round((drag * audio.duration) / 100);
      audio.currentTime = val;
    }
  }, [drag]);

  const play = () => {
    setActive(true);
    audio.play();
  };

  const pause = () => {
    setActive(false);
    audio.pause();
  };

  const loop = () => {
    setLooped(!looped);
  };

  useEffect(() => {
    if (audio != null) {
      audio.src = trackList[curTrack].src;
      setTitle(trackList[curTrack].title);
      setAlbumimage(trackList[curTrack].albumImg);
      setAlbumname(trackList[curTrack].albumName);
      setArtist(trackList[curTrack].artist);
      setYear(trackList[curTrack].year);
      play();
    }
  }, [curTrack]);

  const previous = () => {
    const index = playlist.indexOf(curTrack);
    index !== 0
      ? setCurTrack((curTrack = playlist[index - 1]))
      : setCurTrack((curTrack = playlist[playlist.length - 1]));
  };

  const next = () => {
    const index = playlist.indexOf(curTrack);
    index !== playlist.length - 1
      ? setCurTrack((curTrack = playlist[index + 1]))
      : setCurTrack((curTrack = playlist[0]));
  };

  const shuffle = () => {
    setShuffled(!shuffled);
  };

  const playlistItemClickHandler = (e) => {
    const num = Number(e.currentTarget.getAttribute("data_key"));
    const index = playlist.indexOf(num);
    setCurTrack((curTrack = playlist[index]));
    play();
  };

  useEffect(() => {
    const speaker1 = document.getElementById("speaker2");
    const speaker2 = document.getElementById("speaker2").children[0];
    const speaker3 =
      document.getElementById("speaker2").children[0].children[0];

    window.addEventListener("click", function (e) {
      if (
        e.target != speaker1 &&
        e.target != speaker2 &&
        e.target != speaker3
      ) {
        setSetHidvolBot(false);
      }
    });
    console.log(speaker1);
  }, []);

  useEffect(() => {
    const speaker1 = document.getElementById("speaker");
    const speaker2 = document.getElementById("speaker").children[0];
    const speaker3 = document.getElementById("speaker").children[0].children[0];

    window.addEventListener("click", function (e) {
      if (
        e.target != speaker1 &&
        e.target != speaker2 &&
        e.target != speaker3
      ) {
        setSetHidvol(false);
      }
    });
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-full py-5 sm:py-10 bg-all min-w-screen">
      <div className="absolute w-full h-full bg-blur"></div>
      <div className=" sm:p-[50px] sm:w-[700px] p-8 w-[350px] bg-primary/90 shadow-box rounded-t-[8px]">
        <div className="flex space-x-3 sm:space-x-6 ">
          <div className="flex-shrink-0 w-[80px] sm:w-[150px]">
            <Image
              width="150"
              height="150"
              src={albumimage}
              alt=""
              className="rounded-lg"
            />
          </div>
          <div className="w-full">
            <p className="text-[10px] sm:text-base opacity-40">
              {artist} &sdot; {albumname}
              {` (`}
              {year}
              {`)`}
            </p>
            <h3 className="sm:text-[32px] text-xl sm:mb-6 sm:mt-2">{title}</h3>
            <div className="hidden sm:block">
              <Progress
                value={slider}
                onChange={(e) => {
                  setSlider(e.target.value);
                  setDrag(e.target.value);
                }}
                onMouseUp={play}
                onTouchEnd={play}
              />
              <div className="flex justify-between mb-4">
                <p className="text-sm opacity-40">{`${
                  !time ? "0:00" : fmtMSS(time)
                }`}</p>
                <p className="text-sm opacity-40">{`${
                  !length ? "0:00" : fmtMSS(length - time)
                }`}</p>
              </div>
              <div className="flex items-center justify-between mt-2 sm:mt-0">
                <Bookmark
                  active={bookmark ? "currentColor" : "none"}
                  color={bookmark ? "text-blue" : ""}
                  onClick={() => {
                    setBookmark(!bookmark);
                  }}
                />
                <div className="flex items-center space-x-3 sm:space-x-6">
                  <Shuffle
                    style={shuffled ? "text-blue " : "hover:text-blue"}
                    onClick={shuffle}
                  />
                  <Previous onClick={previous} />
                  {active ? <Pause onClick={pause} /> : <Play onClick={play} />}
                  <Next onClick={next} />
                  <LoopCurrent
                    style={looped ? "text-blue " : "hover:text-blue"}
                    onClick={loop}
                  />
                </div>
                <div
                  id="speaker"
                  className={`relative cursor-pointer hover:text-blue ${
                    setHidvol ? "text-blue" : ""
                  }`}
                  onClick={() => {
                    setSetHidvol(!setHidvol);
                  }}
                >
                  <Speaker />
                </div>
                <div
                  className={`absolute transition-all bottom-3  -right-0 ${
                    setHidvol ? "opacity-100 scale-100" : "opacity-0 scale-0 "
                  }`}
                >
                  <Volume
                    value={volume}
                    onChange={(e) => {
                      setVolume(e.target.value / 100);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block mt-5 sm:hidden">
          <Progress
            value={slider}
            onChange={(e) => {
              setSlider(e.target.value);
              setDrag(e.target.value);
            }}
            onMouseUp={play}
            onTouchEnd={play}
          />
          <div className="flex justify-between -mt-2 sm:mt-0 sm:mb-4">
            <p className="text-xs sm:text-sm opacity-40">{`${
              !time ? "0:00" : fmtMSS(time)
            }`}</p>
            <p className="text-xs sm:text-sm opacity-40">{`${
              !length ? "0:00" : fmtMSS(length - time)
            }`}</p>
          </div>
          <div className="flex items-center justify-between mt-2 sm:mt-0">
            <Bookmark
              active={bookmark ? "currentColor" : "none"}
              color={bookmark ? "text-blue" : ""}
              onClick={() => {
                setBookmark(!bookmark);
              }}
            />
            <div className="flex items-center space-x-3 sm:space-x-6">
              <Shuffle
                style={shuffled ? "text-blue " : "hover:text-blue"}
                onClick={shuffle}
              />
              <Previous onClick={previous} />
              {active ? <Pause onClick={pause} /> : <Play onClick={play} />}
              <Next onClick={next} />
              <LoopCurrent
                style={looped ? "text-blue " : "hover:text-blue"}
                onClick={loop}
              />
            </div>
            <div
              id="speaker2"
              className={`relative cursor-pointer hover:text-blue ${
                setHidvolBot ? "text-blue" : ""
              }`}
              onClick={() => {
                setSetHidvolBot(!setHidvolBot);
              }}
            >
              <Speaker />
            </div>
            <div
              className={`absolute transition-all -bottom-1  right-0 ${
                setHidvolBot ? "opacity-100 scale-100" : "opacity-0 scale-0 "
              }`}
            >
              <Volume
                value={volume}
                onChange={(e) => {
                  setVolume(e.target.value / 100);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:p-[50px] sm:w-[700px] p-8 w-[350px] bg-primary/90 shadow-box rounded-b-[8px]">
        <p className="text-base font-semibold uppercase opacity-40 mb-[30px] tracking-widest">
          playlist
        </p>
        <ul>
          {trackList.map((t, index) => {
            playlist.push(index);

            return (
              <li
                key={index}
                data_key={index}
                className={`flex sm:space-x-[20px] space-x-3 hover:text-blue cursor-pointer ${
                  index === trackList.length - 1
                    ? ""
                    : "border-b border-b-secondary/70 pb-[20px]"
                } ${index === 0 ? "" : "pt-[20px]"}`}
                onClick={playlistItemClickHandler}
              >
                <Image
                  width="50"
                  height="50"
                  src={t.albumImg}
                  alt=""
                  className="w-[50px]  rounded-lg"
                />
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <h4
                      className={`mb-1 sm:text-base text-sm  font-semibold ${
                        curTrack === index ? "text-blue" : ""
                      }`}
                    >
                      <div className="flex flex-wrap items-center space-x-1">
                        <span>{t.title}</span>
                        {curTrack === index && <PlayingSong />}
                      </div>
                    </h4>
                    <div className="text-xs sm:text-sm text-white/40">
                      {t.dur}
                    </div>
                  </div>
                  <p className="text-xs font-semibold sm:text-sm text-white/40">
                    {t.albumName}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
