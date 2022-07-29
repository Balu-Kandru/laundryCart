import { BrowserRouter,Routes,Route } from "react-router-dom";
import Createorder from "./components/createorder/createorder";
import Signin from "./components/signin/signin";
import Register from "./components/register/register";
const App = ()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/order" element={<Createorder/>} ></Route>
    </Routes>
    </BrowserRouter>
    )
}
export default App;