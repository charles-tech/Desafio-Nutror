
const resultado = document.querySelector('#resultadoimc')
const imcr = document.querySelector('#imcr')
const altura = document.querySelector('#alturaimc')
const peso = document.querySelector('#pesoimc')
const genero = document.querySelector('#generoimc')
const idade = document.querySelector('#idadeimc')




const calcImc = () => {
  if(genero.value === 'Homem'){

    if (altura.value !== '' && peso.value !== '') {
       
        
      const imc = (peso.value / (altura.value * altura.value)*100)
      let classification = ''
  
      
        classification = "Seu IMC "
      

      
      resultado.innerHTML = `IMC: ${imc} (${classification})`
    } else {
      resultado.innerHTML = 'Preencha os campos'
    }
    
  }else{
    if (altura.value !== '' && peso.value !== '') {
        const imc = (peso.value / (altura.value * altura.value)*100)
        let classification = ''
    
        
          classification = "Seu IMC "

          if(imc <=0.185){
             imcStatus = "MAGREZA"
          }else if(imc =>0.186 || imc <= 0.249){
            imcStatus = "NORMAL"
          }else if(imc =>0.25 || imc <=0.299){
            imcStatus =" SOBREPESO - OBESIDADE (GRAU) I"
          }
        
  
        
        resultado.innerHTML = `IMC: ${imc} (${classification})`
        imcr.innerHTML = `Resultado: ${imcStatus}`
      } else {
        resultado.innerHTML = 'Preencha os campos'
      }
  }

   
  }