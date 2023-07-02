function inventory(input) {

    let heroInventory = [];

    for (let i = 0; i < input.length; i++) {

        let [name, level, inventory] = input[i].split(' / ');
        level = Number(level)

        heroInventory.push({ name, level, inventory })

    }

    heroInventory.sort((a, b) => a.level - b.level);

    for (const key in heroInventory) {

        function inventory(input) {

            let heroInventory = [];
        
            for (let i = 0; i < input.length; i++) {
        
                let [name, level, inventory] = input[i].split(' / ');
                level = Number(level)
        
                heroInventory.push({ name, level, inventory })
        
            }
        
            heroInventory.sort((a, b) => a.level - b.level);
        
            for (const key in heroInventory) {
        
                console.log(`Hero: ${heroInventory[key].name}`);
                console.log(`level => ${heroInventory[key].level}`);
                console.log(`items => ${heroInventory[key].inventory}`);
            }
        
        }
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])