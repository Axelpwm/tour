// Ruta de la imagen panorámica (ajusta la ruta según la ubicación de tu imagen)
var panorama = new Panolens.ImagePanorama('img/test.png');



// Crear el visor 360° con Panolens.js
var viewer = new Panolens.Viewer({
    container: document.querySelector('#tour-container')
});

// Agregar la imagen panorámica al visor
viewer.add(panorama);

// Crear las zonas interactivas (hotspots)
/*var hotspotsData = [
    { position: { x: 0, y: 1, z: -5 }, label: "Zona 1", color: "red", content: "Información sobre la Zona 1" },
    { position: { x: 2, y: 1, z: -6 }, label: "Zona 2", color: "blue", content: "Información sobre la Zona 2" },
    { position: { x: -2, y: 1, z: -5 }, label: "Zona 3", color: "green", content: "Información sobre la Zona 3" },
    { position: { x: 3, y: 2, z: -4 }, label: "Zona 4", color: "yellow", content: "Información sobre la Zona 4" },
    { position: { x: -3, y: 2, z: -7 }, label: "Zona 5", color: "purple", content: "Información sobre la Zona 5" },
    { position: { x: 4, y: 1, z: -6 }, label: "Zona 6", color: "orange", content: "Información sobre la Zona 6" },
    { position: { x: -4, y: 1, z: -6 }, label: "Zona 7", color: "pink", content: "Información sobre la Zona 7" },
    { position: { x: 1, y: 2, z: -3 }, label: "Zona 8", color: "brown", content: "Información sobre la Zona 8" },
    { position: { x: 0, y: 3, z: -4 }, label: "Zona 9", color: "cyan", content: "Información sobre la Zona 9" },
    { position: { x: -1, y: 2, z: -5 }, label: "Zona 10", color: "magenta", content: "Información sobre la Zona 10" }
];*/

// Crear los hotspots
hotspotsData.forEach(function(data) {
    var hotspot = new Panolens.Hotspot(data.position.x, data.position.y, data.position.z);
    hotspot.addHoverText(data.label, { fontColor: data.color });

    // Agregar contenido adicional (como texto, imágenes o videos)
    hotspot.addEventListener('click', function() {
        var infoContent = `<h3>${data.label}</h3><p>${data.content}</p>`;
        alert(infoContent);  // Puedes personalizar la manera de mostrar la información
    });

    panorama.add(hotspot);  // Agregar el hotspot a la imagen panorámica
});
