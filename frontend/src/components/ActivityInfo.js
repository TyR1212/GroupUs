class ActivityInfo {
    constructor(
      activityId = 0,
      type = "",
      otherUsername = "",
      groupName = "",
      groupId = 0,
    ) {
      this.activityId = activityId;
      this.type = type;
      this.otherUsername = otherUsername;
      this.groupName = groupName;
      this.groupId = groupId;
    }
  }
  
  export default ActivityInfo;
  