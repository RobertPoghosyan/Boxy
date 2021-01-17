import React from "react";

import Layout from "./components/Layout/Layout";
import Homepage from "./containers/Homepage/Homepage";
import Products from "./containers/Products/Products";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Homepage />
        <Products />
      </Layout>
    </div>
  );
}

export default App;
