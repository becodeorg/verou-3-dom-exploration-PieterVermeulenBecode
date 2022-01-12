
document.body.onload = addElement(boardGames);

function addElement (items) {
    let currentDiv = document.getElementById("cardCollection");
    
    for (let item of items){
    const newCard = document.createElement("div");
    newCard.className="card"; //Create a card

    const newTitle = document.createElement("h2"); //Create a Title
    newTitle.textContent=item.Title;    //asign a value to the Title
    newCard.appendChild(newTitle);      //add the title to the card

    const newImage = document.createElement("img"); //Create a Image
    newImage.src =item.Picture;    //asign a value to the Image
    newCard.appendChild(newImage); //add the Image to the card

    const newDesignerDiv = document.createElement("div"); //Create a div
    newDesignerDiv.className ="designer";    //asign a class to the div
    newCard.appendChild(newDesignerDiv); //add the Div to the card

    const newParagraphScore = document.createElement("p"); //Create a Paragraph for the score
    newParagraphScore.textContent=item.Score;    //asign a value to the Paragraph
    newDesignerDiv.appendChild(newParagraphScore); //add the Paragraph to the designerdiv

    const newDesigner = document.createElement("p"); //Create a Paragraph for the Designer
    newDesigner.textContent=item.Designer;    //asign a value to the Paragraph
    newDesignerDiv.appendChild(newDesigner); //add the Paragraph to the designerdiv
    
    const newParagraph = document.createElement("p"); //Create a paragraph
    newParagraph.textContent=item.Description;    //asign a value to the paragraph
    newCard.appendChild(newParagraph); //add the paragraph to the card

    

    currentDiv.insertAdjacentElement("beforeend",newCard); //add the card to the cardCollection
    }
  }