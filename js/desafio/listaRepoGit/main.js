var btn = document.getElementById('btn');
var txtNome = document.getElementById('txtNome');
var lista =  document.getElementById('listRepos');




function listarRepos(repos){  
    
    for(repo of repos){
         var itemLista = document.createElement('li');


         var text = document.createTextNode(repo.name);
        
         itemLista.appendChild(text);

         lista.appendChild(itemLista);

    }
    
    
}


function ver(nome){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/'+nome+'/repos');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));

                }else{
                    reject("Erro na requisição");
                }
            }
        }

    });
}

btn.onclick = function(){
    nome = txtNome.value;
    
    var carregando = document.createTextNode('Carregando...');
    
    var liCarregando = document.createElement('li');
    
    liCarregando.appendChild(carregando);
    
    lista.appendChild(liCarregando);
    
    
    ver(nome).then(function(response){
        lista.removeChild(liCarregando);
        var repos =  response;
        listarRepos(repos);
    }).catch(function(error){
        document.write(error);
    });
};










