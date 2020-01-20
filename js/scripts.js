var passage_current_photo = 0;
var passage_length = 7;

$(document).ready(function() {
	$(".wrapper").html('<img src="img/passage/1.jpg"/>');
});

$("#prev").click(function() {
	event.preventDefault();
	if(passage_current_photo > 1) {
		replacePhotoByPrevious("passage");
	}
});

$("#next").click(function() {
	event.preventDefault();
	if(passage_current_photo != passage_length) {
		replacePhotoByNext("passage");
	}
})

var replacePhotoByPrevious = function(photoEssay) {
	passage_current_photo = passage_current_photo - 1;
	$(".wrapper").empty().html('<img src="img/passage/' + passage_current_photo + '.jpg"/>');
}


var replacePhotoByNext = function(photoEssay) {
	passage_current_photo = passage_current_photo + 1;
	$(".wrapper").empty().html('<img src="img/passage/' + passage_current_photo + '.jpg"/>');
}