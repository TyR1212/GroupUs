import React from "react";

const CardOptions = ({ user }) => {
    const inviteUser = () => {
        console.log("Invite: " + user.id);
    }
    const requestJoin = () => {
        console.log("Join: " + user.groupId);
    }

  return (
    <div className="card-options">
      <table className="options-table">
          <tr onClick={() => inviteUser()}>Invite</tr>
          <hr />
          <tr onClick={() => requestJoin()}>Request Join</tr>
          <hr />
          <tr>Read More</tr>
      </table>
    </div>
  );
};

export default CardOptions;
