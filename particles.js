particlesJS('particles-js', {
  particles: {
    number: {

      value: 50,
      density: {
        enable: true,
        value_area: 1000,
       value: 80,
      density: {
        enable: true,
        value_area: 800

      }
    },
    color: {
      value: '#ffffff'
    },
    shape: {
      type: 'circle'
    },
    opacity: {

      value: 0.3,
      random: false
    },
    size: {
      value: 2,

      value: 0.5,
      random: false
    },
    size: {
      value: 3,

      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',

      opacity: 0.2,

      opacity: 0.4,

      width: 1
    },
    move: {
      enable: true,

      speed: 2,

      speed: 6,

      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,

        mode: 'grab'
      },
      onclick: {
        enable: false,
        mode: 'repulse'
      },
      onclick: {
        enable: true,
        mode: 'push'

      },
      resize: true
    }
  },
  retina_detect: true
});