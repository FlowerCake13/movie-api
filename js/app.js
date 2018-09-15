var input = document.getElementById('input')
var sub = document.getElementById('submit');
var title = document.getElementById('title')
var	poster = document.getElementById('poster')

var movie = "";
var movieArr = [];
var completeMovie = "";

document.addEventListener('keydown', function(e){
	//console.log(e)
	if (e.keyCode == 13 && input.value != ""){
		submit()
	}
})

sub.addEventListener('click', submit);


function submit(){
	completeMovie = "";
	movie = input.value
	//console.log(movie)
	input.value = ""

	movieArr = movie.split(' ');
	//console.log(movieArr)
	for(var i = 0; i < movieArr.length; i++){
		//console.log(movieArr[i])
		//console.log(movieArr[i].toLowerCase())

		if (i < movieArr.length - 1){
			completeMovie += movieArr[i].toLowerCase() + '+'
		}else{
			completeMovie += movieArr[i].toLowerCase();
		}
	}
	console.log(completeMovie)

	var xhr = new XMLHttpRequest();
	xhr.open('GET', "http://www.omdbapi.com/?apikey=bcb06cbe&t=" + completeMovie);
	xhr.send();
	xhr.addEventListener("readystatechange", processReq, false);


	function processReq(e){
		console.log(JSON.parse(xhr.responseText))
		//console.log(JSON.parse(xhr.responseText).Title)
		title.innerHTML = JSON.parse(xhr.responseText).Title;
		poster.src = JSON.parse(xhr.responseText).Poster;
	}
}
//http://www.omdbapi.com/