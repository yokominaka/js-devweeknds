const clock= document.getElementById('clock')


//setInterval method 
setInterval(function(){
    let date = new Date()
    clock.innerHTML= date.toLocaleTimeString("en-PK",{hour12:true})
},1000)