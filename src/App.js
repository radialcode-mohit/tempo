import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Story from "./components/Story";
import About from "./components/About";
import Center from "./components/Center";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header";
import WatchVideo from "./components/WatchVideo";
import AccordianSec from "./components/AccordianSec";
import Team from "./components/Team";
import Preloader from "./components/Preloader";
import TopToBottom from "./components/BackToTop";
function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Preloader />
        <Header />
        <Story />
        <About />
        <WatchVideo />
        <Center />
        <Team />
        <AccordianSec />
        <TopToBottom />
      </div>
    </>
  );
}

export default App;
