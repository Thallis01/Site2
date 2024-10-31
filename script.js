// Rola suavemente até a seção ao clicar nos links da navbar
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // URL do formulário (substitua 'YOUR_FORM_ID' pelo ID do seu formulário)
    const formUrl = this.action;

    // Criação de um objeto FormData com os dados do formulário
    const formData = new FormData(this);

    // Envia os dados usando o método Fetch
    fetch(formUrl, {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json"
        }
    }).then(response => {
        if (response.ok) {
            // Mostra a mensagem de confirmação
            document.getElementById("confirmationMessage").style.display = "block";
            this.reset(); // Limpa o formulário
        } else {
            alert("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
        }
    }).catch(error => {
        alert("Ocorreu um erro. Verifique sua conexão e tente novamente.");
    });
});