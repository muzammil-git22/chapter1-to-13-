//qno1
var studentNamesLiteral = [];
//qno2
var studentNamesObject = new Array();
//qno3
let stringArray = ["apple", "banana", "cherry"];
//qno4
let numberArray = [1, 2, 3, 4, 5];
//qno5
let booleanArray = [true, false, true];
//qno6
let mixedArray = ["text", 42, true, null, {name: "John"}];
//qno 7
document.write("Qualificarion: in pakistan");
var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.writeln(qualification);

//qno8
var studentNames = ["Ali", "Ahmed", "Sara" ];
var score = [56, 75, 89];
for (var i = 0; i < studentNames.length; i++) {
    var percentage = (score[i] / 100) * 100;
    document.write("Student: " + studentNames[i] + ", Percentage: " + percentage + "%<br>");
}

//qno9

var colors = ["Red", "Green", "Blue"];
    console.log("Initial array:", colors);

   var colorToAddAtBeginning = prompt("a. Enter a color to add at the beginning:");
    colors.unshift(colorToAddAtBeginning);
    console.log("After adding to beginning:", colors);

   var colorToAddAtEnd = prompt("b. Enter a color to add at the end:");
    colors.push(colorToAddAtEnd);
    console.log("After adding to end:", colors);

    colors.unshift("Purple", "Orange");
    console.log("After adding two more to beginning:", colors);

    colors.shift();
    console.log("After deleting first color:", colors);
    colors.pop();
    console.log("After deleting last color:", colors);

   var addIndex = +prompt("f. At which index do you want to add a color?");
   var addColor = prompt("Enter the color name to add:");
    colors.splice(addIndex, 0, addColor);
    console.log("After adding at index", addIndex + ":", colors);
   var delIndex = +prompt("g. At which index do you want to start deleting?");
   var delCount = +prompt("How many colors do you want to delete?");
    colors.splice(delIndex, delCount);
    console.log("After deleting from index", delIndex + ":", colors);
    // g. Ask the user at which index he/she wants to delete color(s)
// & how many colors he/she wants to delete. Then remove them.

var delIndex = +prompt("g. At which index do you want to start deleting?");
var delCount = +prompt("How many colors do you want to delete?");
colors.splice(delIndex, delCount);
console.log("After deleting from index", delIndex + ", count", delCount + ":", colors);
//qno10
