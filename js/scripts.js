const dir = '../img/golden-cage';
var passage_current_photo = 0;
var passage_length = 7;
var cage_current_photo = 0;
var cage_length = 14;

$(document).ready(function() {
	initialScreen();
});

var initialScreen = function() {
	$(".navigation").empty();
	setPhotoEssayTitles();
}

var setPhotoEssayTitles = function() {
	$(".wrapper").empty().html('<div class="series-title fade"> Golden Cage </div>');
	setClickEventsOnTitles();
}

var setClickEventsOnTitles = function() {
	$(".series-title").click(function() {
		event.preventDefault();
		replacePhotoByNext("golden-cage");
		setNavigationMenu();
	});	
}

var setNavigationMenu = function() {
	$(".navigation").html('<a href="#" id="prev"> Previous </a> <a href="#" id="next"> Next </a>');
	setNavigationEvents();
}

var setNavigationEvents = function() {
	$("#next").click(function() {
		event.preventDefault();
		if(cage_current_photo != cage_length) {
			replacePhotoByNext("golden-cage");
		} else {
			cage_current_photo = 0;
			initialScreen();
		}
	});

	$("#prev").click(function() {
		event.preventDefault();
		if(cage_current_photo > 1) {
			replacePhotoByPrevious("golden-cage");
		} else {
			initialScreen();
		}
	});	
}


var replacePhotoByPrevious = function(photoEssay) {
	cage_current_photo = cage_current_photo - 1;
	$(".wrapper").empty().html('<img src="img/golden-cage/' + cage_current_photo + '.jpg"/>');
}


var replacePhotoByNext = function(photoEssay) {
	cage_current_photo = cage_current_photo + 1;
	$(".wrapper").empty().html('<img src="img/golden-cage/' + cage_current_photo + '.jpg"/>');
}