import React from 'react';
import RecommendedContent from './RecommendedContent';
import { recommendedItems } from './Data';  // Import the data

const MainContent = () => {
  const items = Array.isArray(recommendedItems) ? recommendedItems : [];

  return (
    <div className="col-lg-9 mt-5 mx-5">
      <div className="p-3 border rounded bg-light">
        <h2>Recommended Content</h2>

        <div className="row">
          {items.length > 0 ? (
            items.map((item) => (
              <div className="col-md-4 mb-4" key={item.id}>
                <RecommendedContent content={item} />
              </div>
            ))
          ) : (
            <p>No recommended content available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
