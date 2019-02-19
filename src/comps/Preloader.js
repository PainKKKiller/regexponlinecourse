
// progressbar http://www.w3schools.com/howto/howto_js_progressbar.asp
/* eslint-disable */


function Preloader() {

}

Preloader.prototype.show = function (text) {
  let preloader = document.getElementById('preloader');
  preloader.style.display = 'block';
  let left = (window.innerWidth - 100) / 2;
  let top = (window.innerHeight - 100) / 2;
  let spinner = document.getElementById('preloader-spinner');
  spinner.style.display = 'block';
  // preloader.style.top = top + 'px';
  // preloader.style.left = left + 'px';
  spinner.style.top = `${top}px`;
  spinner.style.left = `${left}px`;
  if (text) {
    let textHolder = document.getElementById('preloader-text');
    textHolder.innerHTML = text;
  }
};

Preloader.prototype.progressHandler = function (percent) {
  let preloader = document.getElementById('progress');
  // грязный костыль для PIXI.loader
  let realPercent = Math.floor(percent * 0.8);
  if (realPercent >= 100) { realPercent = 99; }
  preloader.innerHTML = `${realPercent }%`;
};

Preloader.prototype.remove = function () {
  let preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
  let spinner = document.getElementById('preloader-spinner');
  document.getElementById('preloader-text').innerHTML = '';
  spinner.style.display = 'none';
};

module.exports = Preloader;
