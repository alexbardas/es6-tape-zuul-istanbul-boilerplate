import test from 'tape';
import add from './../lib/add';

test('should add 2 numbers', (t) => {
  t.equal(add(1, 1), 2);
  t.end();
});
