function update(){
  let c = document.getElementById("coords");
  let t = document.getElementById("time");
  let t = document.getElementById("link");
  
  let date = new Date();
  let year = date.getUTCFullYear();
  let month = date.getUTCMonth();
  let day = date.getUTCDate();
  let hours = date.getUTCHours();
  let mins = date.getUTCMinutes();
  
  let seed = `${year}${month}${day}${hours}${mins}`
  let randf = new Math.seedrandom(seed);
  
  let long = (randf() * 360 - 180).toFixed(6);
  let lat = (randf() * 180 - 90).toFixed(6);
  
  c.innerText = lat + ", " + long;
  t.innerText = date;
  l.innerHTML = `<a href="//www.google.com/maps/place/${lat},${long}">https://www.google.com/maps/place/${lat},${long}</a>`
}

setInterval(update, 1000);
