import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonTaskRow = () => {
  return (
    <div className="task-row-skeleton">
      <Skeleton height={60} width="100%" />
    </div>
  );
};

export default SkeletonTaskRow;
