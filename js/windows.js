// js/windows.js - Lógica do sistema de janelas

// Variáveis para controle de arrastar
let isDragging = false;
let currentX, currentY, initialX, initialY;
let windowOpen = false;

// Abre uma janela com título e conteúdo
function openWindow(title, content) {
    const win = document.getElementById('window');
    const titleEl = document.getElementById('window-title');
    const contentEl = document.getElementById('window-content');

    // Define título e conteúdo
    titleEl.textContent = title;
    contentEl.innerHTML = content;

    // Torna a janela visível e centraliza
    win.style.display = 'flex';
    win.style.left = '50%';
    win.style.top = '50%';
    win.style.transform = 'translate(-50%, -50%)';

    windowOpen = true;
}

// Fecha a janela
function closeWindow() {
    const win = document.getElementById('window');
    win.style.display = 'none';
    windowOpen = false;
}

// Inicializa o sistema de arrastar janelas
function initWindowDrag() {
    const titlebar = document.getElementById('window-titlebar');
    const win = document.getElementById('window');

    if (!titlebar || !win) return;

    // Quando pressiona o mouse na barra de título
    titlebar.addEventListener('mousedown', (e) => {
        isDragging = true;

        // Calcula a posição inicial do mouse em relação à janela
        const rect = win.getBoundingClientRect();
        initialX = e.clientX - rect.left;
        initialY = e.clientY - rect.top;

        // Remove o transform para poder usar left/top
        win.style.transform = 'none';
    });

    // Quando move o mouse pelo documento
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        e.preventDefault();

        // Calcula a nova posição da janela
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;

        // Atualiza a posição da janela
        win.style.left = currentX + 'px';
        win.style.top = currentY + 'px';
    });

    // Quando solta o mouse
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}

// Inicializa o sistema de janelas quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWindowDrag);
} else {
    initWindowDrag();
}