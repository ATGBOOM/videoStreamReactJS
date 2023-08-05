

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
          onClick={handleChange}
          className="video"
          width="560"
          height="315"
          src={url}
          title="YouTube video player"
          
        ></iframe>
        <p onClick={handleChange} className="videoTitle">{title}</p>
   
      </div>
    </>
  );
}

export default VideoCard;
