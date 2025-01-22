document.getElementById('notificacaoButton').addEventListener('click', function() {
    const switchInput = document.getElementById('notificacaoSwitch');
    switchInput.checked = !switchInput.checked; // Alterna o estado do switch
});

const notifiContainer = document.querySelector('.notificacao-container');
const numButtons = 5; // Número de botões que você deseja criar

for (let i = 1; i <= numButtons; i++) {
    const button = document.createElement('button');
    button.className = 'notif';
    button.id = `notificacaoButton${i}`;

    button.innerHTML = `
        <img src="Logo-Selecao-do-Brasil-Png-800x445.webp" alt="img" class="imagem-selecao">
        <h3>Receber notificações</h3>
        <label class="switch">
            <input type="checkbox" id="notificacaoSwitch${i}">
            <span class="slider"></span>
        </label>
    `;

    notifiContainer.appendChild(button);
}