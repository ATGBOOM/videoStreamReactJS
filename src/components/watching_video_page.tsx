import VideoCard from "./video_card";
import {videos} from "../assets/videos";
import { useLocation, useNavigate } from "react-router-dom";

function WatchingVideoPage() {
  let navigate = useNavigate();
  let location = useLocation();

  const watchBtn = (item: [string, string]) => {
    navigate("/watch", { state: { url: item[0], title: item[1] } });
  };

  return (
    <>
      <div className="watch">
        <div className="watchLeft">
          <iframe
            className="video"
            width="1100"
            height="500"
            src={location.state.url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen

          />
          <p> {location.state.title} </p>
        </div>
        <div className="watchRight ">
          {videos.map((items) => (
            <>
              <VideoCard
                title={items.title}
                url={items.video}
                className="background1"
                watch={watchBtn}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default WatchingVideoPage;
