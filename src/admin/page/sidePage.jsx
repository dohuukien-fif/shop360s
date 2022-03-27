import React from 'react';
import MenuSidePage from '../component/sidePage/MenuSidePage';

SidePageFeatures.propTypes = {};

function SidePageFeatures({ setisopens }) {
  return (
    <div className="sidePage">
      <div className="sidePage_Link">
        <MenuSidePage setisopens={setisopens} />
      </div>
    </div>
  );
}

export default SidePageFeatures;
