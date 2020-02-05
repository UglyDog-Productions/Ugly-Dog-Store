import React from 'react';

import './header.scss';

function Headers() {
  return (
    <div>
      <div className="header">
        <img
          alt="logo"
          src="https://ca-times.brightspotcdn.com/dims4/default/7170900/2147483647/strip/true/crop/400x543+0+0/resize/840x1140!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F47%2Fd7%2Fae1010fce5e4431458213dffdd3d%2Fsdut-6a025e38-6c19-543f-abf9-4c2eaec-20160828"
        />
      </div>
      <div className="searchfield">
        <form>
          <input type="text" placeholder="Search for products.." />
        </form>
      </div>
    </div>
  );
}

export default Headers;
