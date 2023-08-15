import "../../src/App.css";

export default function CategoryBar() {
  return (
    <div className="container">
      <span className="tabs active">All</span>
      <span className="tabs">Projects</span>
      <span className="tabs">Blogs</span>
      <span className="tabs">Skills</span>
      <span className="tabs">History</span>
      <span className="tabs">Social</span>
      <span className="tabs">LinkedIn</span>
      <span className="tabs">About</span>
      <span className="tabs">Contact</span>
    </div>
  );
}
