const appDiv = document.getElementById('app');

function updateView(){
   const currentPage = model.app.currentPage;

   if(currentPage === 'homeView') {
    homeView();
    }

   else if (currentPage === 'addView') {
    addBikeView();
    }
}






updateView()