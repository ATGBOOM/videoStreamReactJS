import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VideoCard from "./video_card";
import { videos, genres } from "../assets/videos.tsx";
import SearchBar from "./search_bar.tsx";

function HomePage() {
  let navigate = useNavigate();

  let [genre, setGenre] = useState("");

  let [filter, setFilter] = useState("");

  const handleSearch = (searchTerm: string) => {
    setFilter(searchTerm);
  };

  const WatchBtn = (item: [string, string]) => {
    navigate("/watch", { state: { url: item[0], title: item[1] } });
  };
  return (
    <>
      <div className="back">
        <SearchBar onSearch={handleSearch} />

        <div className="row">
          <div className="column left">
            {genres.map((items) => (
              <ul>
                <li
                  className="genresText"
                  onClick={() => {
                    setGenre(items);
                  }}
                  key={items}
                >
                  {" "}
                  {items} <br />
                  <br />
                </li>
              </ul>
            ))}
          </div>
          <div className="column right">
            {videos
              .filter((val) => {
                if (genre === "" || genre == "All") {
                  return val;
                } else if (val.genre.includes(genre)) {
                  return val;
                }
              })
              .filter((val) => {
                if (filter === "") {
                  return val;
                } else if (val.title.includes(filter)) {
                  return val;
                }
              })
              .map((items) => (
                <>
                  <div>
                    <VideoCard
                      title={items.title}
                      url={items.video}
                      className="background"
                      watch={WatchBtn}
                    />
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
