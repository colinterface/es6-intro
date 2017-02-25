// CONST
const me = {
  name: 'Colin',
  age: 27,
  cool: true,
};


// ARROW FUNCTIONS
const greetSelf = (person) => {

  // DESTRUCTURING
  const { name, age } = person;

  // TEMPLATE STRINGS
  const greeting = `Hello, my name's ${name} and I'm ${age} years old.`;
  console.log(greeting);

};

// greetSelf(me);



// THE SPREAD OPERATOR
const stoneFruits = [
  'peaches',
  'nectarines',
  'plums',
  'apricots',
];

const brambleFruits = [
  'blackberries',
  'raspberries',
  'boysenberries',
];

const yummyFruits = [
  ...stoneFruits,
  ...brambleFruits,
];
