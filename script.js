function hitungKonversi() {
    const suhuType = document.getElementById('suhuType').value;
    const suhuValue = parseFloat(document.getElementById('suhuInput').value);

    if (isNaN(suhuValue)) {
        alert('Mohon masukkan angka yang valid');
        return;
    }

    let hasilCelsius, hasilFahrenheit, hasilKelvin;

    switch(suhuType) {
        case 'celsius':
            hasilFahrenheit = (suhuValue * 9/5) + 32;
            hasilKelvin = suhuValue + 273.15;
            alert(`Hasil dari konversi ${suhuValue}°C adalah:\n\nFahrenheit = ${hasilFahrenheit.toFixed(2)}°F\nKelvin = ${hasilKelvin.toFixed(2)}K`);
            break;

        case 'fahrenheit':
            hasilCelsius = (suhuValue - 32) * 5/9;
            hasilKelvin = (suhuValue - 32) * 5/9 + 273.15;
            alert(`Hasil dari konversi ${suhuValue}°F adalah:\n\nCelsius = ${hasilCelsius.toFixed(2)}°C\nKelvin = ${hasilKelvin.toFixed(2)}K`);
            break;

        case 'kelvin':
            hasilCelsius = suhuValue - 273.15;
            hasilFahrenheit = (suhuValue - 273.15) * 9/5 + 32;
            alert(`Hasil dari konversi ${suhuValue}K adalah:\n\nCelsius = ${hasilCelsius.toFixed(2)}°C\nFahrenheit = ${hasilFahrenheit.toFixed(2)}°F`);
            break;
    }
}