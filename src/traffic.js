function changeLight() {
    let lights = ['red', 'yellow', 'green'];
    let currentLight = 0;

    setInterval(() => {
        console.log(`Traffic light is ${lights[currentLight]}`);
        
        currentLight = (currentLight + 1) % lights.length;
    }, 2000);  // Change every 2 seconds
}

changeLight();
