import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import SpinnerFullPage from "./components/SpinnerFullPage/SpinnerFullPage";

import CityList from "./components/CityList/CityList";
import CountriesList from "./components/ContryList/CountryList";
import City from "./components/City/City";
import Form from "./components/Form/Form";

const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const Product = lazy(() => import("./pages/Product/Product"));
const Pricing = lazy(() => import("./pages/Pricing/Pricing"));
const Login = lazy(() => import("./pages/Login/Login"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout/AppLayout"));

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountriesList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
