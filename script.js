const button = $('button');
const envelope = $('.envelope');

function pullOut() {
  return new TimelineMax()
    .to('.flap', 1, {
      rotationX: 180,
      ease: Power1.easeInOut
    }, 'scaleBack')
    .to('.invitation', 1, {
      scale: 0.8,
      ease: Power4.easeInOut,
    }, 'scaleBack')
    .set('.flap', {
      zIndex: 0
    })
    .to('.card', 1, {
      y: '0%',
      scaleY: 1.2,
      ease: Circ.easeInOut,
    })
    .set('.mask', {
      // Change overflow on mask
      overflow: 'visible',
      onComplete: function() {
        // Change Z-Index on Pseudo element
        envelope.toggleClass('is-open');
      }
    })
    .to('.mask', 1.3, {
      'clip-path': 'inset(0 0 0% 0)',
      ease: Circ.easeInOut,
    }, 'moveDown')
    .to('.card', 1.3, {
      y: '100%',
      scaleY: 1,
      ease: Circ.easeInOut,
    }, 'moveDown')
    .to(button, 0.5, {
      opacity: 0,
      ease: Circ.easeInOut,
      onComplete: function() {
        // Remove button from the DOM after animation
        button.remove();
      }
    }, 'moveDown+=0.15');
}

// Attach the pullOut function to the button click event and trigger only once
button.one('click', pullOut);
