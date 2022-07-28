import './App.css';
import Agents from './Component/Agents';
import Faqs from './Component/Faqs';
import Footer from './Component/Footer';
import Index from './Component/Index';
import Mint from './Component/Mint';
import Ourteam from './Component/Ourteam';
import Tokenomics from './Component/Tokenomics';
import Training from './Component/Training';
import Utilities from './Component/Utilities';
import War from './Component/War';
import data from "./Pages/teamdata"


function App() {
  return (
   <>
      <Index/>
      <Agents/>
      <Mint/>
      <Utilities/>
      <Tokenomics/>
      <Faqs/>
      <War/>
      <Training/>
      <Ourteam data={data}/>
      <Footer/>
   </>
  );
}

export default App;
