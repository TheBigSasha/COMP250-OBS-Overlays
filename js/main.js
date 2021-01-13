
  setInterval(function(){
  var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
  request.open('GET', 'http://localhost:8080/currentTopic', true)
    var prev = document.getElementById("current-topic").innerText;

  request.onload = function () {
    document.getElementById("current-topic").innerText=this.responseText;
    if(this.responseText !== prev){
      console.log("response changed")
      var fadeTarget = document.getElementById("current-topic");
      // fadeTarget.style.opacity = 1;
      // var fadeEffect = setInterval(function () {
      //   if (!fadeTarget.style.opacity) {
      //     fadeTarget.style.opacity = 1;
      //   }
      //   if (fadeTarget.style.opacity > 40) {
      //     fadeTarget.style.opacity -= 0.06;
      //   } else {
      //     clearInterval(fadeEffect);
      //   }
      // }, 15000);
    fadeTarget.parentElement.classList.add("fullscreen");
    fadeTarget.parentElement.parentElement.style.top = "50%";
      fadeTarget.parentElement.parentElement.classList.add("fullscreen");
      fadeTarget.parentElement.classList.remove("subtle");


      setTimeout(function() {     fadeTarget.parentElement.classList.remove("fullscreen");
        fadeTarget.parentElement.parentElement.style.top = "100px";

        fadeTarget.parentElement.parentElement.classList.remove("fullscreen");

      }, 1800);

      setTimeout(function() {
        fadeTarget.parentElement.classList.add("subtle");

      }, 10000);

    }
    console.log(this.responseText);
  }

// Send request
  request.send()

}, 300);



function  postCurrentTopic(){
  console.log("Posting topic!")
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:8080/setTopic", true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  var value = document.getElementById("topic").value;
  xhr.send(JSON.stringify({
    value
  }));

}
