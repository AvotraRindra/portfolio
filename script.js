const modebtn = document.getElementById("modebtn");
const menutoggle = document.getElementById("menu-toggle");
let lune = "&#9790;";
let soleil = "&#9728;";

modebtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  let x = lune;
  lune = soleil;
  soleil = x;

  modebtn.innerHTML = soleil;
});

menutoggle.addEventListener("click", ()=>{
    document.getElementById("menu").classList.toggle("active")
})