console.log(document.title)
document.title="new title"
console.log(document.title)
document.body.style.backgroundColor= "#FF69B4"
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
var color = random_rgba();
document.body.style.backgroundColor= color