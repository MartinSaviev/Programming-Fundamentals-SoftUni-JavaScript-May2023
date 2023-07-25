function heroes(input) {

    let numberHeroes = Number(input.shift());

    let heroes = {};

    for (let i = 0; i < numberHeroes; i++) {

        let [heroName, hp, mp] = input.shift()
            .split(' ');

        heroes[heroName] = {
            hp: Number(hp),
            mp: Number(mp),
        }

    }

    for (const line of input) {

        if (line === 'End') {
            break;
        }

        let [command, heroName, damageAndAmount, attackerAndSpellName] = line.split(' - ');

        switch (command) {
            case 'Heal':

                let health = Number(damageAndAmount);
                let addHealth = heroes[heroName].hp + health;

                if (addHealth >= 100) {

                    addHealth = Math.abs(heroes[heroName].hp - 100)
                    heroes[heroName].hp = 100;
                    console.log(`${heroName} healed for ${addHealth} HP!`);

                } else if (addHealth < 100) {

                    addHealth = heroes[heroName].hp + health;
                    heroes[heroName].hp = addHealth;
                    console.log(`${heroName} healed for ${health} HP!`);
                }

                break;
            case 'Recharge':

                let mana = Number(damageAndAmount);
                let addMana = heroes[heroName].mp + mana;

                if (addMana >= 200) {

                    addMana = Math.abs(heroes[heroName].mp - 200)
                    heroes[heroName].mp = 200;
                    console.log(`${heroName} recharged for ${addMana} MP!`);

                } else if (addMana < 200) {

                    addMana = heroes[heroName].mp + mana;
                    heroes[heroName].mp = addMana;
                    console.log(`${heroName} recharged for ${mana} MP!`);
                }

                break;
            case 'TakeDamage':

                let damage = Number(damageAndAmount);
                let attacker = attackerAndSpellName;

                heroes[heroName].hp -= damage;

                if (heroes[heroName].hp > 0) {

                    console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hp} HP left!`);

                } else if (heroes[heroName].hp <= 0) {

                    console.log(`${heroName} has been killed by ${attacker}!`);
                    delete (heroes[heroName]);

                }
                break;

            case 'CastSpell':

                let manaPoints = Number(damageAndAmount);
                let spellName = attackerAndSpellName;

                let manaToCastSpell = heroes[heroName].mp - manaPoints;

                if (manaToCastSpell >= 0) {

                    console.log(`${heroName} has successfully cast ${spellName} and now has ${manaToCastSpell} MP!`);
                    heroes[heroName].mp = manaToCastSpell;

                } else {

                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`);

                }

                break;
        }
    }

    for (const heroName in heroes) {

        console.log(heroName);
        console.log(`  HP: ${heroes[heroName].hp}`);
        console.log(`  MP: ${heroes[heroName].mp}`);

    }
}

heroes(["4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"],
)
console.log('------------');
heroes(["2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"])
