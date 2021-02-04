import React from "react";
import InviteChoices from "./InviteChoices";

const ActivityItem = ({ activityInfo }) => {
  return (
    <div>
      {activityInfo.type === "invite" && (
        <tr className="activity-item">
          <div className="activity-message">
            <b>You</b> received an invite to <b>{activityInfo.groupName}</b> from <b>{activityInfo.otherUsername}</b>.
          </div>
          <InviteChoices activityInfo={activityInfo} />
        </tr>
      )}
    </div>
  );
};

export default ActivityItem;
