//Example 1
const changeTextButton=document.querySelector("#changeTextButton"); 
changeTextButton
changeTextButton.addEventListener("click",function(){
  let p=document.querySelector("#myParagraph");
  p.textContent="That is changed!!!"
})