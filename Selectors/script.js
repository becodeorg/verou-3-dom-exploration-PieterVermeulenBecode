const allImportants= document.querySelectorAll(".important")
console.log(allImportants);

for (const x of allImportants){
    //console.log(x)
    x.setAttribute('title', "This is an important item");
}


const allImages= document.querySelectorAll("img")
console.log(allImages);

for (const i of allImages){
    console.log(i)
    if (i.className!="important"){
    i.style.display="none";
    }
}

/*const allParagraphs= document.querySelectorAll("p")
console.log(allParagraphs);

for (const x of allParagraphs){
    console.log(x.innerText);
    if (x.className!=""){
    console.log(x.className);
    }
}*/
