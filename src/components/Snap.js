import React from "react";

const Snap = ({ selectedSnap, setSelectedSnap }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedSnap(null);
    }
  };

  return (
    <div className='backdrop' onClick={handleClick}>
      <img src={selectedSnap} alt='aloha' />
    </div>
  );
};

export default Snap;
