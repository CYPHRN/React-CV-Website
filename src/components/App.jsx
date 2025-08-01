import "./App.css";
import FeaturedProject from "./FeaturedProject";
import Heading from "./Heading";
import SmallProjects from "./SmallProjects";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Heading />
      <FeaturedProject />
      <SmallProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
