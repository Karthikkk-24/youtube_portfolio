import "../../src/App.css";
import Sidebar from "../../src/components/Sidebar";

export default function App() {
  return (
    <div className="content_div">
      <div className="sidebar_container">
        <Sidebar />
      </div>
      <div className="content">
        <div className="category_bar"></div>
        <div className="programming_container"></div>
      </div>
    </div>
  );
}
