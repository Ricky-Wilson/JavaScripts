function randomIp() {
    // This function generates and returns a random ip address    
    var min = -0;
    var max = 255;
    // and the formula is:
    var A = Math.floor(Math.random() * (max - min + 1)) + min;
    var B = Math.floor(Math.random() * (max - min + 1)) + min;
    var C = Math.floor(Math.random() * (max - min + 1)) + min;
    var D = Math.floor(Math.random() * (max - min + 1)) + min;
    var ip = A + "." + B + "." + C + "." + D
    return ip
}

alert(randomIp());
