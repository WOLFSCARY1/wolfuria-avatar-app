let gender='male', hairIndex=1, clothesIndex=1, skinColor='#FAD7B5', background='forest';

function setGender(g){gender=g; hairIndex=1; clothesIndex=1;
 if(g==='male'){document.getElementById('body').src='assets/body_male.png'; document.getElementById('hair').src='assets/hair1.png'; document.getElementById('clothes').src='assets/clothes1.png';} 
 else {document.getElementById('body').src='assets/body_female.png'; document.getElementById('hair').src='assets/hair1_f.png'; document.getElementById('clothes').src='assets/clothes1_f.png';} 
 document.getElementById('body').style.backgroundColor=skinColor;
}

function changeHair(){hairIndex++; if(gender==='male'){if(hairIndex>3)hairIndex=1; document.getElementById('hair').src=`assets/hair${hairIndex}.png`; } 
else {if(hairIndex>3)hairIndex=1; document.getElementById('hair').src=`assets/hair${hairIndex}_f.png`; } }

function changeClothes(){clothesIndex++; if(gender==='male'){if(clothesIndex>3)clothesIndex=1; document.getElementById('clothes').src=`assets/clothes${clothesIndex}.png`; } 
else {if(clothesIndex>3)clothesIndex=1; document.getElementById('clothes').src=`assets/clothes${clothesIndex}_f.png`; } }

function changeSkin(c){skinColor=c; document.getElementById('body').style.backgroundColor=skinColor;}
function changeBackground(bg){background=bg; document.getElementById('background').src=`assets/${bg}.png`;}
function saveAvatar(){alert("💾 Аватар WOLFURIA сохранён!");}
