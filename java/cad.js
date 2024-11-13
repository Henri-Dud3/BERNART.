function verificarCredenciais() {
        const usuarioDigitado = document.getElementById('usuario').value;
        const senhaDigitada = document.getElementById('senha').value;

        // Verifique as credenciais (usuário e senha)
        if (usuarioDigitado === 'dudacavalcanti' && senhaDigitada === 'duda123') {
            alert('Login bem-sucedido!'); // Redirecione para a página desejada após o login
        } else {
            alert('Usuário ou senha incorretos.');
        }
    }