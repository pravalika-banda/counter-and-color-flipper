let mainContainer=document.getElementById("mn-container");
let button=document.getElementById("button");
let spanElement=document.getElementById("color-code");
let spanCount=document.getElementById("count-span-id");
let IncreaseButton=document.getElementById("Increase");
let DecreaseButton=document.getElementById("Decrease");

function getRandomColor() {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + hex.padStart(6, "0");  // ensures 6 digits always
}

button.addEventListener("click",function(){
    const newColor=getRandomColor();
    mainContainer.style.backgroundColor=newColor;
    spanElement.textContent=newColor;
})
let count=0;

function updateCount(count){
  IncreaseButton.addEventListener("click",function(){
    count++;
    spanCount.textContent=count;
  })
  DecreaseButton.addEventListener("click",function(){
    count--;
    spanCount.textContent=count;
  })
}
updateCount(count);
