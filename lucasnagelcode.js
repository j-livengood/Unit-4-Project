//function changeImage(options) {
//  options.button.addEventListener('click', () => {
//    let i = imageSrc.indexOf(image.getAttribute('src'));
//    let nextImage = imageSrc[options.directionCB(i)];
//    let nextTitle = caption[options.directionCB(i)];
//    
//    if (i === options.border) {
//      nextImage = imageSrc[options.borderChangeover];
//      nextTitle = caption[options.borderChangeover];
//    }
//    
//    image.setAttribute('src', nextImage);
//    title.innerHTML = nextTitle;
//  })
//}
//
//function next() {
//  const changeImageOptions = {
//    button: nextButton,
//    border: imageSrc.length - 1,
//    directionCB: (n) => n + 1,
//    borderChangeover: 0
//  }
//  changeImage(changeImageOptions);
//}
//
//function prev() {
//    const changeImageOptions = {
//    button: prevButton,
//    border: 0,
//    directionCB: (n) => n - 1,
//    borderChangeover: imageSrc.length - 1
//  }
//  changeImage(changeImageOptions);
//}