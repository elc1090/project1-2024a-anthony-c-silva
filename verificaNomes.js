function verifiNome(inputNome) {
    
    var input = inputNome.value
    var regex = /^[a-zA-Z\s]*$/; // Expressão regular para permitir apenas letras e espaços
    
    if (!regex.test(input)) {
        alert("Por favor, insira apenas letras e espaços no nome.");
        inputNome.value = ''; // Limpa o campo de entrada
    }
}