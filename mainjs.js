let select=document.querySelector.bind(document);
let canvas=select('.main_canvas');
let context=canvas.getContext('2d');
let h1=select('h1');
let pointer={
	x:50,
	y:70
}
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
window.onresize=function(){
	console.log(window.innerWidth)
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

}
canvas.onmousemove=(e)=>{
	pointer.x=e.offsetX;
	pointer.y=e.offsetY;
	for(let i=0;i<1;i++){
		arr.push(new an);
	}
}
// function draw

class an{
	constructor(){
		//init
  this.x=pointer.x;
  this.y=pointer.y;
  this.range_color=1;
this.color=``;

  this.change=Math.random()*3 - 1.5;
  this.change_2=Math.random()*3 - 1.5;
  this.size=Math.random()*(20 - 5 + 1) + 5;

	}
   update(){
this.range_color+=3;
if(this.size>=0.3){
	this.size-=0.1;
}
   	if(this.x>=canvas.width||this.x<=0){
   		this.change= -(this.change);
   	
   	}

   	
   	this.x+=this.change;

   	
	if(this.y>=canvas.height||this.y<=0){
		this.change_2= -(this.change_2);
   	}

  this.y+=this.change_2;

   	
   }
	draw(){
this.color=`hsl(${this.range_color},100%,70%)`;
context.beginPath();
context.fillStyle=this.color;
context.lineWidth=this.size/8;
context.arc(this.x,this.y,this.size,0,2*Math.PI);
context.fill();

	}
}
let arr=[];

function load_change(){
for(let i in arr){
	arr[i].update();
arr[i].draw();



for(let z=parseInt(i)+1;z<arr.length-1;z++){
		let cgvX= arr[i].x -arr[z].x;
	let cgvY=arr[i].y-arr[z].y;
	let distance=Math.sqrt(cgvX*cgvX+cgvY*cgvY);
if(distance<100){
	context.beginPath();
	context.moveTo(arr[z].x,arr[z].y);
	context.lineTo(arr[i].x,arr[i].y);
	context.strokeStyle=arr[z].color;
context.stroke();
}
}
if(arr[i].size<0.3){
arr.splice(i,1);
}
}
}
load_change();


function animation(){
	// context.fillStyle='rgba(0,0,0,0.02)';

	// context.fillRect(0,0,1200,600);
	context.clearRect(0,0,canvas.offsetHeight,canvas.offsetHeight);

	load_change();

requestAnimationFrame(animation);
}

animation();




// line61:trỏ đến phần tử (sau khi vẽ xong và mới nhất)
// + check các phần tử mới hơn vừa thêm vào mảng
//  tại thời điểm hiện tại
// line62:  nếu 2 phần tử  có
//  x -x2 mà khoảng cách không quá giới hạn thì nối
//  line63:  nếu 2 phần tử  có
//  y -y2 mà khoảng cách không quá giới hạn thì nối
// và bởi vì cả hai luôn vuông góc với nhau như x với y
//  line64:
