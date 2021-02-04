import React, { useContext } from "react";
import { ActivityContext } from "./../ActivityContext";

const InviteChoices = ({ activityInfo }) => {
  const [activity, setActivity] = useContext(ActivityContext);

  const deleteActivity = () => {
    var newActivity = [];

    activity.forEach((a) => {
      if (a.activityId !== activityInfo.activityId) {
        newActivity.push(a);
      }
    });

    setActivity(newActivity);
  } 

  const acceptInvite = () => {
    console.log("Accept to group: " + activityInfo.groupId);
    deleteActivity();
  };

  const hideInvite = () => {
    console.log("Reject to group: " + activityInfo.groupId);
    deleteActivity();
  };
  
  return (
    <div className="invite-choices">
      <div className="accept-choice" onClick={acceptInvite}>
        Accept
      </div>
      <div className="hide-choice" onClick={hideInvite}>Hide</div>
    </div>
  );
};

export default InviteChoices;
