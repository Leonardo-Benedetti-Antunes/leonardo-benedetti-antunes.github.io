// js/desktop.js - Lógica do desktop (ícones)

// Esta arquivo pode ser expandido no futuro para adicionar
// funcionalidades relacionadas aos ícones do desktop,
// como reorganização, renomeação, etc.

// Função para adicionar novos ícones programaticamente (exemplo)
function addDesktopIcon(iconData) {
    const desktopIcons = document.querySelector('.desktop-icons');

    const icon = document.createElement('div');
    icon.className = 'icon';

    if (iconData.type === 'window') {
        icon.onclick = () => openWindow(iconData.title, iconData.content);
    } else if (iconData.type === 'link') {
        icon.onclick = () => window.open(iconData.url, '_blank');
    }

    icon.innerHTML = `
        <div class="icon-image">${iconData.emoji}</div>
        <div class="icon-label">${iconData.label}</div>
    `;

    desktopIcons.appendChild(icon);
}

// Exemplo de uso:
// addDesktopIcon({
//     type: 'window',
//     emoji: '📄',
//     label: 'Novo Documento',
//     title: 'Documento',
//     content: 'Conteúdo do documento'
// });