console.log(document.title)
document.title="new title"
console.log(document.title)
document.body.style.backgroundColor= "#FF69B4"
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

document.body.style.backgroundColor= random_rgba()

function getChild(parent){
return parent.firstChild;
}


var children = document.body.children;
console.log(children);
for (const element of children) {
    console.log(element);
}