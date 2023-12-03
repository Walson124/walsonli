versionClickable();

function versionClickable() {
    const version1 = document.getElementById('version1');
    const version2 = document.getElementById('version2');
    version1.addEventListener('click', function() {
        // Change the location to the desired HTML page
        window.open('oldversions/1.0/index.html', '_blank');
    });
    version2.addEventListener('click', function() {
        // Change the location to the desired HTML page
        window.location.href = 'index.html';
    });
}