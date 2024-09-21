import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Homepage from "../src/pages/Homepage/Homepage";
import Product from "../src/pages/Product/Product";
import Pricing from "../src/pages/Pricing/Pricing";
import Login from "../src/pages/Login/Login";
import PageNotFound from "../src/pages/PageNotFound/PageNotFound";
import AppLayout from "../src/pages/AppLayout/AppLayout";
import CityList from "./components/CityList/CityList";
import CountriesList from "./components/ContryList/CountryList";
import City from "./components/City/City";
import Form from "./components/Form/Form";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:8000/cities");

        const data = await res.json();
        setCities(data);
      } catch (e) {
        console.error("Something went wrong...", e);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="cities" />} />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path="cities/:id" element={<City />} />
          <Route
            path="countries"
            element={<CountriesList cities={cities} isLoading={isLoading} />}
          />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
