function toggleMenu(contentId) {
    var content = document.getElementById(contentId);
    content.style.display = (content.style.display === 'block' || content.style.display === '') ? 'none' : 'block';
}


function handlePedidoClick() {
    alert("Seu pedido foi adicionado ao carrinho!");
}



