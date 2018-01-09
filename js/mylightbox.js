const lightBox = document.getElementById('lightBox');
const thumbnails = document.querySelectorAll('#imageList li');
const imageContainer = document.querySelector('.imageContainer')
const search = document.getElementById('mainSearch');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const closeButton = document.querySelector('.close');
const title = document.createElement('p');
const image = document.createElement('img');
const imageSrc = [
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
]
const caption = [
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
]
let src;
let newSrc;
let imageTitle;

//
//function next() {
//  nextButton.addEventListener('click', () => {
//    let i = imageSrc.indexOf(image.getAttribute('src'));
//    let nextImage = imageSrc[i + 1];
//    
//    if (i === imageSrc.length - 1) {
//      nextImage = imageSrc[0];
//    }
//    
//    image.setAttribute('src', nextImage);
//    console.log(i);
//  })
//}
//
//function prev() {
//  prevButton.addEventListener('click', () => {
//    let i = imageSrc.indexOf(image.getAttribute('src'));
//    let prevImage = imageSrc[i - 1];
//    
//    if (i === 0) {
//      prevImage = imageSrc[11];
//    }
//    
//    image.setAttribute('src', prevImage);
//    console.log(i);
//  })
//}

function changeImage(options) {
  options.button.addEventListener('click', () => {
    let i = imageSrc.indexOf(image.getAttribute('src'));
    let nextImage = imageSrc[options.directionCB(i)];
    let nextTitle = caption[options.directionCB(i)];
    
    if (i === options.border) {
      nextImage = imageSrc[options.borderChangeover];
      nextTitle = caption[options.borderChangeover];
    }
    
    image.setAttribute('src', nextImage);
    title.innerHTML = nextTitle;
    console.log(nextTitle);
  })
}

function next() {
  const changeImageOptions = {
    button: nextButton,
    border: imageSrc.length - 1,
    directionCB: (n) => n + 1,
    borderChangeover: 0
  }
  changeImage(changeImageOptions);
}

function prev() {
    const changeImageOptions = {
    button: prevButton,
    border: 0,
    directionCB: (n) => n - 1,
    borderChangeover: imageSrc.length - 1
  }
  changeImage(changeImageOptions);
}

function close() {
  closeButton.addEventListener('click', () => {
    lightBox.classList.toggle('inactive');
  })
  window.addEventListener('keyup', (e) => {
    if (e.keyCode === 27) {
      lightBox.classList.toggle('inactive');
    }
  })
}

for (i = 0; i < thumbnails.length; i++) {
  let iThumb = thumbnails[i];
  thumbnails[i].addEventListener('click', (e) => {
    index = e.target.parentElement;
    lightBox.classList.toggle('inactive'); // show light box
    src = e.target.getAttribute('src'); // capture src attr of thumbnail
    newSrc = src.replace('thumbnails/', '') // change src attr to full size image
    imageTitle = iThumb.children[0].getAttribute('title'); // capture title attr
    title.innerHTML = imageTitle; // set title text
    imageContainer.appendChild(image).setAttribute('src', newSrc); // append image
    image.classList.toggle('lightBoxImage');
    imageContainer.appendChild(title).setAttribute('class', 'title'); // append title with css class
  });
}

window.addEventListener('keyup', (e) => {
  console.log(e.keyCode);
})

next();
prev();
close();