//Arrays para as capas e trailers
var listaFilmesFavoritos = [];
var listaTrailersFilmesFavoritos = [];

//Variável para a capa e o trailer
function adicionarFilme() {
  var filmeFavorito = document.getElementById ("filme").value
  var trailerFilmeFavorito = document.getElementById('trailer').value;

//Condicional para verificar formato da imagem
  if (filmeFavorito.endsWith('jpg') || filmeFavorito.endsWith('jpeg') || filmeFavorito.endsWith('png')){
      
      document.getElementById('mensagemDeErro').innerHTML = '';
      listaFilmesFavoritos.push(filmeFavorito);
      listaTrailersFilmesFavoritos.push(trailerFilmeFavorito);
      
     limpaCampo();
     recarregarFilmes();
      
    } else {

//Mensagem de erro
      document.getElementById('mensagemDeErro').innerHTML = 'Endereço de imagem inválido';
      limpaCampo();
      
    }
  }

//Função de incremento da lista e criar lista
function recarregarFilmes(){
 
  var elementoListaFilmes = document.getElementById('listaFilmes');
  elementoListaFilmes.innerHTML = '';
  for(i=0; i < listaFilmesFavoritos.length ; i++){
    elementoListaFilmes.innerHTML += `<a href=" ${listaTrailersFilmesFavoritos[i]} "><img src=" ${listaFilmesFavoritos[i]} "></a>`;
    
  }
}

//Função para limpar o campo dos botões
function limpaCampo(){
   document.getElementById('filme').value = '';
   document.getElementById('trailer').value = '';
}