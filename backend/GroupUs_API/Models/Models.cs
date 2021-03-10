using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GroupUs_API.Models
{
    public class Models
    {
        public class BodyParams
        {
            public string Username { get; set; }
            public string Password { get; set; }
            public string RoomCode { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public RoomInfo RoomInfo { get; set; }
            public Activity Activity { get; set; }
            public Chat Chat { get; set; }
        }

        public class RoomInfo
        {
            public string RoomName { get; set; }
            public string AdminName { get; set; }
            public int MaxGroupMembers { get; set; }
            public string RoomCode { get; set; }
            public string AdminCode { get; set; }
            public DateTime CreatedDate { get; set; }
            public List<User> Users { get; set; }
            public List<Group> Groups { get; set; }
            public List<UserDescription> UserDescriptions { get; set; }
            public List<Activity> ActivityLog { get; set; }
            public List<Chat> ChatLog { get; set; }
        }

        public class User
        {
            public string UserId { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string ProfilePicPath { get; set; }
        }

        public class Group
        {
            public string GroupName { get; set; }
            public List<string> UserIds { get; set; }
        }

        public class UserDescription
        {
            public string UserId { get; set; }
            public string RoomCode { get; set; }
            public string Description { get; set; }
        }

        public class Activity
        {
            public int Id { get; set; }
            public string UserId { get; set; }
            public string Type { get; set; }
            public string OtherFirstName { get; set; }
            public string OtherLastName { get; set; }
            public string GroupName { get; set; }
        }

        public class Chat
        {
            public int Id { get; set; }
            public string Content { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public DateTime Date { get; set; }
        }
    }
}
