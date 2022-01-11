let people=["Ahmad","Jian","Michael","Dante","Muhammed","Nicolas","Jordy","Beryl","Cynthia","Magali","Jawid","Koen","Benjamin","Michelle","Colin","Feruz","Ellen","Sara","Pieter", "Dery", "Ruben"];
const shuffledPeople = people.sort((a, b) => 0.5 - Math.random());
document.body.onload = addElement(shuffledPeople);

function addElement (people) {
  const currentDiv = document.getElementsByTagName("article")[0];
      for (let p of people){
  const newDiv = document.createElement("section");
  const newParagraph = document.createElement("p");
  newParagraph.textContent=p;
  const color=random_rgba();
  if(isRgbaDark(color)){
       newDiv.style.color="#FFFFFF";
  }else {
       newDiv.style.color="#000000";
  }
  newDiv.style.backgroundColor=color;
  newDiv.appendChild(newParagraph);
  currentDiv.insertAdjacentElement("beforeend",newDiv);
  

  }
}
function isRgbaDark(color){
    let rgb = color;
    rgb = rgb.replace(/[^\d,]/g, '').split(',');
    console.log(rgb);
    let sum=0;
    for(let num of rgb){
        sum= sum+ parseInt(num);
    }
    if(sum<=384){
    return true;
    }else{
    return false;
    }
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',1 )';
    /*+ r().toFixed(1) + */
}