/***************** 
 *  Fundamentals
******************/

    p1 = 5
    p2 = 10

// Window Alert() Method

// Functions

    function dateTime() {
    document.getElementById("datetime").innerHTML = Date();
    }

    function helloWorld() {
    window.alert("Hello World");
    }

    function myFunction(p1, p2){
        return p1 * p2;
    }

function initialize() {

    document.getElementById("printhere").innerHTML = "Hello World";


    // Strings

    x = "20"
    y = "25"
    document.getElementById("datatypes").innerHTML =  parseInt(x) + parseInt(y);

    if( x != y){document.getElementById("booleans").innerHTML = "Its true "+ x +" != "+ y}
    
    
    // Arrays

    my_array = ["item1", "item2", "item3"]


    document.getElementById("array").innerHTML = my_array[1]


    my_array[0] = "newitem1"
    document.getElementById("arraychange").innerHTML = my_array[0]

    
    document.getElementById("arrayprint").innerHTML = my_array

    
    document.getElementById("arraylength").innerHTML = my_array.length



    // Loops

    let text = ""
    for (i = 0; i < 5; i++) {
        text += "The Number is " + i + "<br>";
    }

    document.getElementById("forloop").innerHTML = text;

    

    document.getElementById("function").innerHTML = myFunction();

    

    //debug?

    console.log(p1)

    
}



    
    



