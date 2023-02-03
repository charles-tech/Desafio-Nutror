
const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const genero = document.querySelector('#genero')
const idade = document.querySelector('#idade')

const calcBasal = () => {
  if(genero.value === 'Homem'){

    if (altura.value !== '' && peso.value !== '') {
      const bf = 66 +  (13.7 * peso.value) + (5* altura.value * idade.value) - (6.8*1).toFixed(2)
      let classification = ''
  
      
        classification = "Caloria Consumido"
      

      
      resultado.innerHTML = `BF: ${bf.toFixed(2)} (${classification})`
    } else {
      resultado.innerHTML = 'Preencha os campos'
    }
    
  }else{
    if (altura.value !== '' && peso.value !== '') {
      const bf = 655+  (9.6 * peso.value) + (1.7* altura.value) - (4,7*idade.value).toFixed(2)
      let classification = ''
  
      
        classification = "Caloria Consumido"
      

      
      resultado.innerHTML = `BF: ${bf.toFixed(2)} (${classification})`
    } else {
      resultado.innerHTML = 'Preencha os campos'
    }
  }

   
  }