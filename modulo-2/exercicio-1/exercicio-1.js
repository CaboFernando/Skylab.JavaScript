var btnElement = document.querySelector('button.btn');
let count = 1;

btnElement.onclick = function() {
  let boxElement = document.createElement("div");
  boxElement.className = "box";
  boxElement.id = "box-" + count;
  boxElement.style.width = '100px';
  boxElement.style.height = '100px';
  boxElement.style.marginTop = '10px';
  boxElement.style.backgroundColor = '#f00';
  
  document.getElementById('app').appendChild(boxElement);
  count++;
}