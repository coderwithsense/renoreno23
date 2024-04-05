import connection from './connection.js';
import { PublicKey, Keypair, Transaction } from '@solana/web3.js';
import { createMint, getMint, mintTo, tokenMetadataInitialize } from '@solana/spl-token';
import base58 from 'bs58';

const keypair = Keypair.fromSecretKey(
    base58.decode(process.env.private_key)
);

const mint = await createMint(
    connection,
    keypair,
    keypair.publicKey,
    keypair.publicKey,
    9
);

const infoPehele = await getMint(
    connection,
    mint
)

const mintPublicKey = new PublicKey(mint);
const keypairPublicKey = new PublicKey(keypair.publicKey);

console.log(`Mint address: ${mint.address}`);

// await mintTo(
//     connection,
//     keypair,
//     mint.address,
//     keypairPublicKey,
//     keypairPublicKey,
//     100000000000
// )

await tokenMetadataInitialize(
    connection,
    keypair,
    mint,
    keypair.publicKey,
    keypair,
    "Token BLAH",
    "BLAH",
    "BLAH"
)

const info = await getMint(
    connection,
    mint
)

console.log(mint);
console.log(info);
