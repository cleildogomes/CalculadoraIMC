document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const gender = document.getElementById('gender').value; // Captura o gênero
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        document.getElementById('result').innerText = 'Por favor, insira valores válidos para peso e altura.';
        document.getElementById('result').style.color = 'black'; // Resetar cor
        return;
    }

    const imc = (weight / (height * height)).toFixed(2);

    let category = '';
    let color = 'black'; // Cor padrão

    if (imc < 18.5) {
        category = 'Abaixo do peso';
        color = 'blue'; // Cor para abaixo do peso
    } else if (imc >= 18.5 && imc < 24.9) {
        category = 'peso normal';
        color = 'green'; // Cor para peso normal
    } else if (imc >= 25 && imc < 29.9) {
        category = 'Sobrepeso';
        color = 'orange'; // Cor para sobrepeso
    } else if (imc >= 30 && imc < 34.9) {
        category = 'Obesidade Grau 1';
        color = 'red'; // Cor para obesidade grau 1
    } else if (imc >= 35 && imc < 39.9) {
        category = 'Obesidade Grau 2';
        color = 'red'; // Cor para obesidade grau 2
    } else {
        category = 'Obesidade Grau 3';
        color = 'red'; // Cor para obesidade grau 3
    }

    const resultElement = document.getElementById('result');
    resultElement.innerText = `Seu IMC é: ${imc}, ${category} para o gênero: ${gender}`;
    resultElement.style.color = color; // Aplicar a cor correspondente
});

// Função para limpar os dados
document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('imcForm').reset(); // Limpa o formulário
    document.getElementById('result').innerText = ''; // Limpa o resultado
});