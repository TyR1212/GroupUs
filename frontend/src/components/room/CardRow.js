import React, { useState } from "react";
import Card from "./Card";
import GroupLabelOptions from "./GroupLabelOptions";

const CardRow = ({ row, rowNum }) => {
  const toggleGroupLabelOptions = () => {
    document.getElementById("glo-" + rowNum).style.display = "block";
  };

  return (
    <div>
      {row[0].groupId === -1 && (
        <div>
          <div className="card-row">
            {row.map((u) => (
              <Card key={u.id} user={u} />
            ))}
          </div>
        </div>
      )}
      {row[0].groupId >= 0 && (
        <div>
          <div className="group-name-label-container">
            <div className="group-name-label" onClick={toggleGroupLabelOptions}>
              Group Name
            </div>
            <GroupLabelOptions id={"glo-" + rowNum} groupId={rowNum} />
          </div>
          <div className="card-row">
            {row.map((u) => (
              <Card key={u.id} user={u} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardRow;
