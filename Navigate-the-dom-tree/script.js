const parent=document.getElementsByTagName("ol")[0];
const lastChild=parent.lastElementChild;
parent.prepend(lastChild);


const secondSection=document.getElementsByTagName("section")[1];
const thirdSection=document.getElementsByTagName("section")[2];
const thirdTitle=thirdSection.firstElementChild;


const h2to3=secondSection.firstElementChild;
const h3to2=thirdSection.firstElementChild;

secondSection.prepend(h3to2);
thirdSection.prepend(h2to3);

thirdSection.parentElement.removeChild(thirdSection);