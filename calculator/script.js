let field=document.getElementById("field");
let number=document.getElementsByClassName("num");
let operation=document.getElementsByClassName("operation");
let answer=document.getElementById("answer");

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click",function(){
        field.value+=number[i].innerHTML;
    
    })
   
}
for (let i = 0; i < operation.length; i++) {
    operation[i].addEventListener("click",function(){
        field.value+=operation[i].innerHTML;
    
    })
    
}
function delValue(){
    field.value = field.value.slice(0,field.value.length-1);
}
function delAll(){
    field.value="";
    answer.value="";
}
function calculate(){
    answer.value=eval(field.value);

}