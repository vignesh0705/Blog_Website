import React, { Suspense } from 'react';
import BlogDetailPage from '@/component/blogdetail';

const Detail = () => {
  return (
    <Suspense fallback={<div>Loading Blog Details...</div>}>
      <BlogDetailPage />
    </Suspense>
  );
};

export default Detail;
