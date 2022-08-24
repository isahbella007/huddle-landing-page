
import './App.css';
import Benefit from './component/Benefits/Benefit';
import Build from './component/Build/Build';
import Footer from './component/Footer/Footer';
import SectionOne from './component/SectionOne/SectionOne';

function App() {
  return (
    <>
      <div>
        <SectionOne/>
      </div>

      <div>
        <Benefit/>
      </div>

      <div>
        <Build/>
      </div>

      <div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
