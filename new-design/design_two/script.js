console.log("Script is running");

let Data = { classes: [], teachers: [] };

let passwd;
let passRight = false;

let PeriodTiming = {
    normal: [
        { start: "8:50", end: "9:30",   name: "1.ders", type: "ders" },
        { start: "9:30", end: "9:40",   name: "1.tenefüs", type:"tenefüs"},
        { start: "9:40", end: "10:20",  name: "2.ders", type:"tenefüs" },
        { start: "10:20", end: "10:30", name: "2.tenefüs", type:"tenefüs"},
        { start: "10:30", end: "11:10", name: "3.ders", type:"tenefüs" },
        { start: "11:10", end: "11:20", name: "3.tenefüs", type:"tenefüs"},
        { start: "11:20", end: "12:00", name: "4.ders", type:"tenefüs" },
        { start: "12:00", end: "12:50", name: "4.tenefüs", type:"tenefüs"},
        { start: "12:50", end: "13:30", name: "5.ders", type:"tenefüs" },
        { start: "13:30", end: "13:40", name: "5.tenefüs", type:"tenefüs"},
        { start: "13:40", end: "14:20", name: "6.ders", type:"tenefüs" },
        { start: "14:20", end: "14:30", name: "6.tenefüs", type:"tenefüs"},
        { start: "14:30", end: "15:10", name: "7.ders", type:"tenefüs" },
        { start: "15:10", end: "15:20", name: "7.tenefüs", type:"tenefüs"},
        { start: "15:20", end: "16:00", name: "8.ders", type:"tenefüs" },
    ],
    friday: [
        { start: "8:50", end: "9:30",   name: "1.ders", type: "ders" },
        { start: "9:30", end: "9:40",   name: "1.tenefüs", type:"tenefüs"},
        { start: "9:40", end: "10:20",  name: "2.ders", type:"tenefüs" },
        { start: "10:20", end: "10:30", name: "2.tenefüs", type:"tenefüs"},
        { start: "10:30", end: "11:10", name: "3.ders", type:"tenefüs" },
        { start: "11:10", end: "11:20", name: "3.tenefüs", type:"tenefüs"},
        { start: "11:20", end: "12:00", name: "4.ders", type:"tenefüs" },
        { start: "12:00", end: "12:10", name: "4.tenefüs", type:"tenefüs"},
        { start: "12:10", end: "12:50", name: "5.ders", type:"tenefüs" },
        { start: "12:50", end: "13:40", name: "5.tenefüs", type:"tenefüs"},
        { start: "13:40", end: "14:20", name: "6.ders", type:"tenefüs" },
        { start: "14:20", end: "14:30", name: "6.tenefüs", type:"tenefüs"},
        { start: "14:30", end: "15:10", name: "7.ders", type:"tenefüs" },
        { start: "15:10", end: "15:20", name: "7.tenefüs", type:"tenefüs"},
        { start: "15:20", end: "16:00", name: "8.ders", type:"tenefüs" },
    ]
}

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let isFriday = today.getDay() == 5;
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);

  let times = PeriodTiming[isFriday ? "friday" : "normal" ];

  let current = times.filter(time => {
      let startHour = Number(time.start.split(":")[0]);
      let startMinutes = Number(time.start.split(":")[1]);

      let endHour = Number(time.end.split(":")[0]);
      let endMinutes = Number(time.end.split(":")[1]);

      return h > startHour && m > startMinutes && h < endHour && m < endMinutes;
  })[0];

  document.getElementById("ders-saati").innerHTML = "Şu an " + current.name;

}



function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}






