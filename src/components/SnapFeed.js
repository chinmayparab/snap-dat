import React from "react";
import useFirestore from "../firebase/useFirestore";
import { motion } from "framer-motion";

const SnapFeed = ({ setSelectedSnap }) => {
  const { docs } = useFirestore("images");

  return (
    <div className='feed'>
      {docs &&
        docs.map((doc) => (
          <motion.div
            className='wrapper'
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedSnap(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt='check'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default SnapFeed;
