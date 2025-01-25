document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('akanGenerator').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('landingPage').classList.add('hidden');
    document.getElementById('akanGenerator').classList.remove('hidden');
});

document.getElementById('akanForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const year = parseInt(document.getElementById('year').value);
    const month = parseInt(document.getElementById('month').value);
    const day = parseInt(document.getElementById('day').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;
    
    // Validation
    if (day <= 0 || day > 31) {
        alert('Please enter a valid day (1-31)');
        return;
    }
    
    if (month <= 0 || month > 12) {
        alert('Please enter a valid month (1-12)');
        return;
    }

    const akanName = calculateAkanName(year, month, day, gender);
    
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Your Akan name is: ${akanName}`;
    
    resultDiv.classList.remove('hidden');
});

function calculateAkanName(year, month, day, gender) {
    const CC = Math.floor(year / 100); 
    const YY = year % 100;            
    
    const dayOfWeek = Math.floor(((CC / 4) - 2 * CC - 1 + (5 * YY / 4) + (26 * (month + 1) / 10) + day) % 7);
    
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    
    if (gender === "male") {
        return maleNames[(dayOfWeek + 7) % 7]; 
    } else if (gender === "female") {
        return femaleNames[(dayOfWeek + 7) % 7]; 
    }
}
