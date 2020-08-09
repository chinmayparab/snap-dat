import React from "react";
import Header from "./components/Header";
import Uploader from "./components/Uploader";
import SnapFeed from "./components/SnapFeed";

function App() {
  return (
    <div className='App'>
      <Header />
      <Uploader />
      <SnapFeed />
    </div>
  );
}

export default App;
