var nomes = ["Diego", "Gabriel", "Lucas"];

let liElement, ulElement = document.createElement("ul");
ulElement.className = "list";
ulElement.id = "item";
document.getElementById('app').appendChild(ulElement);

nomes.forEach(nome => {
    let textELement = document.createTextNode(nome);
    liElement = document.createElement("li");
    liElement.appendChild(textELement);
    document.getElementById('item').appendChild(liElement);
});


adicionar = () => {
    liElement = document.createElement("li");
    liElement.appendChild(document.createTextNode(
        document.querySelector('input').value)
    );
    document.getElementById('item').appendChild(liElement);
    document.querySelector('input').value = '';
};


