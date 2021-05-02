// choose a config file based on the window size
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var json_path = width > 768 ? 'particlesconfig.json' : 'particlesconfig_mobile.json';
console.log('callback - particles.js using config ' + json_path);
particlesJS.load('particles-js', json_path, function() {
  console.log('callback - particles.js config loaded');
});