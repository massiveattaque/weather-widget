function script(d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0];
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://weatherwidget.io/js/widget.min.js';
    fjs.parentNode.insertBefore(js, fjs);
}

// Função para tema claro
function light() {
    document.documentElement.setAttribute('data-theme', 'pure');
    document.getElementById('weather').setAttribute('data-theme', 'pure');
    document.getElementById('weather').removeAttribute('data-basecolor');
    document.getElementById('weather').setAttribute('data-textcolor', '#37352f');
    document.getElementById('weather').removeAttribute('data-cloudfill');
    document.getElementById('weather').setAttribute('data-suncolor', '#F58f70');
    script(document, 'script', 'weatherwidget-io-js');
}

// Função para tema escuro (caso queira permitir)
function dark() {
    document.documentElement.setAttribute('data-theme', 'gray');
    document.getElementById('weather').setAttribute('data-theme', 'gray');
    document.getElementById('weather').setAttribute('data-basecolor', '#191919');
    document.getElementById('weather').removeAttribute('data-textcolor');
    document.getElementById('weather').setAttribute('data-cloudfill', '#191919');
    document.getElementById('weather').setAttribute('data-suncolor', '#F58f70');
    script(document, 'script', 'weatherwidget-io-js');
}

// Carregar o tema claro por padrão
light();

// Opcional: Atualizar tema ao mudar a preferência do sistema (se você quiser manter isso)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (event.matches) {
        dark();
    } else {
        light();
    }
});

// Se você usar armazenamento local, pode controlar o tema com base nas preferências salvas
let savedTheme = localStorage.getItem('data-theme');
if (savedTheme) {
    if (savedTheme === 'pure') {
        light();
    } else {
        dark();
    }
}