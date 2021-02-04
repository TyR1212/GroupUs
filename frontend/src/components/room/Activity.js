import React, { useContext, useEffect } from "react";
import { ActivityContext } from "./../ActivityContext";
import ActivityList from "./ActivityList";
import ActivityInfo from "./../ActivityInfo";

const Activity = () => {
  const [activity, setActivity] = useContext(ActivityContext);

  useEffect(() => {
    setActivity([]);
    receiveInvite(); //receive test invites on page load
  }, [])

  const receiveInvite = () => {
    setActivity((oldActivity) => [
      ...oldActivity,
      new ActivityInfo(0, "invite", "User2", "Group Name", 1)
    ]);
    setActivity((oldActivity) => [
      ...oldActivity,
      new ActivityInfo(1, "invite", "Username_xX", "The second group", 2)
    ]);
  };

  return (
    <div id="activity-container">
      <div className="social-sub-label">Activity</div>
      <div id="activity-table-container">
        <ActivityList activity={activity} />
      </div>
    </div>
  );
};

export default Activity;
