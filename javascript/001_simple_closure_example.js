/**
 * Create a Function that stores a secret inside, which can not be directly accessed or
 * changed outside
 *
 * https://www.youtube.com/watch?v=0ltJGE5Y4Mk
 */

const secretFunction = () => {
  const secret = 'secret';

  // returning a func that return `secret`
  return () => secret;
};

const getSecret = secretFunction();

// we can niether access the `secret` nor change the `secret`
console.log(getSecret());
