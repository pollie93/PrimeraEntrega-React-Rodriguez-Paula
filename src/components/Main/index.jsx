import "./styles.css";

const Main = ({ greeting }) => {
  return (
    <div className="container-prop">
      <p className="prop animate">{greeting}</p>
      <video className="video-container" autoPlay loop muted>
        <source
          src="../../video/video_leagueoflegends_index.webm"
          type="video/webm"
        />
      </video>
    </div>
  );
};

export default Main;
