import React from "react";
import { motion } from "framer-motion";

const Snap = ({ selectedSnap, setSelectedSnap }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedSnap(null);
    }
  };

  return (
    <motion.div
      className='backdrop'
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedSnap}
        alt='aloha'
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Snap;
