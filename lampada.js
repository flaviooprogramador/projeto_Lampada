const turnOn = document.getElementById('turnOn')
const turnOff =  document.getElementById('turnOff')
const lamp = document.getElementById('lamp')


function isLampBroken(){//faz uma verificação para ver se a lampada estar quebrada
  return lamp.src.indexOf ('quebrada') > -1
}


function lampOn(){
  if( !isLampBroken ()){

  
  lamp.src = './img/ligada.jpg' // Função que ao clicar no button ligar a lampada liga
 }
}

function lampOf(){
  if(!isLampBroken())
  {
  lamp.src = 'img/desligada.jpg' //funcao que ao clicar no button desligar a lampada desliga
 }
}

function lampBroken (){
  lamp.src = './img/quebrada.jpg'
}

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOf)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave',lampOf )
lamp.addEventListener('dblclick', lampBroken)