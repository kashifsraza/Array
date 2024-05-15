let match=76
let english=60
let physics=9
let biology=7
let chemistry=6

let totalmarks=500

let percentage=(match+english+physics+biology+chemistry)*100/totalmarks


console.log(`the grade of student is:${percentage}%`);

if(percentage>=80)
{
    console.log("the grade of stident is : A one")
}
else if(percentage>=70){
    console.log("the grade of student is :A")
}
else if(percentage>=60){
    console.log("the grade of student is:B")
}
else if(percentage>=50){
    console.log("the grade of student is:C")
}
else{
    console.log("the student has been failed")
}

