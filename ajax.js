/*CRIANDO CAMPO DE PESQUISA*/

function buscaDados(){
	var nome = document.getElementById("buscar").value;
	var resultado = document.getElementByIde("dados");

/*Obejto de requisição */
	var ajax = new XMLHttpRequest();

	ajax.open("GET, create.php?buscar=" + nome, true);



/*Verificação após clicar botão */

	ajax.onreadystatechange = function(){
		if(isset(ajax.readyState == 4)){
			if(ajax.status == 200){
				resultado.innerHTML = ajax.responseText;
			}
			else{
				resultado.innerHTML = "Erro de conexão AJAX: " + ajax.statusText;
			}
		}
	};

	ajax.send(null);
}