const boardGames =
[
    {
    GameNr:1,
    Title:"Title",
    Description:"description",
    Picture:"3",
    Score: "4",
    },
    {
    GameNr:1,
    Title:"Title",
    Description:"description",
    Picture:"3",
    Score: "4",
    }
];


document.body.onload = addElement(boardGames);

function addElement (items) {
    let currentDiv = document.getElementById("cardCollection");
    
    for (let item of items){
    const newCard = document.createElement("div");
    newCard.className="card"; //Create a card

    const newTitle = document.createElement("h2"); //Create a Title
    newTitle.textContent=item.Title;    //asign a value to the Title
    newCard.appendChild(newTitle);      //add the title to the card

    const newParagraph = document.createElement("p"); //Create a paragraph
    newParagraph.textContent=item.Description;    //asign a value to the paragraph
    newCard.appendChild(newParagraph); //add the paragraph to the card

    currentDiv.insertAdjacentElement("beforeend",newCard); //add the card to the cardCollection
    
    }
  }