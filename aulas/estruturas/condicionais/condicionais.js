/*Era uma vez um herói chamado João que estava em uma aventura emocionante para resgatar a princesa perdida em um mundo mágico.
Mas para alcançar o castelo onde a princesa estava aprisionada, ele precisava atravessar uma floresta cheia de perigos e enigmas.
Vamos ajudar João a tomar as decisões certas usando uma estrutura IF em JavaScript! 
Essa estrutura é como um caminho mágico que o nosso herói seguirá. */

let nomeHeroi = 'joão'
let caminhoEsquerdo = ''

if (caminhoEsquerdo === 'obstaculo') {
    // Se o caminho da esquerda tiver um obstáculo, João vai tentar o caminho da direita.
    seguirCaminhoDireito() 
      console.log('teste1')
  } else if (caminhoEsquerdo === 'ponteQuebrada') {
    // Se o caminho da esquerda tiver uma ponte quebrada, João vai procurar outro caminho.
    procurarOutroCaminho() 
      console.log('teste2');
  } else {
    // Se não tiver obstáculo nem ponte quebrada no caminho da esquerda, João seguirá por esse caminho.
    seguirCaminhoEsquerdo()
      console.log('teste3');
  };