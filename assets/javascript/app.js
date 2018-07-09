// alert('hi');

var topics = ["minions", "moana", "incredibles", "frozen", "zootopia", "inside out", "finding dory", "finding nemo", "big hero 6", "tangled", "monsters, inc.", "lion king", "mulan", "toy story", "lilo & stitch", "tarzan", "aladdin", "little mermaid", "cinderella", "disney peter pan", "pocahontas", "beauty and the beast", "sleeping beauty", "pinocchio", "bambi", "disney snow white"];
var buttons;
var userInput;

// create array buttons
	for (var i = 0; i < topics.length; i++) {
		// topics[i]
		buttons = $('<button>').attr('class', 'click');
		buttons.text(topics[i]);
		$('#disneyButton').append(buttons);
	}

// add new buttons and push to array
	$(document).on('click', '#submitButton', function() {
		event.preventDefault();
		if ($('#disneyInput').val() !== "") {
			userInput = $('#disneyInput').val();

		    topics.push(userInput);
		    buttons = $('<button>').attr('class', 'click');
			buttons.text(userInput);
			$('#disneyButton').append(buttons);
			$('#disneyInput').val("");

			console.log(userInput);
			console.log(topics);
		}
	});

// clicks = 10 times (10 pictures at a time)
	for (var j = 0; j < 10; j++) {

// get giphys and display them
	$(document).on('click', '.click', function() {

	  	event.preventDefault();
	    console.log($(this).text());
	    $('#disneyImg').text("");

	    var name = $(this).text();
	    // var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&limit=10&tag=" + name + "";

	    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg-13&tag=" + name + "";

	    // var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=dc6zaTOxFJmzC&rating=pg-13&limit=100&offset=10";

	    // with rating
	     // var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + name + "&limit=100&api_key=dc6zaTOxFJmzC";



	  	$.ajax({
	  		url: queryURL,
	  		method: "GET"
	  	}).then(function(response){
	  		console.log(response);

// for (var k = 0; k < 10; k++) {
// 	  		console.log(response.data[k].images.original.url);
// 	  		console.log(response.data[k].images.original_still.url);

// 	  		var img = $('<img>').attr({"still":response.data[k].images.original_still.url, "anime":response.data[k].images.original.url, "data-type":"still", "src":response.data[k].images.original_still.url, "alt":name + " images"});
// 	  		$('#disneyImg').prepend(img);
// }

			console.log(response.data.images.original.url);
	  		console.log(response.data.images.original_still.url);

	  		var img = $('<img>').attr({"still":response.data.images.original_still.url, "anime":response.data.images.original.url, "data-type":"still", "src":response.data.images.original_still.url, "alt":name + " images"});
	  		$('#disneyImg').prepend(img);

	  	});

	  });
	}

// anime & still giphys
	$(document).on('click', 'img', function(){
		if ($(this).attr("data-type") == "still") {
			$(this).attr("src", $(this).attr("anime"));
			$(this).attr("data-type", "anime");
		}else {
			$(this).attr("src", $(this).attr("still"));
			$(this).attr("data-type", "still");
		}
	});