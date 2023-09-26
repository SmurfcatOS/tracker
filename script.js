function update(){
  let c = document.getElementById("coords");
  let t = document.getElementById("time");
  let l = document.getElementById("link");
  
  let date = new Date();
  let year = date.getUTCFullYear();
  let month = date.getUTCMonth();
  let day = date.getUTCDate();
  let hours = date.getUTCHours();
  
  let seed = `${year}${month}${day}${hours}`
  let randf = new Math.seedrandom(seed);
  let rand = randf();
  
  let long = (rand * 360 - 180).toFixed(6);
  let lat = (rand * 180 - 90).toFixed(6);
  
  c.innerText = lat + ", " + long;
  t.innerText = date;
  l.innerHTML = `<a href="//www.google.com/maps/place/${lat},${long}">https://www.google.com/maps/place/${lat},${long}</a>`
}

setInterval(update, 1000);
