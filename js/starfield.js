// Define Starfield Class
class Starfield {
    constructor() {
        this.fps = 30;
        this.canvas = null;
        this.width = 0;
        this.height = 0;
        this.minVelocity = 15;
        this.maxVelocity = 30;
        this.stars = 100;
        this.intervalId = 0;
    }

    init(div) {
        self = this;
        this.containerDiv = div;
        self.width = window.innerWidth;
        self.height = window.innerHeight;

        window.addEventListener('resize', () => {
            self.width = window.innerWidth;
            self.height = window.innerHeight;
            self.canvas.width = self.width;
            self.canvas.height = self.height;
            self.draw();
        });

        let canvas = document.createElement('canvas');
        div.appendChild(canvas);
        this.canvas = canvas;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }
    
    start() {
        let stars = [];
        for(let i = 0; i < this.stars; i++){
            stars[i] = new Star(Math.random()*this.width, Math.random()*3+1, (Math.random()*(this.maxVelocity - this.minVelocity))+this.minVelocity);
        }
        this.stars = stars;
    }

}

class Star {
    constructor(x, y, size, velocity) {
        
    }
}