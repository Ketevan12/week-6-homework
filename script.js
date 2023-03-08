console.log('Remove this console log and get started!')


// all available urls
var Hasan = ["https://www.youtube.com/embed/qeI_wN9KbnE", 	
            "https://www.youtube.com/embed/_d1aGJZ0yIM",
						"https://www.youtube.com/embed/9RFWYobuPWQ",
            "https://www.youtube.com/embed/JPkb3t2AX5I",
            "https://www.youtube.com/embed/nCwtDtnBPSM"];


function loadHasan() {
  // get iframe element by id
  var el = document.getElementById('ifr');
  // get new url
  var newUrl = Hasan[Math.floor(Math.random()*Hasan.length)];
  el.src = newUrl;
}


var loadH3 = ["https://youtu.be/embed/UKWp708x-Fk", 	
									"https://www.youtube.com/embed/T5TLgg4vDUw",
									"https://www.youtube.com/embed/mllXxyHTzfg"];

                  function loadH3() {
                    // get iframe element by id
                    var el = document.getElementById('ifr');
                    // get new url
                    var newUrl = H3[Math.floor(Math.random()*H3.length)];
                    el.src = newUrl;
                  }