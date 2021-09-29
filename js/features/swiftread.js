var data;
document.querySelector('body').classList.add('dark-mode'); // darkmode as default;


// const SPEED = 300; // Words Per Minutes
var setTimeoutVars = []

// var segmenter = new TinySegmenter()
// var segs = segmenter.segment(data);   Japanese Word segmenter
// var segs = data.split(" ");

const content = document.querySelector('#content');
const mainShow = document.querySelector('.main-show');
const dataInput = document.querySelector('.data-input');
const darkMode = document.querySelector('#darkmode');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');

darkMode.addEventListener("change", (e)=> {
    if (darkMode.checked){
       document.querySelector('body').classList.add('dark-mode');
    } else {
       document.querySelector('body').classList.remove('dark-mode');
    }
});

function start(){
  let speed = document.querySelector('#speed-input').value;
  data = document.querySelector('#dataText').value;
  let language = document.querySelector('#input-lang').value;
  if (language == "ja"){
    segmenter = new TinySegmenter()
    segs = segmenter.segment(data);   //Japanese Word segmenter
  } else {
    segs = data.split(/\r|\n/).join(" ").split(" ");
  }
  document.querySelector('#speed-value').innerHTML = document.querySelector('#speed-input').value;
  startBtn.classList.toggle('hide');
  stopBtn.classList.toggle('hide');
  mainShow.classList.toggle('hide');
  dataInput.classList.toggle('hide');
  
  
  segs.forEach((word, i) => {
     if(word != ''){
        let timeoutID =  setTimeout(function(){                             render(word, content);           
}, speedConvert(speed)*i);
    setTimeoutVars.push(timeoutID);
    return timeoutID; 
     }
  }); 
}

function stop(){
  setTimeoutVars.forEach(x => clearTimeout(x));
  startBtn.classList.toggle('hide');
  stopBtn.classList.toggle('hide');
  mainShow.classList.toggle('hide');
  dataInput.classList.toggle('hide');
}

function render(data, target){
  target.innerHTML = data;
}

function speedConvert(speed){
  return (60/speed) * 1000;
}