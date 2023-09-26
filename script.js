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
  let ihour = document.getElementById("date").value;

  let rf = new Math.seedrandom(`${idate.getYear()}${idate.getMonth()}${idate.getDay()}${hour}`);
  let r = rf();
}
