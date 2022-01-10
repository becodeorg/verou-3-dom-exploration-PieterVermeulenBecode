const allImportants= document.querySelectorAll(".important")
console.log(allImportants);

for (const x of allImportants){
    console.log(x)
    x.setAttribute('title', "This is an important item");
}