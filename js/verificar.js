document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Capturar valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const confirmarSenha = document.getElementById("confirmar_senha").value.trim();
    const idade = document.getElementById("idade").value.trim();
    const genero = document.getElementById("genero").value.trim();

    // Mensagens de depuração
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Senha:", senha);
    console.log("Confirmar Senha:", confirmarSenha);
    console.log("Idade:", idade);
    console.log("Gênero:", genero);

    // Validação de campos
    if (!nome || !email || !senha || !confirmarSenha || !idade || !genero) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return;
    }

    // Validação do formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Criar o objeto de usuário
    const usuario = {
        nome: nome,
        email: email,
        senha: senha,
        idade: idade,
        genero: genero
    };

    // Armazenar o usuário no localStorage
    localStorage.setItem("usuario", JSON.stringify(usuario));

    console.log("Usuário armazenado:", usuario);

    alert("Cadastro realizado com sucesso!");
    window.location.href = "login.html";
});
