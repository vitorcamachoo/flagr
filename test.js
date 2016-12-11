import test from 'ava';

const { get, exist } = require('./index');

test(t => {
  t.true(exist('--prod', ['webpack', '--prod']), 'Has --prod flag');
  t.true(exist('--prod', ['webpack', '--prod="true"']), 'Has --prod flag');
  t.true(exist('prod', ['webpack', '--prod']), 'Has --prod flag');
  t.false(exist('--prod', ['webpack', '--test']), '--prod not found');
  t.is(get('--env', ['webpack', '--env="production"', '-w', '-w="teste/**/.js"']), "production", 'Get flag content');
  t.is(get('env', ['webpack', '--env="production"', '-w', '-w="teste/**/.js"']), "production", 'Get flag content');
  t.is(get('--env', ['webpack', '--env=""']), '', 'Empty content');
  t.not(get('--env', ['webpack', '--env=""']), undefined, 'Empty content');
});
