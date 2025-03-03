import * as R from 'ramda';

() => {
  const numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
  const letters = R.split('', 'abcABCaaaBBc');
  R.count(R.gt(2))(numbers); // => 2
  R.count(R.equals('a'))(letters); // => 4

  // Mismatch between `predicate` and `list`
  // $ExpectError
  R.count(R.gt(2))(letters);
  // $ExpectError
  R.count(R.equals('a'))(numbers);

  // Predicate doesn't return `boolean`
  // $ExpectError
  R.count(R.add(2));
};
