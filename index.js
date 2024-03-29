const Benchmark = require('benchmark');
const { linearSearch, binarySearch } = require('./search');

const numbers = [];
for (let i = 1; i <= 4000000; i++) {
  // populate the array with the numbers 1 to 1,000,000
  numbers.push(i);
}
const target = numbers[0];
// grab the last number in the array as the number we want to find

const suite = new Benchmark.Suite;

suite
  .add('linear search', function() {
    linearSearch(numbers, target);
  })
  .add('binary search', function() {
    binarySearch(numbers, target, 0, numbers.length-1)
  })
  .on('complete', function() {
    // loop over and print each result
    this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`));
  })
  .run();
