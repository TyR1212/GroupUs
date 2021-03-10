using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static GroupUs_API.Models.Models;

namespace GroupUs_API.Data
{
    public interface ISqlHelper
    {
        public bool Login(string username, string password);
        public bool CreateUser(string username, string password, string firstName, string lastName);
        public RoomInfo GetRoomInfo(string roomCode);
        public string CreateRoom(RoomInfo roomInfo);
        public bool AddActivity(string roomCode, Activity activity);
        public bool AddChat(string roomCode, Chat chat);
    }
}
