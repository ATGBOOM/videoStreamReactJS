

interface Props {
  url: string;
  title: string;
  className: string;
  watch: Function;
}

function VideoCard({ url, title, className, watch }: Props) {
  const handleChange = () => {
   
    watch([url, title]);
  };

  return (
    <>
      <div className={className}>
        <iframe
          className="video"
          width="560"
          height="315"
          src={url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <p className="videoTitle">{title}</p>
        <button className="watchButton" onClick={handleChange}>
          WATCH
        </button>
      </div>
    </>
  );
}

export default VideoCard;
