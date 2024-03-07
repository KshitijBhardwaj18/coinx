import {
    Navigate,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
  import Layout from "../layout";
  
  import ErrorPage from "./ErrorPage/ErrorPage";
  import CryptocurrencyDetailsPage from "./CryptocurrencyDetailsPage/CryptocurrencyDetailsPage";
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Layout.Default />}>
          <Route index element={<Navigate to="/cryptocurrencies/bitcoin" />} />
          <Route
            path="/cryptocurrencies/:id"
            element={<CryptocurrencyDetailsPage />}
          />
        </Route>
  
        <Route path="*" element={<ErrorPage />} />
      </>
    )
  );
  
  export default router;
  