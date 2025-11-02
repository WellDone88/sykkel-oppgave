function homeView(){
    let HTML = /*HTML*/ `
    <h3>Sykkel oversikt</h3>
    <ul>
    `;

    for(let i = 0; i < model.data.bikes.length; i++){
        const bike = model.data.bikes[i];
        HTML += /*HTML*/ `
        <li>
        <p>Brand: ${bike.name}</p>
        <p>Size: ${bike.size}</p>
        <p>Color: ${bike.color}</p>
        </li>`
    }

    HTML += /*HTML*/`
        </ul>
    `;

    appDiv.innerHTML = HTML;
}






homeView()