// function changeIcon(){

//   let icon = document.getElementById('hamburger');
//   if(icon.src.match('./assets/hamburger-icon.svg')){
//       icon.src = './assets/Enabled.png';
//   }else{
//       icon.src = './assets/hamburger-icon.svg';
//   }
// }
function myfunction() {
 var nav = document.getElementById('nav');
 
 if (nav.style.display === "grid"){
	nav.style.display = "none"
 } else{
	nav.style.display = "grid"
 }
}