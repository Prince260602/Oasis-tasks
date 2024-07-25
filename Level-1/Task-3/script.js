function convertTemperature() {
    const inputTemperature = document.getElementById('inputTemperature').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const output = document.getElementById('output');

    if (isNaN(inputTemperature) || inputTemperature === '') {
        output.textContent = 'Please enter a valid number';
        return;
    }

    let temperature = parseFloat(inputTemperature);
    let convertedTemperatures = {};

    switch (inputUnit) {
        case 'Celsius':
            convertedTemperatures = {
                Fahrenheit: (temperature * 9/5) + 32,
                Kelvin: temperature + 273.15
            };
            break;
        case 'Fahrenheit':
            convertedTemperatures = {
                Celsius: (temperature - 32) * 5/9,
                Kelvin: ((temperature - 32) * 5/9) + 273.15
            };
            break;
        case 'Kelvin':
            convertedTemperatures = {
                Celsius: temperature - 273.15,
                Fahrenheit: ((temperature - 273.15) * 9/5) + 32
            };
            break;
        default:
            output.textContent = 'Invalid unit';
            return;
    }

    output.innerHTML = `
        <p>${temperature} ${inputUnit} is equal to:</p>
        ${inputUnit !== 'Celsius' ? `<p>${convertedTemperatures.Celsius.toFixed(2)} Celsius</p>` : ''}
        ${inputUnit !== 'Fahrenheit' ? `<p>${convertedTemperatures.Fahrenheit.toFixed(2)} Fahrenheit</p>` : ''}
        ${inputUnit !== 'Kelvin' ? `<p>${convertedTemperatures.Kelvin.toFixed(2)} Kelvin</p>` : ''}
    `;
}
