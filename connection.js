import web3 from '@solana/web3.js';

import dotenv from 'dotenv';
dotenv.config();

const chain = process.env.network;
const connection = new web3.Connection(web3.clusterApiUrl(chain), 'confirmed');

export default connection;