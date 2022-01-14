document.body.onload = addElement(boardGames);


function Search() {
  const form = document.getElementById("Name")
  const kaarten = document.getElementsByTagName("h2")

  for (let kaart of kaarten) {
    let parent = kaart.parentElement.parentElement;
    if (kaart.textContent.toLowerCase().includes(form.value.toLowerCase())) {
      parent.style.display = "block";
    } else {
      parent.style.display = "none";
    }
  }
}

function addElement(items) {
  let currentDiv = document.getElementById("cardCollection");

  for (let item of items) {
    const newAnker = document.createElement("a");
    newAnker.href = item.Link;


    const newCard = document.createElement("div");
    newCard.className = "card"; //Create a card
    newAnker.appendChild(newCard);

    const newImage = document.createElement("img"); //Create a Image
    newImage.src = item.Picture; //asign a value to the Image
    newCard.appendChild(newImage); //add the Image to the card

    const newTitle = document.createElement("h2"); //Create a Title
    newTitle.textContent = item.Title; //asign a value to the Title
    newCard.appendChild(newTitle); //add the title to the card

    const newParagraph = document.createElement("p"); //Create a paragraph
    newParagraph.textContent = item.Description; //asign a value to the paragraph
    newCard.appendChild(newParagraph); //add the paragraph to the card

    const newDesignerDiv = document.createElement("div"); //Create a div
    newDesignerDiv.className = "designer"; //asign a class to the div
    newCard.appendChild(newDesignerDiv); //add the Div to the card

    const newDesigner = document.createElement("p"); //Create a Paragraph for the Designer
    newDesigner.textContent = item.Designer; //asign a value to the Paragraph
    newDesignerDiv.appendChild(newDesigner); //add the Paragraph to the designerdiv

    const newParagraphPlayerNr = document.createElement("p"); //Create a Paragraph for the PlayerNr
    newParagraphPlayerNr.textContent = item.PlayerNr; //asign a value to the Paragraph
    newDesignerDiv.appendChild(newParagraphPlayerNr); //add the Paragraph to the designerdiv

    const newLogo = document.createElement("img"); //Create a Logo
    newLogo.src = "players.png"; //asign a value to the Logo
    newDesignerDiv.appendChild(newLogo); //add the Logo to the card

    const newParagraphScore = document.createElement("p"); //Create a Paragraph for the score
    newParagraphScore.textContent = item.Score; //asign a value to the Paragraph
    newDesignerDiv.appendChild(newParagraphScore); //add the Paragraph to the designerdiv



    currentDiv.insertAdjacentElement("beforeend", newAnker); //add the card to the cardCollection
  }
}