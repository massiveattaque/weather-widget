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

// Função para tema escuro
function dark() {
    document.documentElement.setAttribute('data-theme', 'gray');
    document.getElementById('weather').setAttribute('data-theme', 'gray');
    document.getElementById('weather').setAttribute('data-basecolor', '#191919');
    document.getElementById('weather').removeAttribute('data-textcolor');
    document.getElementById('weather').setAttribute('data-cloudfill', '#191919');
    document.getElementById('weather').setAttribute('data-suncolor', '#F58f70');
    script(document, 'script', 'weatherwidget-io-js');
}

// Verifica se o sistema prefere tema escuro ou claro
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    dark();
} else {
    light();
}

// Atualiza o tema automaticamente quando a preferência do sistema mudar
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (event.matches) {
        dark();
    } else {
        light();
    }
});

// Opcional: Lembrar da escolha do usuário usando localStorage
let savedTheme = localStorage.getItem('data-theme');
if (savedTheme) {
    if (savedTheme === 'pure') {
        light();
    } else {
        dark();
    }
} else {
    // Se não houver tema salvo, segue a preferência do sistema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        dark();
    } else {
        light();
    }
}

// Função para salvar a escolha do usuário no armazenamento local
function setUserTheme(theme) {
    localStorage.setItem('data-theme', theme);
    if (theme === 'pure') {
        light();
    } else {
        dark();
    }
}