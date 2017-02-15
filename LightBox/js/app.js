//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>")

//Add image to overlay
$overlay.append($image);
//Add caption to overlay
$overlay.append($caption);
//Add overlay
$("body").append($overlay);
$overlay.hide();
//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  //Show the overlay.
  $overlay.show();
  
  //Get child's alt attribute and set caption
  var cap = $(this).children("img").attr("alt");
  $caption.text(cap);
});

//When overlay is clicked
$overlay.click(function() {
	$overlay.hide();
});
  //Hide the overlay

