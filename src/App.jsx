import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import Feed from "./pages/Feed";
import InStock from "./pages/InStock";
import UpComing from "./pages/UpComing";


function App() {
  const [data,setData] = useState([]);

  useEffect(()=>{
    callData();
  },[])

  const callData = ()=>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'v1-sneakers.p.rapidapi.com',
        'X-RapidAPI-Key': '24b5cc60c7msh2e411944afab52ap1e1eb6jsn86036d336163'
      }
    };

    fetch('https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=51&gender=men&brand=jordan&releaseYear=2022&name=jordan%201', options)
	.then(response => response.json())
	.then(data => setData(data.results))
	.catch(err => console.log(err));
  }


  return (
    <Router>
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Feed/>}/>
        <Route path="/in-stock" element={<InStock data={data}/>}/>
        <Route path="/up-coming" element={<UpComing/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
