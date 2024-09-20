import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from '../src/pages/Homepage/Homepage'
import Product from '../src/pages/Product/Product'
import Pricing from '../src/pages/Pricing/Pricing'
import Login from '../src/pages/Login/Login'
import PageNotFound from '../src/pages/PageNotFound/PageNotFound'
import AppLayout from "../src/pages/AppLayout/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<p>Cities</p>} />
          <Route path="cities" element={<p>Cities</p>} />
          <Route path="countries" element={<p>Countries</p>} />
        </Route> 
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;