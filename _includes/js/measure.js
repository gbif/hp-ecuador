// _includes/js/measure.js
function attachMeasurements() {
    var script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.setAttribute('data-website-id', 'TU-ID-DE-UMAMI');
    script.src = 'https://tu-instancia-umami.com/script.js';
    document.head.appendChild(script);
}
