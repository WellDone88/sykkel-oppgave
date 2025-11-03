function addBikeView(){
    appDiv.innerHTML = /*HTML*/ `
    <input type="text" placeholder="brand" value="${model.viewstate.addView.name}">
    <br>
    <input type="text" placeholder="size" value="${model.viewstate.addView.size}">
    <br>
    <input type="text" placeholder="color"value="${model.viewstate.addView.color}">
    <br>

    <button onclick="AddnewBike()">Add a new bike</button>


    
    `
}


addBikeView()