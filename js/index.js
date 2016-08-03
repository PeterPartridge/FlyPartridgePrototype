$(function(){
$("#hiddenH3").hide();

$("#hiddenH3").fadeIn(2000,"easeInBounce");

$("#tabs").tabs();
$("#findtotal").click(function(){
var x = document.getElementById("hoursPerWeek").value;
var y = document.getElementById("poundPerHour").value;
var z = document.getElementById("totalWeeks").value;
var q = document.getElementById("danger").value;
var a = x * y;

var total = a * z;
if(q >= 3) {
document.getElementById("showTotal").innerHTML = "The wife wont let me";
}
else if(total < 500) {
document.getElementById("showTotal").innerHTML = "we dont work for £" + total;
}
else{
document.getElementById("showTotal").innerHTML ="we are happy to work for £" + total;
}

});
}());
