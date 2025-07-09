import React from "react";
import "./App.css";
import Club from "./components/Club";
import Notice from "./components/Notice";
import Home from "./components/Home";

function App() {
  return (
    <div className="app">

      <header>
        <h1>🏫 우리 학교 홈페이지에 오신 것을 환영합니다!</h1>
      </header>




      <section id="notice">
        <Notice />
      </section>

      <section id="home">
        <Home />
      </section>

      <section id="club">
        <Club />
      </section>

      <footer>
        <p>© 2025 경북소프트웨어마이스터고등학교. All rights reserved.</p>
      </footer>

    </div>
  );
}


export default App;
