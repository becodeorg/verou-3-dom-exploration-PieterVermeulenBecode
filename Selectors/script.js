const allImportants= document.querySelectorAll(".important")
console.log(allImportants);

for (const x of allImportants){
    console.log(x)
    x.setAttribute('title', "This is an important item");
}


const allImages= document.querySelectorAll("img")
console.log(allImages);

for (const x of allImages){
    console.log(x)
    x.style.display="none";
}