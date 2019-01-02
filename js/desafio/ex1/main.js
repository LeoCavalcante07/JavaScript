var txtIdade = document.getElementById('txtIdade');
var btn = document.getElementById('btnVer');


function promiseIdade(idade){
    return new Promise(function(resolve, reject){
        
        if(idade >= 18){
            setTimeout(function(){resolve("Maior de idade")}, 2000);
        }else{
            setTimeout(function(){reject("Menor de idade")}, 2000);
        }

    });
}

btn.onclick = function(){
    var idade = txtIdade.value;
    promiseIdade(idade).then(function(response){
        console.log(response);
    }).catch(function(error){
        console.log(error);
    });
}