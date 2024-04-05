import connection from './connection.js';
import {PublicKey, Keypair} from '@solana/web3.js';
import { createMint } from '@solana/spl-token';
import * as bs58 from "bs58";

console.log(bs58);

async function mintToken() {
    const keypair = Keypair.fromSecretKey(
        bs58.decode(process.env.private_key)
    );
    console.log(keypair.publicKey.toString());
}

const token = await mintToken();
console.log(token);