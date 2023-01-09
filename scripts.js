const items = ['Latte','Uova','Pane','Carne','Acqua','Fazzoletti'];

console.log('items', items, items.length, typeof items);

const itemsList = document.getElementById('items');
console.log('itemsList', itemsList, typeof itemsList);


let j = 0;

while (j < items.length) {  

    console.log('CICLO WHILE', j, items [j]);

    j++;
    
    let newLi = document.createElement('li');
    newLi.innerHTML = items[j];
    itemsList.append(newLi);

}