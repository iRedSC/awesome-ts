// This is an exponential lerp decay function.

// Full video by Freya Holmér can be found here: https://youtu.be/LSNQuFEDOyQ?si=HBxzSZRQSQVKV_TD

function expDecay(a: number, b: number, decay: number, dt: number) {
    return b + (a - b) * Math.exp(-decay * dt);
}

// Decay constant, useful range 1-25, from slow to fast.
const decay = 16;

let a = 0;
let b = 100;
function update(dt: number) {
    a = expDecay(a, b, decay, dt);
}
