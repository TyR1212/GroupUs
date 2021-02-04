import React, { useState, useEffect, useContext } from "react";
import CardRow from "./CardRow";
import UserInfo from "./../UserInfo";
import { UsersContext } from "./../UsersContext";

const GroupsTable = () => {
  const [users, setUsers] = useContext(UsersContext);
  const [grouped, setGrouped] = useState([]);
  const [ungrouped, setUngrouped] = useState([]);
  const [numGroups, setNumGroups] = useState(2); //get rid of this later

  const addUser = (user) => {
    setUsers((oldUsers) => [...oldUsers, user]);
  };

  const deleteUser = (id) => {
    var filteredUsers = [];

    users.forEach((u) => {
      if (u.id !== id) {
        filteredUsers.push(u);
      }
    });

    setUsers(filteredUsers);

    var filteredRows = [];
    var tempRow = [];

    grouped.forEach((row) => {
      row.forEach((u) => {
        if (u.id !== id) {
          tempRow.push(u);
        }
      });
      filteredRows.push(tempRow);
      tempRow = [];
    });

    setGrouped(filteredRows);
  };

  useEffect(() => { //generate sample users and groups
    setGrouped([]);
    setUngrouped([]);
    setUsers([]);
    addUser(
      new UserInfo(
        0,
        "Micheal Thomas",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam commodi dolorem sequi quo",
        1,
        0,
        ""
      )
    );
    addUser(new UserInfo(1, "Ricardo V.", "dfgd fgdgfd f", 1, 0, ""));
    addUser(new UserInfo(2, "Journey Adalynn", "dfgd ddwsewe w", 1, 1, ""));
    addUser(new UserInfo(3, "Allen Paden", "yu rtrth srth sr", 1, 1, ""));
    addUser(new UserInfo(4, "Gracelyn Colton", "", 1, 1, ""));
    addUser(new UserInfo(5, "Theodora Booker", "", 1, -1, ""));
    addUser(new UserInfo(6, "Elisabeth E.", "", 1, -1, ""));
    addUser(new UserInfo(7, "Rebecca Bill", "", 1, -1, ""));
    addUser(new UserInfo(8, "Cynthia Corrie", "", 1, -1, ""));
  }, []);

  useEffect(() => { //populate group arrays
    //console.log(users);
    if (users.length > 0) {
      var newRows = [];
      var tempRow = [];
      var newUngrouped = [];

      for (let i = 0; i < numGroups; i++) {
        users.forEach((u) => {
          if (u.groupId === i) {
            tempRow.push(u);
          }
        });

        newRows.push(tempRow);
        tempRow = [];
        console.log(`row: ${i}, numGroups: ${numGroups}`);
      }

      var count = 0;
      tempRow = [];

      users.forEach((u) => {
        if (u.groupId === -1) {
          tempRow.push(u);
          count++;

          if (count === 3) {
            newUngrouped.push(tempRow);
            tempRow = [];
            count = 0;
          }
        }
      });

      if (tempRow.length > 0) {
        newUngrouped.push(tempRow);
      }

      setGrouped(newRows);
      setUngrouped(newUngrouped);
    }
  }, [users]);

  const deleteGroupLabelOptions = () => {
    var elements = document.getElementsByClassName("group-label-options");

    Array.from(elements).forEach((e) => {
      e.style.display = "none";
    });
  };

/*   const groupMem = () => {
    var newUsers = users.slice(0);

    newUsers[1].groupId = 0;
    setUsers(newUsers);
  }; */

  return (
    <div>
      <div id="groups-table-container" onScroll={deleteGroupLabelOptions}>
        <div id="groups-table">
          {grouped.map((row) => (
            <CardRow
              key={grouped.indexOf(row)}
              row={row}
              rowNum={grouped.indexOf(row)}
            />
          ))}
          <br />
          <hr />
          <br />
          <div className="group-name-label">Ungrouped</div>
          {ungrouped.map((row) => (
            <CardRow
              key={ungrouped.indexOf(row)}
              row={row}
              rowNum={ungrouped.indexOf(row)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupsTable;
