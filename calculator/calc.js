var n1 = document.querySelector ('#n1')
       var n2 = document.querySelector ('#n2')
       var resultado = document.querySelector('span')

       function somar() {
           resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value)
       }
       // deixar resultado.innerHTML = n1.value + n2.value somente, os valores irão concatenar, ou seja, se eu somare 2 + 2 = 22, então eu preciso escrever: resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value) 

       // o parseInt é para converter para inteiro
       function subtrair() {
           resultado.innerHTML = parseInt(n1.value) - parseInt(n2.value)
       }
       function multiplicar() {
           resultado.innerHTML = parseInt(n1.value) * parseInt(n2.value)
       }
       function dividir() {
           resultado.innerHTML = parseInt(n1.value) / parseInt(n2.value)
       }
  
  
  