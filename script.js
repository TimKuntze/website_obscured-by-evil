function expandReferenzen() {
    document.getElementById('referenzen').classList.add('referenzen-transform-down');
    document.getElementById('referenzen-button').classList.add('d-none'); 
    document.getElementById('referenzen-button2').classList.remove('d-none'); 
    document.getElementById('referenzen-button3').classList.remove('d-none'); 
    document.getElementById('referenzen').classList.remove('referenzen-transform-up');
}

function compressReferenzen() {
    document.getElementById('referenzen').classList.add('referenzen-transform-up');
    document.getElementById('referenzen-button2').classList.add('d-none'); 
    document.getElementById('referenzen-button3').classList.add('d-none'); 
    document.getElementById('referenzen-button').classList.remove('d-none'); 
    document.getElementById('referenzen').classList.remove('referenzen-transform-down');
}