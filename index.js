function myFunction(){
    var w = document.getElementById("hamburger")
    var x = document.getElementById("menu");
    var y = document.getElementById("navbar")
    var z = document.getElementById("list")
    if(x.style.display === "none"){
        x.style.display ="flex";
        x.style.justifyContent = "center"
        y.style.textAlign = "center"
        y.style.height = "180px";
        z.style.marginRight = "80px"
        z.style.marginTop = "30px"
    }else{
        x.style.display ="none"
        y.style.height = "100px"
        // y.style.marginTop = "20px"
    }
    console.log("clicked")
}

var innerBox = document.getElementById("imgbg")
var innerBox2 = document.getElementById("imgbg2")
var innerBox3 = document.getElementById("imgbg3")
var innerBox4 = document.getElementById("imgbg4")

function mouseInOne(){
    innerBox.style.backgroundColor = "#0070C0"
    document.getElementById("myImg").src = "Vectorwhite.png"
}
function mouseOutOne(){
    innerBox.style.backgroundColor = "#0070C00D"
    document.getElementById("myImg").src = "vector.png"
}
function mouseInTwo(){
    innerBox2.style.backgroundColor = "#0070C0"
    document.getElementById("myImg2").src = "Vectorwhite.png"
}
function mouseOutTwo(){
    innerBox2.style.backgroundColor = "#0070C00D"
    document.getElementById("myImg2").src = "vector.png"
}
function mouseInThree(){
    innerBox3.style.backgroundColor = "#0070C0"
    document.getElementById("myImg3").src = "Vectorwhite.png"
}
function mouseOutThree(){
    innerBox3.style.backgroundColor = "#0070C00D"
    document.getElementById("myImg3").src = "vector.png"
}
function mouseInFour(){
    innerBox4.style.backgroundColor = "#0070C0"
    document.getElementById("myImg4").src = "Vectorwhite.png"
}
function mouseOutFour(){   
    innerBox4.style.backgroundColor = "#0070C00D"
    document.getElementById("myImg4").src = "vector.png"
}



