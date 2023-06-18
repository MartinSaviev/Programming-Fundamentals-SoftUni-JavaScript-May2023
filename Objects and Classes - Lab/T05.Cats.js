function cats(input) {

   for (let i = 0; i < input.length; i++) {

      [names, age] = input[i].split(' ');

      class Cats {

         constructor(names, age) {
            this.names = names
            this.age = age
         };
      }
       
      Cats = function () {
         console.log(`${names}, age ${age} says Meow`);
      };

      Cats();
     
   }
}

cats(['Mellow 2', 'Tom 5'])
cats(['Candy 1', 'Poppy 3', 'Nyx 2'])