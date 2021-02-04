class UserInfo {
  constructor(id = 0, name = "", desc = "", picId = 0, groupId = 0, groupName = "") {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.picId = picId;
    this.groupId = groupId;
    this.groupName = groupName;
  }
}

export default UserInfo;
