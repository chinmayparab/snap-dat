import React from "react";
import useFirestore from "../firebase/useFirestore";

const SnapFeed = ({ setSelectedSnap }) => {
  const { docs } = useFirestore("images");

  return (
    <div className='feed'>
      {docs &&
        docs.map((doc) => (
          <div
            className='wrapper'
            key={doc.id}
            onClick={() => setSelectedSnap(doc.url)}
          >
            <img src={doc.url} alt='check' />
          </div>
        ))}
    </div>
  );
};

export default SnapFeed;
