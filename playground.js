var section= document.getElementById("about")
var random= Math.random()*1000000
var hex= Math.ceil(random)
console.log(hex)
section.style.background="#"+hex
setInterval(function(){
	var random= Math.random()
	var hex= random.toString(16)
	hex= hex.slice(2,8)


section.style.background="#"+hex.toString(16)

},1000)
var firstname= document.getElementById ("firstname")
var secondname= document.getElementById ("secondname")
var enter=document.getElementById ("enter")
var output= document.getElementById ("result")
enter.onclick= function(){
    console.log (firstname.value)
}
enter.onclick= function(){
    console.log (secondname.value)
    output.innerText= firstname.value.slice (0,3)+ secondname.value.slice (-3)
    console.log (output)
}