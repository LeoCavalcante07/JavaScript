var xhz = new XMLHttpRequest();

xhz.open('GET', 'https://api.github.com/users/diego3g');
xhz.send(null);

xhz.onreadystatechange = function(){
    if(xhz.readyState === 4){ //quando é 4, significa que a resposta já retornou
        console.log(JSON.parse(xhz.responseText));
    }
}