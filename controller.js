function AddnewBike(){
    const NewBikeName = document.getElementById('bikename').value
    const NewBikeSize = document.getElementById('bikesize').value
    const NewBikeColor = document.getElementById('bikecolor').value

    model.viewstate.addView.name = NewBikeName;
    model.viewstate.addView.size = NewBikeSize;
    model.viewstate.addView.color = NewBikeColor;

    model.data.bikes.push({name: NewBikeName, size: NewBikeSize, color: NewBikeColor})

    model.viewstate.addView.name = '';
    model.viewstate.addView.size = '';
    model.viewstate.addView.color = '';

    document.getElementById('bikename').value = '';
    document.getElementById('bikesize').value = '';
    document.getElementById('bikecolor').value = '';




    changePage('homeView')
    


}


function changePage(NewPage){
    model.app.currentPage = NewPage;
    updateView()
}
