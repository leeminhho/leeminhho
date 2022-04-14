	let $=document.querySelector.bind(document);
	let $$=document.querySelectorAll.bind(document);

let canvas=$('canvas');
if(localStorage.cup1==undefined){
	localStorage.cup1=0;
localStorage.cup2=0;
localStorage.cup3=0;
}

console.log(localStorage)

let ctx=canvas.getContext('2d');
let a=[];
let play=$('.play');
let number=$('.number');
let point=0;
let menu_dead_span=$$('.menu_dead span');
let menu_dead=$('.menu_dead');
canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;
let background=new Image()
let nhan_vat=new Image();
let bird_up=new Image();
let bird_up_lite=new Image();
let bird_down=new Image();
let ong_tren=new Image();
let ong_duoi=new Image();
let bird_down_lite=new Image();
background.src="assets/img/nenchinh.png"
nhan_vat.src="assets/img/bird.png"
ong_tren.src="assets/img/ongtren.png"
ong_duoi.src="assets/img/ongduoi.png"

console.log(canvas.height)
function check_point(){
	let flag=1;
for(let i=1;i<=3;i++){
if(flag&&point>parseInt(localStorage[`cup${i}`])){
menu_dead_span[i-1].innerText=point;
localStorage[`cup${i}`]=point;
flag=0;
}
else{
menu_dead_span[i-1].innerText=localStorage[`cup${i}`];
	 
}
}
}
play.onclick=function(e){

	stop=0;
this.style.animationName='close';
}
window.onresize=()=>{
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;

}
let start_distance=canvas.width;
let start_distance2=0;
let count_a=0;
let speed=1;
ctx.fillStyle='white';
  	ctx.fillRect(0,0,canvas.width,canvas.height);

class cot{
	constructor(){
		this.color=`hsl(${Math.floor(Math.random()*(360-0+1))},100%,50%)`;
		this.magnitude=70/2;//
this.height_top=Math.floor(Math.random()*(canvas.height/2-100+1))+100-this.magnitude;

this.height_bottom=canvas.height-this.height_top-this.magnitude*1.5;
  this.y_top=0;
  this.y_bottom=Math.floor(this.height_top+Math.random()*(this.magnitude*8 -this.magnitude*4+1)+this.magnitude*4),
	this.size=70;
	 this.spacing=170;
this.x=this.size+count_a*this.spacing;

	}
  draw(){
  	ctx.beginPath();
  	
  	ctx.drawImage(ong_tren,start_distance+this.x,this.y_top,this.size,this.height_top);
  //bottom
  ctx.beginPath();
  	
  	ctx.drawImage(ong_duoi,start_distance+this.x,this.y_bottom,this.size,this.height_bottom);
  
  }
  clear(){
  	ctx.clearRect(start_distance2+this.x-1,this.y_top,this.size-2,this.height_top);
  	ctx.clearRect(start_distance2+this.x-1,this.y_bottom,this.size-2,this.height_bottom);

  }
}
function init(){
	for(let i=0;i<15;i++){

		a.push(new cot);
   a[i].draw();
		count_a++;

	}
}

init();
let stop=0;
setTimeout(()=>stop=1,30);
function animation(){
	if(stop!=1){

function add(){
	a.push(new cot);
a[a.length-1].draw();
	count_a++;
}
function ve(){
ctx.drawImage(background,0,0,canvas.width,canvas.height+3);
for(let i in a){
	a[i].clear();
	a[i].draw();
}

if(start_distance+a[0].x<=-a[0].spacing){
   a[0].clear();
a.splice(0,1);
add();
	}
}

if(stop){}
	else{
start_distance2=start_distance-0;
start_distance-=speed*2 ;
ve();
	}

	}
window.requestAnimationFrame(animation);

}
animation();



let bird={
	x:canvas.width/5,
	y:canvas.height/2,
	max_up:50,
	up:-1,
	down:1,
	fast_up:2,
	rotate_up:1
}
function draw_bird_first(){
	ctx.drawImage(nhan_vat,bird.x,bird.y);
}
function draw_bird_up(){

	ctx.drawImage(nhan_vat,bird.x,bird.y-bird.fast_up);
bird.down=1;
bird.up=bird.up-5-bird.fast_up;
bird.y=bird.y-5;
bird.fast_up-=0.3;

	if((-bird.up>bird.max_up)||(bird.y<=0)){
	
		flag=2;
	bird.up=-1;
	bird.fast_up=2;
	bird.max_up=50
 }

}
// 1s sau thi down
function draw_bird_down(){
	ctx.drawImage(nhan_vat,bird.x,bird.y);

bird.y+=bird.down;
bird.down+=0.17;
if(bird.down>=5){

	bird.max_up=80;
	bird.fast_up=3;
}
if(bird.y+20>=canvas.height){
		handel_dead()
	}
}

function handel_dead(){
	     play.style.animationName='start';
             stop=1;
menu_dead.style.animationName='menu_st';
check_point();
play.onclick=function(e){
if(stop==1){
location.reload(true)

}	
this.style.animationName='close';
menu_dead.style.animationName='';

}
}

let flag =0;
function check_false(){

	for(let i=0;i<=3;i++){
		if((bird.x+38>=start_distance+a[i].x)&&((bird.x+38-(a[i].x+a[i].size+start_distance))<40 )){		    
	

		
		 if((bird.y+5<=a[i].height_top)||(bird.y+21>=a[i].y_bottom)){
       handel_dead();
			}
			 else if((bird.x)>=(start_distance+a[i].x+a[i].size)){
			number.innerText=++point;
			}
		}
	}
}
let co=0;
function animation_bird(){
if(flag==0&&co<=7){
draw_bird_first()
co++;
	}

else if(stop!=1){
if(flag==1){
	draw_bird_up()
}
else if(flag==2){

draw_bird_down()
}  
check_false();

}



requestAnimationFrame(animation_bird);


}
	animation_bird();

document.onkeydown=function(e){
if(e.code==='Space'){

	flag =1;
}
}
document.onclick=function(e){
e.preventDefault()
	flag=1;
}
