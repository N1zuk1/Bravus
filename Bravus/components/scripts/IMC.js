function calculateIMC() 
{
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const resultSpan = document.getElementById("result");
    const classificationText = document.querySelector(".classification-text");
    const calculateButton = document.querySelector(".calculate-button");

    if (!isNaN(weight) && !isNaN(height) && height > 0) 
    {
        const imc = weight / (height * height);
        resultSpan.textContent = `Seu IMC é: ${imc.toFixed(2)}`;
        setClassification(imc);

        // Limpe os campos e atualize o texto do botão
        document.getElementById("weight").value = "";
        document.getElementById("height").value = "";
        calculateButton.textContent = "Calcular Novamente";
    } else 
    {
        alert("Por favor, insira valores válidos para peso e altura.");
        calculateButton.textContent = "Calcular";
        resultSpan.textContent = "";
        classificationText.textContent = "";
    }
}

function setClassification(imc) 
{
    const classificationText = document.querySelector(".classification-text");
    if (imc < 18.5) 
    {
        classificationText.textContent = "Você está classificado como abaixo do peso.";
    } else if (imc >= 18.5 && imc < 24.9) 
    {
        classificationText.textContent = "Você está classificado como peso normal.";
    } else if (imc >= 24.9 && imc < 29.9) 
    {
        classificationText.textContent = "Você está classificado como sobrepeso.";
    } else 
    {
        classificationText.textContent = "Você está classificado como obeso.";
    }
}
