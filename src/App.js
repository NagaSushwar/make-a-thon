import './App.css';
import Navbar from './components/Navbar/Navbar';
import First from './components/First/First';
import Second from './components/Second/Second';
import Info from './components/Info/Info';
import FAQ from './components/FAQs/FAQ';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <First></First>
      <Second></Second>
      <Info></Info>
      <FAQ></FAQ>
    </>
  );
}

export default App;
