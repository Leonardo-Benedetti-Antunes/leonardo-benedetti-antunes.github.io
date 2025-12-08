// js/login.js - Lógica da tela de login

// Função chamada quando o usuário clica no card de login
function login() {
    hideLogin();
    showDesktop();
}

// Esconde a tela de login
function hideLogin() {
    const loginScreen = document.getElementById('login-screen');
    loginScreen.style.display = 'none';
}

// Mostra o desktop
function showDesktop() {
    const desktop = document.getElementById('desktop');
    desktop.style.display = 'block';
}

// Função para fazer logout (voltar para tela de login)
function logout() {
    hideDesktop();
    const loginScreen = document.getElementById('login-screen');
    loginScreen.style.display = 'flex';
    closeWindow();
    hideStartMenu();
}

// Esconde o desktop
function hideDesktop() {
    const desktop = document.getElementById('desktop');
    desktop.style.display = 'none';
}

// Função para desligar o sistema
function shutdown() {
    // Tenta fechar a janela do navegador
    window.close();

    // Se não conseguir fechar, mostra tela de desligamento
    document.body.innerHTML = `
        <div style="
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background: #000;
            color: #fff;
            font-size: 24px;
            font-family: Tahoma, sans-serif;
        ">
            Sistema encerrado
        </div>
    `;
}