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


var H3 = ["https://www.youtube.com/embed/G39wsprmU2M", 	
									"https://www.youtube.com/embed/G39wsprmU2M",
									"https://www.youtube.com/embed/XSKYkgKtGbs",
                "https://www.youtube.com/embed/RMcl1PYqRhY",
              "https://www.youtube.com/embed/MG2ppSxb0_A"];

                  function loadH3() {
                    // get iframe element by id
                    var el = document.getElementById('ifr');
                    // get new url
                    var newUrl = H3[Math.floor(Math.random()*H3.length)];
                    el.src = newUrl;
                  }


var H = ["https://www.youtube.com/embed/W5oawMJaXbU", 	
"https://www.youtube.com/embed/kySGqoU7X-s",
"https://www.youtube.com/embed/jMVhxBB3l0w",
"https://www.youtube.com/embed/GSPUUN4nDGE"];

function loadH() {
  // get iframe element by id
  var el = document.getElementById('ifr');
  // get new url
  var newUrl = H[Math.floor(Math.random()*H.length)];
  el.src = newUrl;
}
