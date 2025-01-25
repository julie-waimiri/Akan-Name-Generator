document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('akanGenerator').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('landingPage').classList.add('hidden');
    document.getElementById('akanGenerator').classList.remove('hidden');
});
