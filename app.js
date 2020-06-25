// chapter 21-25


// Q1 
    //  var firstname = prompt("Enter your first name");
    // var lastName = prompt("Enter your last name");
    // var fullName = firstname + lastName;
    // alert("Hello" + " " + fullName);

// Q2
    // var user = prompt("Enter your favorite mobile phone model.");
    // alert("My favorite phone is :" + " " + user + " " + "Length of string" + " " + user.length);

//  Q3
    // var a = "Pakistani";
    // document.write(a + "<br>");
    // document.write("index of n is :" +" " +a.indexOf("n"));

// Q4
    // var a = "Hello World";
    // document.write(a + "<br>");
    // document.write("The index of last l is :" + " " + a.lastIndexOf("l")); 
    
// Q5
    // var a = "Pakistani";
    // document.write(a + "<br>");
    // document.write("Character at index 3 is" + " " + a[3]);

// Q6
    // var firstname = prompt("Enter your first name");
    // var lastName = prompt("Enter your last name");
    // var fullName = firstname.concat(lastName);
    // alert(fullName);

// Q7
    // var a = "Hyderabad";
    // document.write(a + "<br>");
    // document.write(a.replace("Hyder" , "Islam"));

// Q8
    //  var message = "Ali and Sami are best friends. They play cricket and football together."; 
    //  var a = message.replace("and" , "&");    
    //  document.write(a);

// Q9
    // var string = "472";
    // document.write("String" + " " + string + "<br>");
    // var number = 472;
    // document.write("Number" + " " + number + "<br>");
    // var replase = parseInt(string);
    // document.write("After replacement" + " " + replase);

// Q10
    // var a = prompt("Enter a string");
    // document.write(a + "<br>");
    // var b = a.toUpperCase(a);
    // document.write(b);

// Q11
    // var a = prompt("Enter a string");
    // document.write(a + "<br>");
    // var b = a.toUpperCase(a);
    // document.write("Title case" + " " + b);    

// Q12
    // var a = 35.36;
    // document.write(a + "<br>");

    // var b = a.toString();
    // document.write(b + "<br>");

    // document.write((a + '').replace('.' , ''));

// Q13
    // var user = prompt();
    // var a = String.fromCharCode(64);
    // var b = String.fromCharCode(46);
    // var c = String.fromCharCode(44);
    // var d = String.fromCharCode(33);
    // if(user.match(a) || user.match(b) || user.match(c) || user.match(d)){
    //     alert("Enter valid name");
    // }
    // else{
    //     alert("Hello" + user);
    // }

// Q14
    // var user = prompt();
    // var arr = ["apple pie" , "cake" , "cookie" , "chips" , "patties"];
    // if(user === arr[0] || user === arr[1] || user === arr[2] || user === arr[3] || user === arr[4]){
    //     alert(user + " " + "is available at index of" + " " + arr.indexOf(user));
    // }
    // else{
    //     alert("not found");
    // }

// Q15
    // var user = prompt("enter password");
    // if (user.length > 6){
    //     alert("6 characters only");
    // }
    // else if(parseInt(user)){
    //     alert("wrong");
    // }
    // else{
    //     alert(user);
    // }

// Q16
    // var university = "University  of  karachi";
    // var a = university.split("");
    // console.log(a[0]); 
    // console.log(a[1]);
    // console.log(a[1]);
    // console.log(a[1]);
    // console.log(a[2]);
    // console.log(a[3]);
    // console.log(a[4]);
    // console.log(a[5]);
    // console.log(a[6]);
    // console.log(a[7]);
    // console.log(a[8]);
    // console.log(a[9]);
    // console.log(a[10]);
    // console.log(a[11]);
    // console.log(a[12]);
    // console.log(a[13]);
    // console.log(a[14]);
    // console.log(a[15]);
    // console.log(a[16]);
    // console.log(a[17]);
    // console.log(a[18]);
    // console.log(a[19]);
    // console.log(a[20]);
    // console.log(a[21]);
    // console.log(a[22]);

// Q17
    // var a = "pakistan";
    // var b = a[7];
    // document.write(b);    
   
// Q18
    // var a = "the quick brown fox jumps over the lazy dog";
    // alert(a.match(/the/g)).length;


//  chapter 26-30

