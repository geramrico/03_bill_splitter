import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


// Pages
import Home from "./pages/Home";
import Bill from "./pages/Bill";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:billId' element={<Bill />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
