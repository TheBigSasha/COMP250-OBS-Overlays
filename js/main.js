
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
