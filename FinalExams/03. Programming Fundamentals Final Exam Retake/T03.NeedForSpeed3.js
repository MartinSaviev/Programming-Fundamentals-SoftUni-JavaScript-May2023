function needForSpeed(input) {

   let numberOfCars = Number(input.shift());

   let cars = {};

   for (let i = 0; i < numberOfCars; i++) {

      let [carName, mileage, fuel] = input.shift().split('|');

      cars[carName] = {

         km: Number(mileage),
         fuel: Number(fuel),

      }

   }

   for (const line of input) {

      if (line === 'Stop') {

         break;
      }

      let [command, carName, distanceOrFuelOrKilometers, fuel] = line.split(' : ')

      switch (command) {
         case 'Drive':

            fuel = Number(fuel);
            let addKm = Number(distanceOrFuelOrKilometers);

            let enoughFuel = cars[carName].fuel - fuel;

            if (enoughFuel <= 0) {
               console.log('Not enough fuel to make that ride');

            } else if (enoughFuel > 0) {

               let enoughKm = cars[carName].km + addKm;

               if (enoughKm >= 100000) {

                  console.log(`${carName} driven for ${addKm} kilometers. ${fuel} liters of fuel consumed.`);
                  console.log(`Time to sell the ${carName}!`);
                  delete (cars[carName])

               } else {

                  console.log(`${carName} driven for ${addKm} kilometers. ${fuel} liters of fuel consumed.`);
                  cars[carName].fuel = enoughFuel;
                  cars[carName].km = enoughKm;

               }

            }

            break;
         case 'Refuel':

            let addFuel = Number(distanceOrFuelOrKilometers);
            let maximumFuel = cars[carName].fuel + addFuel;

            if (maximumFuel >= 75) {
               let printHowMatchAddFuel = Math.abs(cars[carName].fuel - 75);
               cars[carName].fuel = 75;

               console.log(`${carName} refueled with ${printHowMatchAddFuel} liters`);

            } else if (maximumFuel < 75) {

               console.log(`${carName} refueled with ${addFuel} liters`);
               cars[carName].fuel = maximumFuel;
            }

            break;
         case 'Revert':

            let kilometers = Number(distanceOrFuelOrKilometers);

            let revert = cars[carName].km -= kilometers;

            if (revert > 10000) {

               console.log(`${carName} mileage decreased by ${kilometers} kilometers`);

            } else {
               cars[carName].km = 10000;
            }

            break;
      }

   }

   for (const car in cars) {

      console.log(`${car} -> Mileage: ${cars[car].km} kms, Fuel in the tank: ${cars[car].fuel} lt.`);

   }

}
needForSpeed([
   '3',
   'Audi A6|38000|62',
   'Mercedes CLS|11000|35',
   'Volkswagen Passat CC|45678|5',
   'Drive : Audi A6 : 543 : 47',
   'Drive : Mercedes CLS : 94 : 11',
   'Drive : Volkswagen Passat CC : 69 : 8',
   'Refuel : Audi A6 : 50',
   'Revert : Mercedes CLS : 500',
   'Revert : Audi A6 : 30000',
   'Stop']);

console.log('----------');

needForSpeed([
   '4',
   'Lamborghini Veneno|11111|74',
   'Bugatti Veyron|12345|67',
   'Koenigsegg CCXR|67890|12',
   'Aston Martin Valkryie|99900|50',
   'Drive : Koenigsegg CCXR : 382 : 82',
   'Drive : Aston Martin Valkryie : 99 : 23',
   'Drive : Aston Martin Valkryie : 2 : 1',
   'Refuel : Lamborghini Veneno : 40',
   'Revert : Bugatti Veyron : 2000',
   'Stop'
])


