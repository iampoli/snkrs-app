import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import Feed from "./pages/Feed";
import InStock from "./pages/InStock";
import UpComing from "./pages/UpComing";
import OverView from "./components/OverView";


function App() {
  const [data,setData] = useState([]);
  const [snkr,setSnkr] = useState({});
  const [cart,setCart] = useState([]);
  console.log(cart)
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
      <Nav cart={cart}/>
      <Routes>
        <Route path="/" element={<InStock data={data} setSnkr={setSnkr}/>}/>
        <Route path="/feed" element={<Feed/>}/>
        <Route path="/up-coming" element={<UpComing/>}/>
        <Route path="/overview" element={<OverView snkr={snkr} setCart={setCart}/>}/>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
