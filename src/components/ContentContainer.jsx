import "../../src/App.css";
import CategoryBar from "../../src/components/CategoryBar";

export default function ContentContainer() {
  return (
    <div className="container">
      <div className="category_bar">
        <CategoryBar />
      </div>
      <div className="programming_container"></div>
    </div>
  );
}
