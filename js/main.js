var produtos = [{name: "camiseta",
                 valor: 120.00,
                 id: 303},
                {name: "sapatos",
                 valor: 75.98,
                 id: 247},
                {name: "notebook",
                 valor: 1200.00,
                 id: 479}]

var carinho = {}

var divCarinho = document.getElementById("carinho")

var tableHTML

function startLoja() {
         var vitrine = document.getElementById("vitrine")
         for(var i = 0; i < produtos.length; i++){
             var item = produtos[i]
             vitrine.innerHTML += "<div class='itens'><h2>"+item.name+"</h2>"+
				"<img src='img/produtos/"+item.id+".png'>"+
                                "<button type='button' onclick='adicionarAoCarinho("+item.id+")'>Adicionar ao Carinho<button>"+
                                "</div>"
		}
}

function adicionarAoCarinho(id) {
	if(carinho[id]){
        	carinho[id]++
	}else{
		carinho[id] = 1
	}
	atualizarCarinhoInHtml()
}

function getProdutoById(inputId){
	for(var i in produtos){
		var item = produtos[i]
		if(item.id == inputId){
			return item
		}
	}
}

function limparCarinhoInHtml(){
	tableHTML = "<table><thead><tr><th>Produto</th><th>Quantidade</th><th>Preço</th></tr></tread>"
}

function atualizarCarinhoInHtml() {
	limparCarinhoInHtml()
	for(var i = 0; i < Object.keys(carinho).length; i++){
		itemId = Object.keys(carinho)[i]
		var itemObj = getProdutoById(itemId)
		tableHTML += "<tbody><tr><td>"+itemObj.name+"</td>"+
			"<td>"+carinho[itemId]+"</td><td>"+itemObj.valor+"</td></tr>"
	}
	tableHTML += "</tbory></table><div id='buttonCarinho'><button type='button'"+"onclick=console.log('comprando!')>Comprar</button>"+
                '<button type="button" onclick="esconderCarinho()">Fechar</button></div>'
	divCarinho.innerHTML = tableHTML
}

function mostrarCarinho(){
	divCarinho.style.display = "block"
}

function esconderCarinho(){
	divCarinho.style.display = "none"
}
