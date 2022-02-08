// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let number=21;
if(number %  2==0)
{
  alert("number is even.");
}
else{
  alert("number is odd.");
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let numA=prompt("enter first value:");
let numB=prompt("enter second value:");
if(numA>numB)
{
  alert('max value: '+numA);
}
else{
  alert('max value:'+numB);
}
// 3. Convert the above code using`?` terniary operator

numA>numB ? 
alert('max value: '+numA)
:
alert('max value:'+numB)
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let house=prompt("enter house name:");

if(house=='stark')
{
  alert(" Winter is coming");
}
else if(house=='lannister')
{
  alert(" A lannister always pays his debt");
}
else{
  alert(" All men must die");
}


// 5. Convert the above code using`?` terniary operator
// Switch
let houseC=prompt("enter house name:");
let houseA='stark';
let houseB='lennister';
switch(true)
{
    case houseA=='stark':
    alert(" Winter is coming");
    case houseB=='lannister':
    alert(" A lannister always pays his debt");
    default:
    alert(" All men must die");
}



// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.



/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let salary=prompt("In-hand amount:");


if(salary <= 20000)
{
  alert("tax is 10 %"+ salary*10/100);
}
else if(salary <= 40000)
{
  alert("tax is 20% :" + salary*20/100);
}
else if(salary > 50000)
{
  alert("tax is 40% :"  + salary*40/100);
}



//  if..else vs switch
let salaryS=prompt("In-hand amount:");
switch(true)
{
    case salary <= 20000:
    alert("tax is 10 %"+ salary*10/100);
    case salary <= 40000:
    alert("tax is 20% :" + salary*20/100);
    case salary > 50000:
    alert("tax is 40% :" + salary*40/100);
}

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks=prompt('enter marks: ');
if(marks >100)
{
  alert('marks can\'t be greater than 100');
}
else if(marks >80)
{
  alert('Grade A');
}
 else if(marks >50)
{
  alert('Grade B');
}
else if(marks >30)
{
  alert('Grade C');
}
else{
  alert('grade D')
}

//switch
let marksS=prompt('enter marks: ');
switch(marks){
  case 1: marks > 100
  alert('marks can\'t be greater than 100');
  case 2: marks >80
  alert('Grade A');
  case 2: marks >50
  alert('Grade B');
  case 2: marks >30
  alert('Grade C');
  default:
    alert('Grade D');
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather=prompt('What is the weather like outside?');

if(weather=='sunny')
{
  alert("Wear a T-shirt");
}
if(weather=='rainy')
{
  alert("Don't forget to take your raincoat");
}
if(weather=='hot')
{
  alert("Get a hanky");
}
if(weather=='freezing')
{
  alert("Get your sweeter on");
}
else{
  alert('input not valid');
}

//switch
let weatherS=prompt('What is the weather like outside?');
switch(true)
{
  case weatherS='sunny':
    alert("Wear a T-shirt");
  case weatherS='rainy':
    alert("Don't forget to take your raincoat");
  case weatherS='hot':
    alert("Get a hanky");
  case weatherS='freezing':
    alert('Get your sweeter on');
  default:
    alert('input not valid');
}