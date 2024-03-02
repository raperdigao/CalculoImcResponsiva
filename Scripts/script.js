
// Função para calcular o indice de massa corporea

function calculateIMC() {

    // criei as variaveis para receber os inputs criado no html
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    // Esta condição é para validar se o que foi digitado nos inputs não são números
    
    // Is not number
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      alert('Por favor, insira valores válidos para altura e peso.');
      return;
    }
//  Cálculo do imc
    var imc = weight / (height * height);

    // Variável para receber as condiçoes do getclassification
    var classification = getClassification(imc);
// Criei a interpolação para substituir a tag h1 e p com os seus respectivos IDs
    document.getElementById('resultIMC').innerHTML = `${imc.toFixed(2)}`;
    document.getElementById('resultClassification').innerHTML = `Classificação: ${classification}`;
  }

//   Função para classificar o índices de massa corporea
  function getClassification(imc) {
    if (imc < 18.5) {
      return 'Abaixo do Peso';
    } else if (imc < 24.9) {
      return 'Peso Normal';
    } else if (imc < 29.9) {
      return 'Sobrepeso';
    } else if (imc < 34.9) {
      return 'Obesidade Grau 1';
    } else if (imc < 39.9) {
      return 'Obesidade Grau 2';
    } else {
      return 'Obesidade Grau 3';
    }
  }

//   Função para quando o usuário clicar na tecla enter, mostra o resultado e a classificação.
  function checkEnter(event) {
    if (event.key === 'Enter') {
      calculateIMC();
    }
  }