var anchors = document.querySelectorAll('a');
var lightBox = document.getElementById('lightBox');
var thumbnails = document.querySelectorAll('#imageList li');
var imgContainer = document.querySelector('.imageContainer');
var search = document.getElementById('mainSearch');
var prevButton = document.querySelector('.prev');
var nextButton = document.querySelector('.next');
var closeButton = document.querySelector('.close');
var title = document.createElement('p');
var img = document.createElement('img');
var imgSrc = [
  "photos/01.jpg",
  "photos/02.jpg",
  "photos/03.jpg",
  "photos/04.jpg",
  "photos/05.jpg",
  "photos/06.jpg",
  "photos/07.jpg",
  "photos/08.jpg",
  "photos/09.jpg",
  "photos/10.jpg",
  "photos/11.jpg",
  "photos/12.jpg"
];
var imgCaption = [
  "I love hay bales. Took this snap on a drive through the countryside past some straw fields.",
  "The lake was so calm today. We had a great view of the snow on the mountains from here.",
  "I hiked to the top of the mountain and got this picture of the canyon and trees below.",
  "It was amazing to see an iceberg up close, it was so cold but didn’t snow today.",
  "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.",
  "Fall is coming, I love when the leaves on the trees start to change color.",
  "I drove past this plantation yesterday, everything is so green!",
  "My summer vacation to the Oregon Coast. I love the sandy dunes!",
  "We enjoyed a quiet stroll down this countryside lane.",
  "Sunset at the coast! The sky turned a lovely shade of orange.",
  "I did a tour of a cave today and the view of the landscape below was breathtaking.",
  "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in."
];

/*
  for unobtrusive javascript --
    1. disable all anchor tags to prevent naviagating away
    2. show search bar if javascript is enabled
*/
for (var i = 0; i < anchors.length; i++){anchors[i].setAttribute('onclick', 'return false');}

search.classList.toggle('inactive');

var iThumb;

// EVENT LISTENERS

for (i = 0; i < thumbnails.length; i++) {
  iThumb = thumbnails[i];
  iThumb.addEventListener('click', openLightBox, false);
}

nextButton.addEventListener('click', next, false);
prevButton.addEventListener('click', prev, false);
closeButton.addEventListener('click', close, false);

document.addEventListener('keyup', function(e) {
  var keyName = e.key;
  switch (keyName) {
    case 'Escape':
      close();
      break;
    case 'ArrowRight':
      next();
      break;
    case 'ArrowLeft':
      prev();
      break;
    default:
      return;
  }
  e.preventDefault();
}, true);



// FUNCTIONS

function openLightBox(e) {
  var src = e.target.getAttribute('src'); // capture src attr of thumbnail
  var newSrc = src.replace('thumbnails/', ''); // change src attr to full size image
  var imageTitle = e.target.getAttribute('title'); // capture title attr

  lightBox.classList.toggle('inactive'); // show light box
  title.innerHTML = imageTitle; // set title text
  imgContainer.appendChild(img).setAttribute('src', newSrc); // append image
  imgContainer.appendChild(title).setAttribute('class', 'title'); // append title with css class
}

function close() { // hide light box
  lightBox.classList.toggle('inactive');
}

function next() {
  var i = imgSrc.indexOf(img.getAttribute('src')); // find index of current image
  var nextImage = imgSrc[i + 1]; // capture next src in list
  var nextTitle = imgCaption[i + 1]; // capture next caption in list
  if (i === imgSrc.length - 1) { // reset to beginning
    nextImage = imgSrc[0];
    nextTitle = imgCaption[0];
  }
  img.setAttribute('src', nextImage); // set image src to next
  title.innerHTML = nextTitle; // set image caption to next
}

function prev() {
  var i = imgSrc.indexOf(img.getAttribute('src'));
  var prevImage = imgSrc[i - 1];
  var prevTitle = imgCaption[i - 1];
  if (i === 0) {
    prevImage = imgSrc[11];
    prevTitle = imgCaption[11];
  }
  img.setAttribute('src', prevImage);
  title.innerHTML = prevTitle;
}


