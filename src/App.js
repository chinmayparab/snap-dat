import React, { useState } from "react";
import Header from "./components/Header";
import Uploader from "./components/Uploader";
import SnapFeed from "./components/SnapFeed";
import Snap from "./components/Snap";

function App() {
  const [selectedSnap, setSelectedSnap] = useState(null);

  return (
    <div className='App'>
      <Header />
      <Uploader />
      <SnapFeed setSelectedSnap={setSelectedSnap} />
      {selectedSnap && (
        <Snap selectedSnap={selectedSnap} setSelectedSnap={setSelectedSnap} />
      )}
    </div>
  );
}

export default App;
