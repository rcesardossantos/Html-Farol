let random = Math.floor((Math.random() * 100) + 1); // numero randomico
const circles = document.querySelectorAll('.circle');
console.log(random);
if(random < 40){
	circles[0].classList.add('color');
}else if(random <= 70){
	circles[1].classList.add('color');
}else if(random <= 100){
	circles[2].classList.add('color');
}