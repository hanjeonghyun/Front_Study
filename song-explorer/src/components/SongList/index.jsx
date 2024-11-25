import React from "react";
import Song from "../Song";
import "./index.css";
import { useQuery } from "@tanstack/react-query";
import { useSearchTextStore } from "../../stores/useSearchTextStore";

export default function SongList() {
  const { searchText } = useSearchTextStore();

  const { data, isLoading } = useQuery({
    queryKey: ["getSong", searchText],
    queryFn: () => {
      return fetch(
        searchText
          ? `https://api.manana.kr/karaoke/song/${searchText}.json`
          : "https://api.manana.kr/karaoke.json"
      ).then((res) => {
        return res.json();
      });
    },
  });

  if (isLoading || !data) {
    return "Loading...";
  }

  return (
    <div className='SongList'>
      {data.map((song) => (
        <Song
          key={song.brand + song.no}
          {...song}
        />
      ))}
    </div>
  );
}
