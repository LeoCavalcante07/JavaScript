var list = document.querySelector('#caixa ul');
var input = document.getElementById('txtToDo');
var btn = document.getElementById('btnToDo');


var todos = JSON.parse(localStorage.getItem('listToDo')) || [];


function renderTodos(){
    
    list.innerHTML = '';

    for(todo of todos){
        var elementoList = document.createElement('li');
        var item = document.createTextNode(todo);


        var link = document.createElement('a');
        var textoLink = document.createTextNode(' excluir');
        link.appendChild(textoLink);

        var position = todos.indexOf(todo);
        link.setAttribute('onclick', 'apagar('+position+')');

        link.setAttribute('href', '#');

        elementoList.appendChild(item);
        elementoList.appendChild(link);
        list.appendChild(elementoList);
    }

    
}

renderTodos();

btn.onclick = function(){
    var novoToDo = input.value;
    todos.push(novoToDo);
    salvar();
    input.value = '';
    renderTodos();
}


function apagar(position){
    //splice(apartir de qual posicao sera apagado, qtd de itens apos a posicao que serao apagados)
    todos.splice(position, 1);
    renderTodos();
    salvar();
}


function salvar(){
    localStorage.setItem('listToDo', JSON.stringify(todos));
}







