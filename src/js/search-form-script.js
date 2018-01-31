

//Search Click Function
/*
Gives a smooth animation so that the search bar expands and 
the menu disappears

*/

//(function(){

  var initialSearch = 0;
  var primarymenu = document.getElementById('menu-main-menu');
  //Cleary forced this to be second class
  var searchBarClicked = document.getElementsByClassName('header-widgetised-area')[1];


    function resizeSearchUnfocus(){
        searchBarClicked.getElementsByTagName("input")[0].blur();
        onFocus();
    }
    //force resize check
    document.getElementsByTagName("BODY")[0].onresize = function() {resizeSearchUnfocus()};



  function onFocus(){
     
      if(initialSearch != 0){

        document.getElementsByClassName('search-field')[0].blur();
        
        if(primarymenu.classList.contains("makeOpacitynone")){
            primarymenu.classList.remove("makeOpacitynone");
        }

        if(searchBarClicked.classList.contains("actionSearch") ){
            searchBarClicked.classList.remove("actionSearch");
            initialSearch = 0;
        }

      }
  }
  window.onfocus = onFocus;

  var mq = window.matchMedia( "(max-width: 768px)" );


  function searchClickToggleCSS(){
      
    /*------------
    If no initial search - make things invisible
    If yes make things visible.
    --------------*/
    if(mq.matches){
        console.log('inital search = ' + initialSearch);

        return;
    }
    if(initialSearch == 0){
        initialSearch = 1;
        if( !primarymenu.classList.contains("makeOpacitynone")  ){
            primarymenu.className += " makeOpacitynone";
            searchBarClicked.className += " actionSearch";
        }

    } else {
        initialSearch = 0;
        if(primarymenu.classList.contains("makeOpacitynone") ){
            primarymenu.classList.remove("makeOpacitynone");
            searchBarClicked.classList.remove("actionSearch");
        }
    }
  }

  function reEstablishSearchForm(){
      var searchFieldClass = document.getElementsByClassName("search-field");
      searchFieldClass[0].style.transition =  "width 400ms ease, background 300ms ease";
  }

  /*
  Fixed the hiccup where the menu would reappear causing
  the search bar to jump around. 
  Simply removeds the tranisiton css then reapplys it.

  */
  //I'm using "click" but it works with any event
  document.addEventListener('click', function(event) {
    var isClickInside = searchBarClicked.contains(event.target);
    var searchFieldClass = document.getElementsByClassName("search-field");
    if (!isClickInside) {
      initialSearch = 0;
      if(primarymenu.classList.contains("makeOpacitynone") ){
          searchFieldClass[0].style.transition =  "width 0ms ease, background 0ms ease";
          
          primarymenu.classList.remove("makeOpacitynone");
          searchBarClicked.classList.remove("actionSearch");
          setTimeout(reEstablishSearchForm, 1000);

      }
      //the click was outside the specifiedElement, do something
    }
  });

//})();