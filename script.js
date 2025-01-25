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
});