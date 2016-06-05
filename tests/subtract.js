import test from 'tape';
import add from './../lib/subtract';

test('should subtract 2 numbers', (t) => {
  t.equal(add(2, 1), 1);
  t.end();
});
