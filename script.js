function fetch_ism() {
	fetch('https://dog.ceo/api/breeds/image/random',{
		// mode : 'no-cors',
		// dataType: 'json',
	})
	.then(function(response) {
	   return response.json()
	 })
	.then(function(response) {
	   console.log(response)
	 })
	.catch(error => console.error(error));
}

fetch_ism();