import About from "./About";
import Ask from "./Ask";
import Devices from "./Devices";
import Footer from "./Footer";
import Header from "./Header";
import Watch from "./Watch";
import "./home.css";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Watch />
      <Ask />
      <Devices />
      <Footer />
    </>
  );
};

export default Home;
