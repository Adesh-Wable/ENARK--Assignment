import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import SecondComp from "./Component/Second Component/SecondComp";
import FirstComp from "./Component/First Component/FirstComp";
import ThirdComp from "./Component/Third Component/ThirdComp";
import FetchData from "./Component/Fetch Data/FetchData";




function App() {
  return (
    <div >
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/firstComp" element={<FirstComp/>}/>
      <Route path="/secondComp" element={<SecondComp/>}/>
      <Route path="/thirdComp" element={<ThirdComp/>}/>
      <Route path="/fetchdata" element={<FetchData/>}/>
    </Routes>
    </Router>
   
    </div>
  );
}

export default App;
