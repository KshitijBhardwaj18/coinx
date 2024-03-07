import {
    Navigate,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
  import Layout from "../layout";
  
  import ErrorPage from "./404page/Error";
  import CryptocurrencyDetailsPage from "./main/main";
  
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
  