class RoomInfo {
  constructor(
    name = "",
    admin = "",
    maxGroupMembers = 0,
    roomCode = "",
    adminCode = "",
    createdDate = new Date()
  ) {
    this.name = name;
    this.admin = admin;
    this.maxGroupMembers = maxGroupMembers;
    this.roomCode = roomCode;
    this.adminCode = adminCode;
    this.createdDate = createdDate;
  }
}

export default RoomInfo;
