document.getElementById('videobtn').onclick = () => foo('video');

document.getElementById('imagebtn').onclick = () => foo('img');

document.getElementById('textbtn').onclick = () => foo('text');


document.getElementById('next').onclick = next;

document.getElementById('previos').onclick = previous;

function foo(id) {

document.getElementById("video").style.display="none";
document.getElementById("img").style.display="none";
document.getElementById("text").style.display="none";
document.getElementById(id).style.display="flex";
};

let array= [
    "https://pbs.twimg.com/profile_images/473506797462896640/_M0JJ0v8.png",
    "https://cdn1.thr.com/sites/default/files/2012/12/img_logo_blue.jpg" ,
    'https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-social-logo.png',
    'https://www.w3schools.com/w3css/img_avatar3.png'
];

let i = 0;
function previous(){
    if(i != 0){
        i-=2;
        document.getElementById("img1").src=array[i];
        document.getElementById("img2").src=array[i+1];
    }
}

function next(){
    if(i != array.length - 2){
        i+=2;
        document.getElementById("img1").src=array[i];
        document.getElementById("img2").src=array[i+1];
    }
}




