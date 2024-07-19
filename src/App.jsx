import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./LandingPage"
import Dashboard from "./Dashboard"

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/landingpage" element={<LandingPage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        {/* <Route path="/secretary" element="" />
        <Route path="/treasurer" element="" />
        <Route path="/violation" element="" />
        <Route path="/cleanliness" element="" />
        <Route path="/schedule" element="" />
        <Route path="/organization" element="" />
        <Route path="/teachers" element="" /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
