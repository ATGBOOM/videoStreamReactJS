import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VideoCard from "./video_card";
import videos from "../assets/videos.tsx";
import SearchBar from "./search_bar.tsx";


function HomePage() {
  let navigate = useNavigate();

  let [filter, setFilter] = useState("");

  const handleSearch = (searchTerm: string) => {
    setFilter(searchTerm);
  };

  const WatchBtn = (item: [string, string]) => {
  
    navigate("/watch", { state: { url: item[0] ,title:  item[1] } });
  };
  return (
    <>
      <div className="back">
        <SearchBar onSearch={handleSearch} />

        {videos
          .filter((val) => {
            if (filter == "") {
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
    </>
  );
}

export default HomePage;
