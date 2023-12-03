versions = {
    'version1':'oldversions/1.0/index.html',
    'version2':'index.html',
}

versionClickable();

function versionClickable() {
    for (let i = 0; i < Object.keys(versions).length; i++) {
        version = document.getElementById(Object.keys(versions)[i]);
        version.addEventListener('click', function() {
            window.open(versions[Object.keys(versions)[i]], '_blank');
        });
    }
}