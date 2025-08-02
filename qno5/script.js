// qno1
var Maaths = 3+5;
document.writeln("The sum of 3 and 5 is:"+Maaths);
//qno2
var Maaths = 3-5;
document.writeln("The difference of 3 and 5 is:"+Maaths);
var Maaths = 3*5;
document.writeln("The product of 3 and 5 is:"+Maaths);
var Maaths = 3/5;
document.writeln("The division of 3 and 5 is:"+Maaths);
var Maaths = 3%5;
document.writeln("The modulus of 3 and 5 is:"+Maaths);
//qno3
document.writeln("Value after variable declaration is undefined");
var maths = 5
document.writeln("Initial value:"+maths+"<br>");
maths++;
document.writeln("Value after increment is:"+maths+"<br>");

var maths2 = maths + 7;
document.writeln("Value after addition is:"+maths2+"<br>");
maths2--;
document.writeln("Value after decrement is:"+maths2+"<br>");
var maths3 = maths2%3;
document.writeln("Value after modulus is:"+maths3+"<br>");

//qno4
var ticketPrice = 600;
document.writeln("Total cost of buying 5 tickets is:" + (ticketPrice * 5) + "<br>");
//qno5
var table = 4;
document.writeln("Table of " + table + "<br>");
document.writeln(table + " x 1 = " + (table * 1) + "<br>");
document.writeln(table + " x 2 = " + (table * 2) + "<br>");
document.writeln(table + " x 3 = " + (table * 3) + "<br>");
document.writeln(table + " x 4 = " + (table * 4) + "<br>");
document.writeln(table + " x 5 = " + (table * 5) + "<br>");
document.writeln(table + " x 6 = " + (table * 6) + "<br>");
document.writeln(table + " x 7 = " + (table * 7) + "<br>");
document.writeln(table + " x 8 = " + (table * 8) + "<br>");
document.writeln(table + " x 9 = " + (table * 9) + "<br>");
document.writeln(table + " x 10 = " + (table * 10) + "<br>");
//qno6

var celsius = 30;

var fahrenheitFromC = (celsius * 9/5) + 32;
document.writeln(celsius + "°C is " + fahrenheitFromC + "°F"+ "<br>");

var fahrenheit = 86;
var celsiusFromF = (fahrenheit - 32) * 5/9;
document.writeln(fahrenheit + "°F is " + celsiusFromF + "°C" + "<br>");

//qno7
var item1Price = 650;
var item2Price = 100;
var item1Quantity = 3;
var item2Quantity = 7;
var shippingCharges = 100;
var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;
document.writeln("Price of item 1 is: " + item1Price + "<br>");
document.writeln("Quantity of item 1 is: " + item1Quantity + "<br>");
document.writeln("Price of item 2 is: " + item2Price + "<br>");
document.writeln("Quantity of item 2 is: " + item2Quantity + "<br>");
document.writeln("Shipping Charges: " + shippingCharges + "<br>");