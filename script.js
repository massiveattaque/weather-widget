function script(d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0];
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://weatherwidget.io/js/widget.min.js';
    fjs.parentNode.insertBefore(js, fjs);
}

// Função para aplicar o tema claro
function light() {
    document.documentElement.setAttribute('data-theme', 'pure');
    document.getElementById('weather').setAttribute('data-theme', 'pure');
    document.getElementById('weather').removeAttribute('data-basecolor');
    document.getElementById('weather').setAttribute('data-textcolor', '#37352f');
    document.getElementById('weather').removeAttribute('data-cloudfill');
    document.getElementById('weather').setAttribute('data-suncolor', '#F58f70');
    script(document, 'script', 'weatherwidget-io-js');
}

// Carrega o tema claro por padrão ao abrir a página
light();
