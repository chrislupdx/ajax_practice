// function fetch_ism() { 
// console.log("we're all gonna die")

fetch('http://hipsterjesus.com/api/', {
  mode: 'no-cors' 
})
.then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson)
  });
  .catch(error => console.error(error));

// };
fetch_ism();
