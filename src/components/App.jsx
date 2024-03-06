import Layout from "./Layout/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import { lazy,Suspense } from "react";
import * as ROUTES from "../constants/routes.js";



const Home = lazy(() => import("../pages/Home/Home"));
const Catalog = lazy(() => import("../pages/Catalog/Catalog"));
const Favorites = lazy(() => import("../pages/Favorites/Favorites"));



const appRoutes = [
  {
    path: ROUTES.HOME_ROUTES,
    element: <Home/>,
  },
  {
    path: ROUTES.CATALOG_ROUTES,
    element: <Catalog/>,
  },
  {
    path: ROUTES.FAVORITES_ROUTES,
    element: <Favorites/>,
  }
 
];

const App = () => {
  return (
    <Layout>
      <Suspense fallback={"Loading..."}>
        <Routes>
        {appRoutes.map(({path,element})=>(<Route key={path} path={path} element={element} />))}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </Suspense>
      
    
  </Layout>)
}

export default App;