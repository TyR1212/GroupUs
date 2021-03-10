using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GroupUs_API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using static GroupUs_API.Models.Models;

namespace GroupUs_API.Controllers
{
    [ApiController]
    //[Authorize]
    [Route("api")]
    public class Controller : ControllerBase
    {
        private readonly ISqlHelper sqlHelper;

        public Controller(ISqlHelper sqlHelper)
        {
            this.sqlHelper = sqlHelper;
        }

        //[AllowAnonymous]
        [HttpPost("login")]
        public ActionResult Login([FromBody] BodyParams body)
        {
            if (sqlHelper.Login(body.Username, body.Password))
                return Ok();
            else
                return Unauthorized();
        }

        //[AllowAnonymous]
        [HttpPost("create-user")]
        public ActionResult CreateUser([FromBody] BodyParams body)
        {
            if (sqlHelper.CreateUser(body.Username, body.Password, body.FirstName, body.LastName))
                return Ok();
            else
                return BadRequest();
        }

        [HttpGet("room/get-info")]
        public RoomInfo GetRoomInfo(string roomCode)
        {
            return sqlHelper.GetRoomInfo(roomCode);
        }

        [HttpPost("room/create")]
        public ActionResult CreateRoom([FromBody] BodyParams body)
        {
            string roomCode = sqlHelper.CreateRoom(body.RoomInfo);

            if (roomCode != null)
                return Ok(new { roomCode });
            else
                return BadRequest();
        }

        [HttpPost("room/add-activity")]
        public ActionResult AddActivity([FromBody] BodyParams body)
        {
            if (sqlHelper.AddActivity(body.RoomCode, body.Activity))
                return Ok();
            else
                return BadRequest();
        }

        [HttpPost("room/add-chat")]
        public ActionResult AddChat([FromBody] BodyParams body)
        {
            if (sqlHelper.AddChat(body.RoomCode, body.Chat))
                return Ok();
            else
                return BadRequest();
        }
    }
}