// Q1
    // var a = parseInt(prompt("Enter positive number"));
    // document.write(a + "<br");
    // var roundof = Math.round(a);
    // document.write(roundof + "<br>");
    // var floor = Math.floor(a);
    // document.write(floor + "<br>");
    // var ceil = Math.ceil(a);

// Q2
    // var a = parseInt(prompt("Enter negative number"));
    // document.write(a + "<br");
    // var roundof = Math.round(a);
    // document.write(roundof + "<br>");
    // var floor = Math.floor(a);
    // document.write(floor + "<br>");
    // var ceil = Math.ceil(a);

// Q3
    // var a = -4;
    // var b = Math.abs(a);
    // document.write(b);

// Q4
    // var diceRoll = Math.floor( Math.random() * 6 ) +1;
    // document.write('You rolled a ' + diceRoll);

// Q5
    // var coin = Math.floor(Math.random()*2) +1;
    // if(coin === 2){
    //     document.write("head");
    // }
    // else {
    //     document.write("tail");
    // }

// Q6
    // var rendom = Math.floor(Math.random()*100);
    // document.write("Rendom number between 1 to 100 is" + " " + rendom);

// Q7
    // var user = prompt("Enter your weight");
    // document.write("Your weight is" + " " + user + "kilograms");

// Q8
    // var user = parseInt(prompt("Guess the secret number in 1 to 10"));
    // var secNo = 6;
    // if(user === secNo){
    //     alert("Congrulations");
    // }
    // else {
    //     alert("Sorry");
    // }



//  chapter 31-34

// Q1
    // var a = new Date();
    // document.write(a);    

// Q2
    // var a = new Date();
    // a.setMonth(6);
    // document.write(a);    

// Q3
    // var a = new Date();
    // a.setDate(2);
    // alert(a);

// Q4
    // var day = new Date().getDay();
    // if(day === 0 || day === 7){
    //     alert("Its fun day");
    // }
    // else {
    //     alert("working day")
    // }

// Q5
//    var a = new Date();
//    var b = a.getDate();
//    if (b <= 15){
//        document.write("first fifteen days of the month");
//    }
//    else {
//        document.write("last fifteen days of the month");
//    }

// Q6
    // var current = new Date();
    // document.write("current time" +" "+ current + "<br>");
    // var minute = Math.round(current.getTime() / 1000);
    // document.write("minute since 1, junuary, 1970" + " " + minute);

// Q7
    // var a = new Date().getHours();
    // if(a === 0 || a < 12){
    //     alert("its AM");
    // }   
    // else if (a >= 12){
    //     alert("its PM");
    // }

// Q8
    // var a = new Date();
    // document.write(a + "<br>");
    // var b = new Date();
    // b.setMonth(11);
    // b.setDate(31);
    // document.write(b);

// Q9
    // var a = new Date();
    // var aa = a.getTime();
    // document.write(a + "<br>");
    // var b = new Date("jun 18 , 2015");
    // var bb = b.getTime();
    // document.write(b + "<br>");
    // var c = aa - bb;
    // document.write(Math.floor(c / (1000*60*60*24)) + " " + "day have passed since 1st ramdan , 2015");

// Q10
    


// chapter 35-38


// Q1
    // function a(){
    //     var b = new Date();
    //     document.write(b);
    // }
    // a();

// Q2
    // function c(){
    //     var a = prompt();
    //     var b = prompt();
    //     document.write("Hello" +" "+ a + b)
    // }
    // c();

// Q3
    // function a(){
    //     var b = parseInt(prompt("enter first number"));
    //     var c = parseInt(prompt("enter second number"));
    //     document.write(b + c);
    // }   
    // a();

// Q4
    // function a(num1 , ope , num2){
    //     var num1 = parseInt(prompt("enter first number"));
    //     ope = prompt("enter operator");
    //     var num2 = parseInt(prompt("enter second number"));
    //     if(ope === "-") {
    //         document.write(num1 - num2);
    //     }
    //     else if (ope === "+"){
    //         document.write(num1 + num2);
    //     }
    //     else if (ope === "*"){
    //         document.write(num1 * num2);
    //     }
    //     else if (ope === "/"){
    //         document.write(num1 / num2);
    //     }
    // } 
    // a();   

// Q5
    

// Q6