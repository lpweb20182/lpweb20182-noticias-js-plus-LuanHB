var noticias = [];

function atualizarLista(noticia) {
    var lista = document.getElementById('noticias-recentes-list');
    var li = document.createElement('li');
    li.setAttribute('id', 'noticia-' + noticia.id);
    li.setAttribute('class', 'noticia');
    li.innerHTML = '<p class="titulo" onclick="mostrarNoticia(' + noticia.id + ')">'
        + noticia.titulo 
        + '</p>'
        + '<p class="conteudo">'
        + noticia.nome
        + '<br>'
        + noticia.email
        + '<br>'
        + noticia.data
        +  '<br>'
        + noticia.hora
        + '<br>'
        + noticia.conteudo
        + '<br>'
        + '<span>------------------</span>'
        + '<br>'
        + '<button onclick="ocultarNoticia(' + noticia.id + ')">Fechar</button>';
        + '</p>';  
    lista.appendChild(li);  
}

function salvar(form) {
    var titulo = document.getElementById('frm-titulo').value;
    var nome = document.getElementById('frm-nome').value;
    var email = document.getElementById('frm-email').value;
    var data = document.getElementById('frm-data').value;
    var hora = document.getElementById('frm-hora').value;
    var conteudo = document.getElementById('frm-conteudo').value;
    var noticia = {
        id: noticias.length,
        titulo: titulo,
		nome: nome,
		email: email,
		data: data,
		hora: hora,
        conteudo: conteudo
    };
    noticias.push(noticia);

    var dataNoticia = noticia.data;
    var data = dataNoticia.split("-");
    var anoN = parseInt(data[0])
    var mesN = parseInt(data[1])
    var diaN = parseInt(data[2])
    var novaDataNoticia = anoN + mesN + diaN

    var hoje = new Date()
    var anoH = hoje.getFullYear()
    var mesH = hoje.getMonth()
    var diaH = hoje.getDate();
    var novoHoje = anoH + mesH + diaH + 1
    
    if(noticia.data != "" && novaDataNoticia <= novoHoje){
            atualizarLista(noticia);
        }

    form.reset();
}

function mostrarNoticia(id) {
    var li = document.getElementById('noticia-' + id);
    for (var i = 0; i < li.childNodes.length; i++) {
        var node = li.childNodes[i];
        if (node.getAttribute('class') == 'conteudo') {
            node.setAttribute('style', 'display:inline');
        }
    }
}

function ocultarNoticia(id) {
    var li = document.getElementById('noticia-' + id);
    for (var i = 0; i < li.childNodes.length; i++) {
        var node = li.childNodes[i];
        if (node.getAttribute('class') == 'conteudo') {
            node.setAttribute('style', 'display:none');
        }
    }
}