import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import First from "./components/First/First";
import Second from "./components/Second/Second";
import Info from "./components/Info/Info";
import FAQ from "./components/FAQs/FAQ";
import Timeline from "./components/Timeline/Timeline";
import Tracks from "./components/Tracks/Tracks";
import Team from "./components/Team/Team";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <First></First>
      <Second></Second>
      <Timeline></Timeline>
      <Tracks></Tracks>
      <Info></Info>
      <FAQ></FAQ>
      <Team></Team>
    </>
  );
}

export default App;
