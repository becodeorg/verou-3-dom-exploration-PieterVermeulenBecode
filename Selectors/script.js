const allImportants= document.querySelectorAll(".important")
console.log(allImportants);

for (const x of allImportants){
    //console.log(x)
    x.setAttribute('title', "This is an important item");
}


const allImages= document.querySelectorAll("img")

for (const i of allImages){
    //console.log(i)
    if (i.className!="important"){
    i.style.display="none";
    }
}

const allParagraphs= document.querySelectorAll("p")
console.log(allParagraphs)
//console.log(allParagraphs);

for (const x of allParagraphs){
    console.log(x.innerText);
    if (x.className!=""&& x.className!="undefined"){
        console.log(x.className);
        
    }else {
        x.style.color= random_rgba();
    }
}
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',1 )';
    /*+ r().toFixed(1) + */
}