import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import AddProduct from "./pages/AddProduct"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/add_product" element={<AddProduct/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
