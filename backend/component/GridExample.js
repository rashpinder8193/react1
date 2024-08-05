import React from 'react';

const GridExample = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">Column 1</div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">Column 2</div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">Column 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridExample;
