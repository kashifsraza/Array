var match = 76;
var english = 60;
var physics = 9;
var biology = 7;
var chemistry = 6;
var totalmarks = 500;
var percentage = (match + english + physics + biology + chemistry) * 100 / totalmarks;
console.log("the grade of student is:".concat(percentage, "%"));
if (percentage >= 80) {
    console.log("the grade of stident is : A one");
}
else if (percentage >= 70) {
    console.log("the grade of student is :A");
}
else if (percentage >= 60) {
    console.log("the grade of student is:B");
}
else if (percentage >= 50) {
    console.log("the grade of student is:C");
}
else {
    console.log("the student has been failed");
}
