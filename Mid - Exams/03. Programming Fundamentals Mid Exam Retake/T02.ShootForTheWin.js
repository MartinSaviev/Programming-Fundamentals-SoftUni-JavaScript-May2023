function shoot(array) {
    let targets = array.shift().split(' ').map(Number);
    let shoot = array.slice(0);
    let counter = 0;

    for (let i = 0; i < shoot.length; i++) {
        if (shoot[i] === 'End') {
            break;
        }

        let index = Number(shoot[i]);
        if (index < 0 || index >= targets.length || targets[index] === -1) {
            continue;
        }

        let shotTarget = targets[index];
        targets[index] = -1;
        counter++;

        for (let j = 0; j < targets.length; j++) {
            if (targets[j] === -1) {
                continue;
            }

            if (targets[j] > shotTarget) {
                targets[j] -= shotTarget;
            } else if (targets[j] <= shotTarget) {
                targets[j] += shotTarget;
            }
        }
    }

    console.log(`Shot targets: ${counter} -> ${targets.join(' ')}`);
}

shoot(["30 30 12 60 54 66", "5", "2", "4", "0", "End"])
shoot(["24 50 36 70", "0", "4", "3", "1", "End"])