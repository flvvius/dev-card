import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillList from "./SkillList";
import "./styles.css";

function App() {

  const skills = [
    {
      name: "React.js",
      color: "yellow",
      emoji: "😊"
    },
    {
      name: "Next.js",
      color: "green",
      emoji: "😃"
    },
    {
      name: "Node.js",
      color: "lightblue",
      emoji: "😃"
    },
    {
      name: "Express.js",
      color: "cyan",
      emoji: "😃"
    },
    {
      name: "JavaScript",
      color: "red",
      emoji: "😃"
    },
    {
      name: "SQL",
      color: "pink",
      emoji: "😃"
    },
  ]
  
  

  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        
        <SkillList skills={skills} />
      </div>
    </div>
  );
}

export default App;