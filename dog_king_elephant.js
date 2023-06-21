//Initialize function to store the lines of code
function safeHaven() {
    
    //Create a canvas and a context
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');

    //Create variables for width and height of canvas
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    //Append the canvas to the page
    document.body.appendChild(canvas);

    //Create a variable to store the particles
    let particles = [];

    //Create a variable to store the angles for the particles
    let angles = [];

    //Create variables to hold the maximum number of particles
    let maxParticles = 400;

    //Create a function to render the particles
    function renderParticles() {

        //Loop through the particles array
        for (let i = 0; i < particles.length; i++) {

            //Set the color of the particles
            context.fillStyle = '#444';

            //Draw the particles
            context.fillRect(particles[i].x, particles[i].y, 3, 3);

            //Update the particle position
            particles[i].x += Math.sin(angles[i]) * 5;
            particles[i].y += Math.cos(angles[i]) * 5;

            //Remove the particles that are off the edge of the canvas
            if (particles[i].x > width || particles[i].x < 0 || particles[i].y > height || particles[i].y < 0) {
                particles.splice(i, 1);
                angles.splice(i, 1);
            }
        }
    }

    //Create a function to add particles
    function addParticle() {

        //Push the new particles into the particles array
        for (let i = 0; i < maxParticles; i++) {
            particles.push({
                x: Math.floor(Math.random() * width),
                y: Math.floor(Math.random() * height)
            });

            //Push the angles for each particle into the angles array
            angles.push(Math.random() * 360);
        }
    }

    //Create a function to animate the particles
    function animate() {
        requestAnimationFrame(animate);

        //Clear the canvas
        context.clearRect(0, 0, width, height);

        //Call the addParticle() function
        addParticle();

        //Call the renderParticles() function
        renderParticles();
    }

    //Initialize the animation
    animate();
}

//Call the safeHaven() function
safeHaven();