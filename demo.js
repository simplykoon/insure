var ham = document.getElementsByClassName("ham");

function hide(){
					var hideaway = document.getElementsByClassName("hideaway");
			var nav = document.querySelector("nav");
			
			hideaway[0].style.display = "none";
   nav.style.display = "block";
    	}
ham[0].addEventListener("click", hide, false);

var close = document.getElementsByClassName("close");

function show(){
					var hideaway = document.getElementsByClassName("hideaway");
			var nav = document.querySelector("nav");		
					nav.style.display = "none";
				hideaway[0].style.display = "block";
				}
close[0].addEventListener("click", show, false);

