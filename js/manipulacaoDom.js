
<html>

    <head>

    </head>
    <body>

        <div id="caixa">
            <input type="text" name="nome" id="nome"/>
            <button id="botao">
                aperte
            </button>
        </div>


        <script>
            var link = document.createElement('a');
            
            link.setAttribute('href', 'https://www.youtube.com/watch?v=dGghkjpNCQ8&start_radio=1&list=RDdGghkjpNCQ8');
 
            var text = document.createTextNode('ouvir musica');
            link.appendChild(text);
            var container = document.getElementById('caixa');
            var input = document.getElementById('nome');
            var btn = document.getElementById('botao');
            
            btn.onmouseenter = function(){
                container.removeChild(input);
            };

            
            container.appendChild(link);
            
        </script>
    </body>
    
</html>