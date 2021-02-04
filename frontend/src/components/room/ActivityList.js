import React from "react";
import ActivityItem from './ActivityItem'

const ActivityList = ({ activity }) => {
  return (
  <table id="activity-table">
      {activity.map((a) => (
        <ActivityItem key={a.activityId} activityInfo={a} />
      ))}
  </table>
  );
};

export default ActivityList;
