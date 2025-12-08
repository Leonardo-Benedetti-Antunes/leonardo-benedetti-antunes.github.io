# Windows XP Simulator

Simulador web do Windows XP desenvolvido com HTML, CSS e JavaScript puro (vanilla).

## 📁 Estrutura do Projeto

```
windows-xp-simulator/
│
├── index.html              # Arquivo principal HTML
│
├── css/                    # Arquivos de estilo
│   ├── main.css           # Estilos globais e reset
│   ├── boot.css           # Estilos da tela de boot
│   ├── login.css          # Estilos da tela de login
│   ├── desktop.css        # Estilos do desktop e ícones
│   ├── taskbar.css        # Estilos da barra de tarefas
│   └── windows.css        # Estilos das janelas
│
├── js/                     # Arquivos JavaScript
│   ├── main.js            # Configurações globais
│   ├── boot.js            # Lógica da tela de boot
│   ├── login.js           # Lógica de login/logout/shutdown
│   ├── desktop.js         # Lógica dos ícones do desktop
│   ├── taskbar.js         # Lógica da barra de tarefas
│   └── windows.js         # Lógica do sistema de janelas
│
└── assets/                 # Pasta para recursos (opcional)
    └── (imagens, ícones, fontes)
```

## 🎯 Responsabilidades dos Arquivos

### HTML
- **index.html**: Estrutura completa da aplicação com todas as telas e componentes

### CSS
- **main.css**: Reset CSS, estilos globais e classes utilitárias
- **boot.css**: Animação de carregamento inicial
- **login.css**: Interface da tela de seleção de usuário
- **desktop.css**: Layout do desktop e estilização dos ícones
- **taskbar.css**: Barra de tarefas, botão iniciar e menu
- **windows.css**: Estilização das janelas do sistema

### JavaScript
- **main.js**: Ponto de entrada, configurações globais e inicialização
- **boot.js**: Controla a tela de boot e transição para login
- **login.js**: Gerencia login, logout e desligamento do sistema
- **desktop.js**: Funções relacionadas aos ícones do desktop
- **taskbar.js**: Relógio, menu iniciar e barra de tarefas
- **windows.js**: Sistema de janelas arrastáveis

## 🚀 Como Usar

1. Clone ou baixe os arquivos mantendo a estrutura de pastas
2. Abra o arquivo `index.html` em um navegador web
3. O sistema iniciará automaticamente

## ✨ Funcionalidades

- ✅ Tela de boot animada
- ✅ Tela de login com usuário único
- ✅ Desktop com ícones personalizáveis
- ✅ Janelas arrastáveis
- ✅ Barra de tarefas com relógio
- ✅ Menu iniciar funcional
- ✅ Logoff e desligamento
- ✅ Links externos (abrem em nova aba)

## 🔧 Personalizações

### Adicionar Novo Ícone no Desktop

Edite o arquivo `index.html` e adicione dentro de `.desktop-icons`:

```html
<!-- Ícone que abre janela -->
<div class="icon" onclick="openWindow('Título', 'Conteúdo HTML')">
    <div class="icon-image">🎨</div>
    <div class="icon-label">Meu App</div>
</div>

<!-- Ícone que abre link externo -->
<div class="icon" onclick="window.open('https://exemplo.com', '_blank')">
    <div class="icon-image">🔗</div>
    <div class="icon-label">Site Externo</div>
</div>
```

### Adicionar Ícone Programaticamente

Use a função em `desktop.js`:

```javascript
addDesktopIcon({
    type: 'window',      // ou 'link'
    emoji: '📄',
    label: 'Documento',
    title: 'Meu Documento',
    content: '<p>Conteúdo aqui</p>'
});
```

### Alterar Tempo de Boot

Edite `js/boot.js`:

```javascript
const BOOT_DURATION = 3000; // milissegundos
```

### Personalizar Nome do Usuário

Edite `index.html` na seção do card de usuário:

```html
<div class="user-name">Seu Nome Aqui</div>
```

E no menu iniciar:

```html
<div class="start-menu-header">Seu Nome Aqui</div>
```

## 🎨 Customização de Cores

As cores principais estão definidas nos arquivos CSS correspondentes:

- **Desktop**: `desktop.css` (background)
- **Barra de tarefas**: `taskbar.css` (gradiente azul)
- **Botão iniciar**: `taskbar.css` (gradiente verde)
- **Janelas**: `windows.css` (borda e barra de título)

## 📝 Notas Técnicas

- **Sem dependências**: Projeto usa apenas JavaScript vanilla
- **Compatibilidade**: Funciona em todos os navegadores modernos
- **Responsivo**: Adapta-se a diferentes tamanhos de tela
- **Performance**: Leve e otimizado

## 🔮 Possíveis Melhorias Futuras

- [ ] Múltiplas janelas simultâneas
- [ ] Sistema de arquivos simulado
- [ ] Suporte a temas
- [ ] Sons do Windows XP
- [ ] Animações adicionais
- [ ] Barra de tarefas com janelas abertas
- [ ] Minimizar/Maximizar janelas
- [ ] Área de transferência simulada

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente para fins educacionais e pessoais.