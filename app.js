var dis = document.getElementById("display")
function getValue(num){ dis.value += num;}
function calculateValue(){dis.value = eval(dis.value)}
function clearAll(){    dis.value = ""}