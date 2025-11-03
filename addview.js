function addBikeView(){
    appDiv.innerHTML = /*HTML*/ `
    <input type="text" id="bikename" placeholder="brand" value="${model.viewstate.addView.name}">
    <br>
    <input type="text" id="bikesize"placeholder="size" value="${model.viewstate.addView.size}">
    <br>
    <input type="text" id="bikecolor"placeholder="color"value="${model.viewstate.addView.color}">
    <br>

    <button onclick="AddnewBike()">Add a new bike</button>
    <br>
    <button onclick="changePage('homeView')">Til homeview</button>


    
    `
}


addBikeView()