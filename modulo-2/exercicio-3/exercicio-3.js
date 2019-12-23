var nomes = ["Diego", "Gabriel", "Lucas"];

let ulElement = document.createElement("ul");
ulElement.className = "list";
ulElement.id = "item";
document.getElementById('app').appendChild(ulElement);

nomes.forEach(nome => {
    let textELement = document.createTextNode(nome);
    let liElement = document.createElement("li");
    liElement.appendChild(textELement);
    document.getElementById('item').appendChild(liElement);
});
