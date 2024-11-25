import React, { useState } from "react";
import SearchBar from "../../components/SearchBar";
import SongList from "../../components/SongList";

export default function SearchPage() {
  return (
    <div>
      <SearchBar />
      <SongList />
    </div>
  );
}
