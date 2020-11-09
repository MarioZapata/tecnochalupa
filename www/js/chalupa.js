class Chalupa {
    
    constructor(config) {
        this.images = config.images;
        this.contenedorImg = document.getElementById(config.containerId);
    }
    click(fx) {
        this.fx = fx;
    }
    create() {
        let images = [];
        this.contenedorImg.innerHTML = '';
        let count = 0;
        while (count < 12) {
            let index = Math.floor(Math.random() * this.images.length - 1) + 1;
            let exist = false;
            for (let i in images) {
                if (images[i] == this.images[index]) {
                    exist = true;
                }
            }
            if (!exist) {
                images.push(this.images[index]);
                count++;
            }
        }
        for (let i in images) {
            let image = new Image();
            image.src = images[i];

            let parts = images[i].split("img/");
            let num = parts[1].split('.');


            image.id = 'i' + num[0];
            image.addEventListener('click', e => {
                this.fx(image);


            });
            this.contenedorImg.append(image);
        }
    }

    addClass(id, name) {
        document.getElementById(id).className += ' ' + name;
    }
    removeClass(id, name) {
        document.getElementById(id).classList.remove(name);
    }
}