function AddnewBike(NewBikeName, NewBikeSize, NewBikeColor){
    model.viewstate.addView.name = NewBikeName;
    model.viewstate.addView.size = NewBikeSize;
    model.viewstate.addView.color = NewBikeColor;

    model.viewstate.push({NewBikeName, NewBikeSize, NewBikeColor})

}
