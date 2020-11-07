var images = [];
var btnGenerar = document.getElementById('btn_generar');
for (var i = 1; i < 22; i++) {
    images.push('img/' + i + '.webp');
}
var chalupa = new Chalupa({ images: images, containerId: 'contenedorImg' });
chalupa.click(image => {
    console.log(image);
});

btnGenerar.addEventListener('click', event => {
    chalupa.create();

});