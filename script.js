// Индексы для смены слоев
let hairIndex = 1;
let clothesIndex = 1;

// Сменить волосы
function changeHair() {
  hairIndex++;
  if (hairIndex > 3) hairIndex = 1; // допустим 3 варианта
  document.getElementById("hair").src = `assets/hair${hairIndex}.png`;
}

// Сменить одежду
function changeClothes() {
  clothesIndex++;
  if (clothesIndex > 3) clothesIndex = 1; // допустим 3 варианта
  document.getElementById("clothes").src = `assets/clothes${clothesIndex}.png`;
}

// Сохранение аватара (пока заглушка)
function saveAvatar() {
  alert("💾 Аватар WOLFURIA сохранён! В дальнейшем его можно связать с ботом.");
}
