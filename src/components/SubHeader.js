import React from "react";
import Toggle from "./Toggle";

function SubHeader() {
  return (
    <div className="flex bg-red flex-wrap p-1 mx-auto">
      <div className="mx-auto">
        <Toggle />
      </div>
    </div>
  );
}

export default SubHeader;
