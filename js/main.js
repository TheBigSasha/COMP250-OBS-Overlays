
setInterval(function(){
  var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
  request.open('GET', 'http://localhost:8080/currentTopic', true)

  request.onload = function () {
    document.getElementById("current-topic").innerText=this.responseText;
    console.log(this.responseText);
  }

// Send request
  request.send()

}, 3000);
