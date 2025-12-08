// js/main.js - Arquivo principal para configurações globais

// Configurações globais do projeto
const CONFIG = {
    bootDuration: 3000,
    systemName: 'Windows XP',
    userName: 'Usuário'
};

// Função de inicialização geral
function init() {
    console.log('Windows XP Simulator iniciado');

    // Adicione aqui outras inicializações globais se necessário
}

// Executa ao carregar a página
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Previne o comportamento padrão de arrastar em imagens e links
document.addEventListener('dragstart', (e) => {
    e.preventDefault();
});

// Previne o menu de contexto do botão direito (opcional)
// Descomente se quiser desabilitar o clique direito
// document.addEventListener('contextmenu', (e) => {
//     e.preventDefault();
// });