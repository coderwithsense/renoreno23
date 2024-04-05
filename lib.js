import web3 from '@solana/web3.js';
import connection from './connection.js';
import { createMint } from '@solana/spl-token';
import {PublicKey} from '@solana/web3.js';

async function getBalance(publicKey) {
    const key = new PublicKey(publicKey);
    return await connection.getBalance(key);
}

const balance = await getBalance("5iNrEFHuo3KyJPTwQV1AKnYNJy7SmvG6qeRVK9NJ7KQw");
console.log(balance);