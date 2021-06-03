/*3d photo effect with PIXI.js and attach canvas to background. This was born from hours reading docs and tutorials. 
Thanks very much to Pixi.js for existing. The displacement filter is very nice*/

var init3D = function(){
  //setting parameters. Importing images as sprites. Initiating Pixi app. 
  
 const spaceWindow = document.getElementById('spaceWindow'),
 width = window.innerWidth,
 height = window.innerHeight,
 app = new PIXI.Application({width: width, height: height}),
 img = new PIXI.Sprite.from("https://assets.codepen.io/4332848/mountain_2.jpeg");
  
img.width = width;
img.height = height;

const depthMap = new PIXI.Sprite.from("https://assets.codepen.io/4332848/MOUNTAIN_DEPTHMAP_Final.jpeg");
depthMap.width = width;
depthMap.height = height;
const disFilter = new PIXI.filters.DisplacementFilter(depthMap);

  // adding depthmap and image to PIXI displacement filter 
  
app.stage.addChild(depthMap);
app.stage.addChild(img);
app.stage.filters = [disFilter];

  //event handlers
  
  window.onmousemove = function(e) {
    disFilter.scale.x = (width / 2 - e.clientX) / 20;
    disFilter.scale.y = (height / 2 - e.clientY) / 20;
  };
  window.addEventListener("deviceorientation", function(e) {
    disFilter.scale.x = e.beta + 1000;
    disFilter.scale.y = e.gamma + 1000;
  });
  
 //draw canvas as CSS background 
  
  const drawCanvas = function(){
    spaceWindow.style.background = ('background', 'url(' + spaceWindow.appendChild(app.view) + ')');
};
  drawCanvas();
};

init3D();

//Animation sequence for the shooting stars

var initAnime = function(){
  
const xDist = '40vw', //x translate distance
 yDist = '10vw',  //y trans dist
 starColor = '#766cba',
 dMin = 500,//delay min 
 dMax = 2000,//delay max

shower = anime.timeline({
  duration: 5000,
  loop: true
});
shower
  .add({
  targets: '#star0',
  opacity: [0,1],
  delay: anime.random(dMin, dMax),
  translateX: xDist,
  translateY: yDist,
  scale: 0,
  backgroundColor: starColor,
  easing: 'easeInCirc',
})
  .add({
   targets: '#star1',
   opacity: [0, 1],
   delay: anime.random(dMin, dMax),
   translateX: xDist,
   translateY: yDist,
   scale: 0,
   backgroundColor: starColor,
   easing: 'easeInCirc',
})
  .add({
  targets: '#star2',
   opacity: [0, 1],
   delay: anime.random(dMin, dMax),
   translateX: xDist,
   translateY: yDist,
   scale: 0,
   backgroundColor: starColor,
   easing: 'easeInCirc',
})
  .add({
   targets: '#star3',
   opacity: [0, 1],
   delay: anime.random(dMin, dMax),
   translateX: xDist,
   translateY: yDist,
   scale: 0,
   backgroundColor: starColor,
   easing: 'easeInCirc',
})
  .add({
   targets: '#star4',
   opacity: [0, 1],
   delay: anime.random(dMin, dMax),
   translateX: xDist,
   translateY: yDist,
   scale: 0,
   backgroundColor: starColor,
   easing: 'easeInCirc',
})
  .add({  
  targets: '#star5',
   opacity: [0, 1],
   delay: anime.random(dMin, dMax),
   translateX: xDist,
   translateY: yDist,
   scale: 0,
   backgroundColor: starColor,
   easing: 'easeInCirc',
})
};

initAnime();




/* To Do: add orientation controls 
 var handleOrientation = function(e){
   displacementFilter.scale.x = e.gamma;
   displacementFilter.scale.y =  e.beta;
 };
window.addEventListener("deviceorientation", handleOrientation);
 */