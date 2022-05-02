import React from "react";

import './App.css'
import { Content } from "./components/Content/content.component";
import { Footer } from "./components/main-footer/footer.component";
import { MainHeader } from "./components/Main-header/Main-header.component";


function App() {
  return (
    <div className="App">
        <header>
          <MainHeader/>
        </header>
        <Content/>
        <footer>
          <Footer/>
        </footer>
    </div>
  );
}

export default App;
