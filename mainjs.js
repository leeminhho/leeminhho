let shadow=document.querySelector('.shadow');
let check_picture=document.querySelector('.check_picture');
let right=document.querySelector('.fa-chevron-right');
let left=document.querySelector('.fa-chevron-left');
let ticlose=document.querySelector('.close');
let chong_chay=document.querySelector('.chong_chay');
function check(){
    shadow.classList.toggle('none');
    ticlose.classList.toggle('none');
    check_picture.classList.toggle('none');

}
function change_arr_to_string_number(arr){
    arr=[...arr]

    return arr.join().match(/[0-9]+$/).join('');
}
function check_next(i){
    let check1='add';
let next_id=change_arr_to_string_number(i.classList);
if(next_id!=1){
    check1='remove';
}
left.classList[check1]('notopen');

check1='add';

if(next_id!=8){
    check1='remove';
}

    right.classList[check1]('notopen')

}
ticlose.onclick=check;

function get_id_main_check(){
    let main_check=document.querySelector('img[class^="main_check"]');
    let class_id=main_check.getAttribute('class');
 return class_id.match(/[0-9]+$/).join('');
}
function set_id_main_check(a){
    let main_check=document.querySelector('img[class^="main_check"]');
    main_check.setAttribute('class','main_check'+a);
 let div_next=document.querySelector('.grid_container>.item_'+a);
  let src_img=div_next.querySelector('img').getAttribute('src');
  main_check.setAttribute('src',src_img);
}

right.onclick=function(){
    let id_hien_tai=get_id_main_check();
    console.log(id_hien_tai);
    
    id_hien_tai=Number(id_hien_tai);
if(id_hien_tai!=8){
    set_id_main_check(id_hien_tai+1);

}
    check_next(document.querySelector('img[class^="main_check"]'));
}
left.onclick=function(){
    let id_hien_tai=get_id_main_check();
    id_hien_tai=Number(id_hien_tai);
if(id_hien_tai!=1){
    set_id_main_check(id_hien_tai-1);

}
    check_next(document.querySelector('img[class^="main_check"]'));

}
let grid_container_div=document.querySelectorAll('.grid_container>div');
for(let i of grid_container_div){
    i.onclick=function(e){

let main_check=document.querySelector('img[class^="main_check"]');
let src_i=e.target.getAttribute('src');
let div_id=change_arr_to_string_number(i.classList);
main_check.setAttribute('src',src_i);
main_check.setAttribute('class','main_check'+div_id);

check();
check_next(i);
    }
}