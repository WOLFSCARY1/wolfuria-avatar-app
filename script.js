let gender = "male";
let hair = 1, clothes = 1, pants = 1;

const body = document.getElementById("body");
const hairImg = document.getElementById("hair");
const clothesImg = document.getElementById("clothes");
const pantsImg = document.getElementById("pants");
const bg = document.getElementById("bg");

function update() {
  body.src = `assets/body_${gender}.png`;
  hairImg.src = `assets/hair${hair}${gender==="female"?"_f":""}.png`;
  clothesImg.src = `assets/clothes${clothes}${gender==="female"?"_f":""}.png`;
  pantsImg.src = `assets/pants${pants}${gender==="female"?"_f":""}.png`;
  bg.src = `assets/forest.png`;
}

document.getElementById("gender").onchange = e => {
  gender = e.target.value;
  update();
};

function nextHair(){ hair = hair%3+1; update(); }
function prevHair(){ hair = hair-1||3; update(); }

function nextClothes(){ clothes = clothes%3+1; update(); }
function prevClothes(){ clothes = clothes-1||3; update(); }

function nextPants(){ pants = pants%3+1; update(); }
function prevPants(){ pants = pants-1||3; update(); }

function setHairColor(c){ hairImg.style.filter = `drop-shadow(0 0 0 ${c})`; }
function setSkinColor(c){ body.style.filter = `drop-shadow(0 0 0 ${c})`; }
function setClothesColor(c){ clothesImg.style.filter = `drop-shadow(0 0 0 ${c})`; }
function setPantsColor(c){ pantsImg.style.filter = `drop-shadow(0 0 0 ${c})`; }

function setBg(name){
  bg.src = `assets/${name}.png`;
}

update();
