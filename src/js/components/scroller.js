import ScrollMagic from 'scrollmagic';

const initScroller = () => {

  const animateElem = document.getElementById('scroller')


  var controller = new ScrollMagic.Controller({
    // vertical: false
  });

  // create a scene
  new ScrollMagic.Scene({
    duration: 100	// the scene should last for a scroll distance of 100px
  })
    .on("progress", function (e) {
      // trigger animation by changing inline style.
      animateElem.style.transform = "translate3d(-"+e.progress * 100 +"%, 0, 0)";
    })
    // .on("leave", function () {
    //   // trigger animation by changing inline style.
    //   animateElem.style.transform = "translateX(-100%)";
    // })
    .setPin("#scroller") // pins the element for the the scene's duration
    .addTo(controller);

}

export default initScroller;
