function Number(num){
    document.getElementById('result').value += num
}
 function clearResult(){
     document.getElementById('result').value ='';}
// document.querySelector('#clear').addEventListener("click",()=>{
// document.querySelector('#display').value="";


function removeNumber(){
    var res =document.getElementById('result').value
    document.getElementById('result').value = document.getElementById('result').value.slice(0, res.length-1)
}
function getresult(){
    document.getElementById('result').value=eval(document.getElementById('result').value)
}