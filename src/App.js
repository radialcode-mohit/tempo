import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Story from "./components/Story";
import About from "./components/About";
import Center from "./components/Center";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <>
      <Story />
      <About />
      <Center />
    </>
  );
}

export default App;
