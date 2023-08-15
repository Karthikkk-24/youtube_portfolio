import "../../src/App.css";
import Card from "../../src/components/Card";
export default function MainSection() {
  return (
    <div className="container">
      <Card
        image="../src/assets/programming_language/js.png"
        title="JavaScript"
      />
      <Card
        image="../src/assets/programming_language/react.png"
        title="React"
      />
      <Card image="../src/assets/programming_language/html.png" title="HTML" />
      <Card image="../src/assets/programming_language/css.png" title="CSS" />
      <Card image="../src/assets/programming_language/php.png" title="PHP" />
      <Card image="../src/assets/programming_language/node.png" title="Node" />
      <Card
        image="../src/assets/programming_language/express.png"
        title="Express"
      />
      <Card
        image="../src/assets/programming_language/mysql.png"
        title="MySQL"
      />
      <Card
        image="../src/assets/programming_language/python.png"
        title="Python"
      />
      <Card image="../src/assets/programming_language/java.png" title="Java" />
      <Card image="../src/assets/programming_language/bash.png" title="Bash" />
      <Card
        image="../src/assets/programming_language/github.png"
        title="GitHub"
      />
    </div>
  );
}
