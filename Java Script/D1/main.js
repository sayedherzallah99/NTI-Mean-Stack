//console.log("Salek")
//document.getElementById("salek")
//window.alert("Sayed")
//document.write("Salek")
function send() {
  var name  = document.getElementById("name").value;
  var price = document.getElementById("price").value;
  var desc  = document.getElementById("desc").value;

  var result = "Name: " + name + " | Price: " + price + " | Description: " + desc;

  alert(result);
  console.log(result);

  document.getElementById("output").innerText = result;
}
