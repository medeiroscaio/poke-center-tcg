import "./UserPanel.css";
import React, { useState, useEffect } from "react";
import { FaRegUser } from "react-icons/fa";

function getDate() {
  const today = new Date();
  let month = today.toLocaleString("default", { month: "short" });
  month = month.replace(".", "");
  const year = today.getFullYear();
  const date = today.getDate();
  var days = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  const dayName = days[today.getDay()];
  return `${date} ${month} ${year}, ${dayName} `;
}

function getTime() {
  const time = new Date();
  const hours = ("0" + time.getHours()).slice(-2);
  const minutes = ("0" + time.getMinutes()).slice(-2);
  const seconds = ("0" + time.getSeconds()).slice(-2);

  return `${hours}:${minutes}:${seconds}`;
}

const UserPanel = () => {
  const [currentDate, setCurrentDate] = useState(getDate());
  const [currentTime, setCurrentTime] = useState(getTime());

  useEffect(() => {
    var changeDate = setInterval(() => setCurrentDate(getDate()), 60000);
    return function cleanup() {
      clearInterval(changeDate);
    };
  });

  useEffect(() => {
    var timer = setInterval(() => setCurrentTime(getTime()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="user-control">
      <span id="date">{currentDate}</span>
      <div className="user-info">
        <span id="hour">{currentTime}</span>
        <span id="user-icon">
          <FaRegUser />
        </span>
      </div>
    </div>
  );
};
export default UserPanel;
