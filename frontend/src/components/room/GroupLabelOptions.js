import React from "react";

const GroupLabelOptions = ({ id, groupId }) => {
    const requestJoin = () => {
        console.log("Join: " + groupId);
    }

  return (
    <div id={id} className="group-label-options">
      <table className="options-table">
          <tr onClick={() => requestJoin()}>Request Join</tr>
      </table>
    </div>
  );
};

export default GroupLabelOptions;
