var arr =[0,1,2]
//this array represent the available places of colors
var r= Math.floor((Math.random())*256)
var g= Math.floor((Math.random())*256)
var b= Math.floor((Math.random())*256)
//These variables to create random RGB values for color.
document.getElementById("colorName").innerHTML="( "+r+" , "+g+" , "+b+" )"
//to display the random rgb color 
var result=Math.floor((Math.random())*3)
//to determine the correct position of the correct color
document.getElementById(result).style.backgroundColor="rgb("+r+","+g+","+b+")"
//to set the background of the random result
arr.splice(result,1)
//to remove the correct answer and leave two incorrect answer
var r1= Math.floor((Math.random())*256)
var g1= Math.floor((Math.random())*256)
var b1= Math.floor((Math.random())*256)
document.getElementById(arr[0]).style.backgroundColor="rgb("+r1+","+g1+","+b1+")"
// to generate the other color
var r2= Math.floor((Math.random())*256)
var g2= Math.floor((Math.random())*256)
var b2= Math.floor((Math.random())*256)
document.getElementById(arr[1]).style.backgroundColor="rgb("+r2+","+g2+","+b2+")"
// to generate the other color

function guess(){
    if(document.activeElement.id==result){
        document.getElementById("colorName").innerHTML="CORRECT !!"
        document.getElementById("colorName").style.color="darkgreen"
    }
    else{
        document.getElementById("colorName").innerHTML="WRONG !!"
        document.getElementById("colorName").style.color="red"
    }

    document.getElementsByClassName("btn")[0].removeAttribute("onclick")
    document.getElementsByClassName("btn")[1].removeAttribute("onclick")
    document.getElementsByClassName("btn")[2].removeAttribute("onclick")
//when u click a button , this func compare the button's id with the result , if true it return correct , else it return wrong 

}

function replay(){
    window.location.reload()
}
//this func is used to restart the game to play again