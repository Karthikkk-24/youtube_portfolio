import "../../src/App.css";

export default function Card(props) {
  return (
    <div className="card_div">
      <div className="card_img">
        <img src={props.image} alt="Card" />
      </div>
      <div className="card_title">
        <img src="../src/assets/profile.jpg" alt="" />
        <p>{props.title}</p>
      </div>
      <div className="card_desc">
        Read More ... <span>&#187;</span>
      </div>
    </div>
  );
}
