import React from 'react';

const titleCategory = ({category}: any) => {
  return (
    <span className="post-button lantern-btn fixed top-6 left-0 right-0 text-center">
      {category}
    </span>
  );
}

export default titleCategory;
