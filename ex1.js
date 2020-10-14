//Complete the following functions
//Displays all nodes
//This will include the nodes for the other parts of the html too
const bodyNodes = () => {
    for (i = 0; i < document.body.childNodes.length; i++){
        console.log(document.body.childNodes[i]);
    }
}

bodyNodes();
