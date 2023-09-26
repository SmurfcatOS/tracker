let c = document.getElementById("coords");
let t = document.getElementById("time");
let l = document.getElementById("link");

const date = new Date();
const year = date.getUTCFullYear();
const month = date.getUTCMonth();
const day = date.getUTCDate();
const hours = date.getUTCHours();

const seed = `${year}${month}${day}${hours}`
const randf = new Math.seedrandom(seed);
const rand = randf();

const long = (rand * 360 - 180).toFixed(6);
const lat = (rand * 180 - 90).toFixed(6);

c.innerText = lat + ", " + long;
t.innerText = date;
  
l.innerHTML = `<a href="//www.google.com/maps/place/${lat},${long}">https://www.google.com/maps/place/${lat},${long}</a>`

function update(){
  let idate = document.getElementById("date").value;
  let ihour = document.getElementById("hour").value;

  let rf = new Math.seedrandom(`${idate.getYear()}${idate.getMonth()}${idate.getDay()}${hour}`);
  let r = rf();

  let lo = (r * 360 - 180).toFixed(6);
  let la = (r * 180 - 90).toFixed(6);

  document.getElementById("tracker2").innerHTML = `<h2>Archive</h2><b>Date: </b><input id="date" type="date"><br><b>Hour: </b><input id="hour" type="number" min="0" max="23"><br><button onclick="update()">Retrieve</button><br><br><b>Coordinates: </b>${la}, ${lo}<br><b>Google Maps Link: </b><a href="//www.google.com/maps/place/${la},${lo}">https://www.google.com/maps/place/${la},${lo}</a>`;
}
