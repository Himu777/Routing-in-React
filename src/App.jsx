import { BrowserRouter ,Routes,Route } from "react-router-dom"
import About from "./About";
import Contact from "./Contact";
import './App.css';
import Navbar from "./Navbar";
import Error from "./Error";

function App() {
return (
  <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Navbar />} />
  <Route path="about" element={<About />}  />
  <Route path="contact" element={<Contact/>} />
  <Route path="*" element={<Error/>} />
</Routes>

  </BrowserRouter>
  </>
);
}



export default App;
