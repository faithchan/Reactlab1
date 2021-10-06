import Bedroom1 from './Bedroom1';
import Bedroom2 from './Bedroom2';
import Bedroom3 from './Bedroom3';
import Fullbath from './Fullbath';
import Halfbath from './Halfbath';
import Kitchen from './Kitchen';
import Livingroom from './Livingroom';
import React from "react";

function Floorplan() {
  return (
    <div className="floorplan">
      <Bedroom1 />
      <Kitchen />
      <Fullbath />
      <Bedroom2 />
      <Livingroom />
      <Halfbath />
      <Bedroom3 />
    </div>
  );
}

export default Floorplan;