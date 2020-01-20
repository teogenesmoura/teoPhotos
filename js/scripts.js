var passage_current_photo = 0;
var passage_length = 7;
var cage_current_photo = 0;
var cage_length = 15;

$(document).ready(function() {
	$(".wrapper").html('<div class="series-title"> Golden Cage </div>');
});

$("#prev").click(function() {
	event.preventDefault();
	if(cage_current_photo > 1) {
		replacePhotoByPrevious("golden-cage");
	}
});

$("#next").click(function() {
	event.preventDefault();
	if(cage_current_photo != cage_length) {
		replacePhotoByNext("golden-cage");
	}
})

var replacePhotoByPrevious = function(photoEssay) {
	cage_current_photo = cage_current_photo - 1;
	$(".wrapper").empty().html('<img src="img/golden-cage/' + cage_current_photo + '.jpg"/>');
}


var replacePhotoByNext = function(photoEssay) {
	cage_current_photo = cage_current_photo + 1;
	$(".wrapper").empty().html('<img src="img/golden-cage/' + cage_current_photo + '.jpg"/>');
}