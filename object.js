var a=20;
document.write("<h3>"+Math.sqrt(a)+"</h3>");
document.write("<h3>"+Math.abs(-25)+"</h3>");
document.write("<h3>"+Math.ceil(a)+"</h3>");
document.write("<h3>"+Math.floor(a)+"</h3>");
document.write("<h3>"+Math.log(a)+"</h3>");
document.write("<h3>"+Math.min(10,20)+"</h3>");
document.write("<h3>"+Math.max(10,20)+"</h3>");
 var my_date=new Date();  
 document.write("Today's date is "+my_date.getDate()+"<br><br>"); 
 document.write("This is the month of "+my_date.getMonth()+"<br>"); 
 
 //boolean Object
var temp=new Boolean(false);
document.write("<b>"+"The boolean value is: "); document.write(temp.toString()+"<br><br>");

//string Object
var s1="Hello ";
var s2="Parth!";
document.write("First string is: "+s1+"<br><br>");
document.write("Second string is: "+s2+"<br><br>");
document.write("Concatenating two strings: "+s1.concat(s2)+"<br><br>");
document.write("Finding length of Second string : "+s2.length+"<br><br>");
document.write("The character at 0th position of First string is : "+s1.charAt(0)+"<br><br>");
document.write("The First string can be converted to upper case as : "+s1.toUpperCase());


//object creation and modification
 var Myobj;
 var n,i;
//creating an object
Myobj=new Object();
//setting the propertis for newly created object
Myobj.id=10; Myobj.name="Anuradha";
document.write("The ID is "+Myobj.id+"<br/>"); 
document.write("The Name is "+Myobj.name);



