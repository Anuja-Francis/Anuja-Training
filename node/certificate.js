// const { Certificate } = require('node:crypto');
// const spkac = getSpkacSomehow();
// const challenge = Certificate.exportChallenge(spkac);
// console.log(challenge.toString('utf8'));

// const { Certificate } = require('node:crypto');
// const spkac = getSpkacSomehow();
// const publicKey = Certificate.exportPublicKey(spkac);
// console.log(publicKey);

const assert = require('node:assert');

const {
  createDiffieHellman,
} = require('node:crypto');

const alice = createDiffieHellman(2048);
const aliceKey = alice.generateKeys();

const bob = createDiffieHellman(alice.getPrime(), alice.getGenerator());
const bobKey = bob.generateKeys();

const aliceSecret = alice.computeSecret(bobKey);
const bobSecret = bob.computeSecret(aliceKey);

assert.strictEqual(aliceSecret.toString('hex'), bobSecret.toString('hex'));