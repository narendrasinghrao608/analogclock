import React from 'react'

function Main() {
  setInterval(() => {
    let d=new Date();
    let htime=d.getHours();
    let mtime=d.getMinutes();
    let stime=d.getSeconds();
    let hrotat=(30*htime)+(mtime/2);
    let mrotat=6*mtime;
    let srotat=6*stime;
    let hour=document.getElementById("hour");
    let minute=document.getElementById("minute");
    let second=document.getElementById("second");
    hour.style.transform=`rotate(${hrotat}deg)`;
    minute.style.transform=`rotate(${mrotat}deg)`;
    second.style.transform=`rotate(${srotat}deg)`;
  }, 1000);
  return (
    <div id='clockcontainer'>
      <div id="hour"></div>
      <div id="minute"></div>
      <div id="second"></div>
    </div>
  )
}

export default Main
