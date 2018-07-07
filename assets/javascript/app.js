// alert('hi');

var topics = ["rabbit", "hamster", "kitten", "puppy"];
var buttons;
var userInput;


for (var i = 0; i < topics.length; i++) {
	// topics[i]
	buttons = $('<button>').attr('class', 'click');
	buttons.text(topics[i]);
	$('#animalButton').append(buttons);
}

$(document).on('click', '#submitButton', function() {
	event.preventDefault();
	if ($('#animalInput').val() !== "") {
		userInput = $('#animalInput').val();

	    topics.push(userInput);
	    buttons = $('<button>').attr('class', 'click');
		buttons.text(userInput);
		$('#animalButton').append(buttons);
		$('#animalInput').val("");

		console.log(userInput);
		console.log(topics);
	}
});


var buttonTen = document.querySelector('.click');
  	buttonTen.addEventListener('click', function () {
for (var j = 0; j < 10; j++) {

	//loop through the buttons and add the addEventListener to all the button

  	// buttonTen.addEventListener('click', function () {
// $(document).on('click', '.click', function() {
  	event.preventDefault();
    console.log($(this).text());

    var name = $(this).text();
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&limit=10&tag=" + name + "";

  	$.ajax({
  		url: queryURL,
  		method: "GET"
  	}).then(function(response){
  		console.log(response);
  		console.log(response.data.images.original.url);
  		console.log(response.data.images.original_still.url);

  		var img = $('<img>').attr({"still":response.data.images.original_still.url, "anime":response.data.images.original.url, "data-type":"still", "src":response.data.images.original_still.url, "alt":name + " images"});
  		$('#animalImg').prepend(img);

  	});
  // });
}
  });

$(document).on('click', 'img', function(){
	if ($(this).attr("data-type") == "still") {
		$(this).attr("src", $(this).attr("anime"));
		$(this).attr("data-type", "anime");
	}else {
		$(this).attr("src", $(this).attr("still"));
		$(this).attr("data-type", "still");
	}
});