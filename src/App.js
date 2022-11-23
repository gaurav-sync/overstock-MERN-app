import "./App.css";

import { Navbar } from "./Components/Navbar/Navbar";
import { Homepage } from "./Pages/Body/Homepage";
import LeftBars from "./Pages/Product_page/leftSidebar";
import Product_page_new from "./Pages/Product_page/product_index";
import { Products } from "./Pages/Product_page/product_page1";
import SortDropdown from "./Pages/Product_page/sortDropdown";
import { AllRoutes } from "./Routes/AllRoutes";


function App() {
  return (
    <div className="App">
      <Navbar /> 
      <AllRoutes />

    </div>
  )
}

export default App;
