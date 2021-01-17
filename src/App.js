import React from "react";

import Layout from "./components/Layout/Layout";
import Homepage from "./containers/Homepage/Homepage";
import Products from "./containers/Products/Products";
import Header from "./containers/Header/Header";

import "./App.css";


function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <Homepage />
        <Products />
      </Layout>
    </div>
  );
}

export default App;
