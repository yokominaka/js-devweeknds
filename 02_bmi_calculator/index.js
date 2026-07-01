const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()//prevents submit

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value) 
    const result=document.querySelector('#result')

    if(height==''|| height<0|| isNaN(height)){
        result.innerHTML='Please enter a valid height'
    }else if (weight==''|| weight<0|| isNaN(weight)){
        result.innerHTML='Please enter a valid weight'
    }else{
        const bmi=(weight/(height/100)**2).toFixed(2)
        if(bmi<18.6){
            result.innerHTML=`Under Weight : <span>${bmi}</span>`
        }else if(bmi>=18.6 && bmi<25){
            result.innerHTML=`Normal Weight : <span>${bmi}</span>`
        }else{
            result.innerHTML=`Over Weight : <span>${bmi}</span>`
        }
    }
})