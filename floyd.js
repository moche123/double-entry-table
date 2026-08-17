
/*
        USER SECTION
******************************
ENTER THE LETTERS YOU WANT TO WORK WITH
Then simply enter one more destination
This is made up of a route
*********************************
*/
//A = 0, B=1, C=2 ......
const letters = ['A','B','C','D','E','F'];
const destinations = [{from:0,to:1,dist:2},//From A to B with a distance of 2
    {from:0,to:4,dist:4},//From A to E with a distance of 4
    {from:1,to:2,dist:3},
    {from:2,to:3,dist:5},
    {from:2,to:4,dist:1},
    {from:3,to:0,dist:8},
    {from:4,to:3,dist:7},
    {from:5,to:0,dist:4}];



/*

******************************
*********************************
*/



//CODE


const headTable = document.getElementById('headTable');
const bodyTable = document.getElementById('bodyTable');
const info = document.getElementById('info');
class Node{
    constructor(letter){
        this.letter = letter;
        this.relations = new Array();
    }
    addDestination(targetNode,distance){
        this.relations.push({targetNode,distance});
    }
}
let Table = null;
var Nodes = new Array();





function addNode(index){
    Nodes[index] = new Node(letters[index]);
}
function addDestination(from,to,distance){
    Nodes[from].addDestination(Nodes[to],distance);
}

//Add all the nodes
for(let i=0;i<letters.length;i++){
    addNode(i);
}

for(let i=0;i<destinations.length;i++){
    addDestination(destinations[i].from,destinations[i].to,destinations[i].dist);
}
//ROW


//FILL THE COLUMN
function build(){
    Table = new Array(Nodes.length+1);
    for(let i=0;i<=Nodes.length;i++){
    Table[i] = new Array(Nodes.length+1);
    }
    Table[0][0] = '$';
    for(let i=1;i<Table.length;i++){
        Table[0][i] = Nodes[i-1].letter;
    }
    for(let i=1;i<Table.length;i++){
        Table[i][0] = Nodes[i-1].letter;
    }
    for(let i=0;i<Nodes.length;i++){
        for(let j=0;j<Nodes.length;j++){
            for(let k=0;k<Nodes[j].relations.length;k++){
                if(Nodes[i].letter == Nodes[j].relations[k].targetNode.letter){
                    console.log(Nodes[i].letter," is destination of ",Nodes[j].letter);
                    let rowPosition;
                    let colPosition;
                    for(let l=1;l<Table.length;l++){
                        if(Nodes[i].letter == Table[0][l]){
                            colPosition = l;
                        }
                        if(Nodes[j].letter == Table[l][0]){
                            rowPosition = l;
                        }
                    }
                    info.innerHTML += `${Nodes[i].letter} is destination of ${Nodes[j].letter} with distance ${Nodes[j].relations[k].distance}<br>`;

                    console.log(" value ",Nodes[j].relations[k].distance," at [",rowPosition,"][",colPosition,"]");
                    Table[rowPosition][colPosition] = Nodes[j].relations[k].distance;
                }
            }
        }
    }
}


function showTable(){
    for(let i=0;i<Table.length;i++){
        headTable.innerHTML += `
            <th scope="col">${Table[0][i]}</th>
        `;
    }
    function text(row){
        let text = "";
        for(let i=1;i<Table.length;i++){
            if(Table[row][i] != undefined){
                text += `<td class="bg-warning mr-0">${Table[row][i]}</td>`;

            }
            else{
                text += `<td class="bg-secondary mr-0">*</td>`;
            }

        }

        return text;

    }
    for(let i=1;i<Table.length;i++){
        bodyTable.innerHTML += `
            <tr>
                <th scope="row">${Table[i][0]}</th>
                ${text(i)}
            </tr>
        `;
    }
}
build();
showTable();


