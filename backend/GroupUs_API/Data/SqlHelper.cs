using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static GroupUs_API.Models.Models;

namespace GroupUs_API.Data
{
    public class SqlHelper : ISqlHelper
    {
        public bool Login(string username, string password)
        {
            return true;
        }

        public bool CreateUser(string username, string password, string firstName, string lastName)
        {
            return true;
        }

        public RoomInfo GetRoomInfo(string code)
        {
            return new RoomInfo();
        }

        public string CreateRoom(RoomInfo roomInfo)
        {
            return "gdf8g7dfg";
        }

        public bool AddActivity(string roomCode, Activity activity)
        {
            return true;
        }

        public bool AddChat(string roomCode, Chat chat)
        {
            return true;
        }
    }
}
