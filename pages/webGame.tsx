//Created by Calise (3035239131)
import React, { Component, useState } from "react";
import type { NextPage } from "next";
import styles from "../styles/WebGame.module.css";
// import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import backgroundimg from "../public/hero-gradient.png"


function WebGameInfo(){
  return(
      <div className={styles.hero}>
        <div className={styles.button5}>
              <Link href="/game">I&apos;M READY TO PLAY!</Link>
            </div>
        <div className={styles.section}>
            <h1>Game Rules</h1>
            <h2>This is a game of rock paper scissors using the NFT pet!</h2>
            <h2><strong>You win if:</strong></h2>
            <div className={styles.row}>
                <div className={styles.column}>
                    <h2>✨Winner✨</h2>
                    <p>Your selection: Bear</p>
                    <Image src="/Bear_NFT.png" alt="Example image of Cat NFT" width={250} height={250}/>
                </div>
                <div className={styles.column}>
                    <p>&nbsp;</p> 
                    <p>&nbsp;</p>
                    <p>&nbsp;</p> 
                    <h1> VS </h1>
                    <h3> The bear wins overpowering the cat with its physical size 💪! </h3>
                </div>
                <div className={styles.column}>
                    <h2>💀Loser💀</h2>
                    <p>The computer&apos;s selection: Cat</p>
                    <Image src="/Cat_NFT.png" alt="Example image of Rabbit NFT" width={250} height={250}/>
                </div>
                <div className={styles.column}>
                    <h2>✨Winner✨</h2>
                    <p>Your selection: Cat</p>
                    <Image src="/Cat_NFT.png" alt="Example image of Cat NFT" width={250} height={250}/>
                </div>
                <div className={styles.column}>
                    <p>&nbsp;</p> 
                    <p>&nbsp;</p>
                    <p>&nbsp;</p> 
                    <h1> VS </h1>
                    <h3> The cat wins overpowering the rabbit with its flexibility🤸! </h3>
                </div>
                <div className={styles.column}>
                    <h2>💀Loser💀</h2>
                    <p>The computer&apos;s selection: Rabbit</p>
                    <Image src="/Rabbit_NFT.png" alt="Example image of Rabbit NFT" width={250} height={250}/>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <h2>✨Winner✨</h2>
                    <p>Your selection: Rabbit</p>
                    <Image src="/Rabbit_NFT.png" alt="Example image of Cat NFT" width={250} height={250}/>
                </div>
                <div className={styles.column}>
                    <p>&nbsp;</p> 
                    <p>&nbsp;</p>
                    <p>&nbsp;</p> 
                    <h1> VS </h1>
                    <h3> The rabbit wins by evasing the bear! 🏃💨💨</h3>
                </div>
                <div className={styles.column}>
                    <h2>💀Loser💀</h2>
                    <p>The computer&apos;s selection: Bear</p>
                    <Image src="/Bear_NFT.png" alt="Example image of Rabbit NFT" width={250} height={250}/>
                </div>
            </div>
            <hr></hr>
            <h1>Rewards</h1>
            <h3>💰 0.00002 ETH for ✨Winning✨ </h3>
            <h3>💰 0.00001 ETH (<>refunding the original amount</>) for a tie 🤝 </h3>
            <h3>💸 No Rewards for losing 😢 </h3>
            <p>&nbsp;</p>
            <hr></hr>
            <h2><strong>How do I play?</strong></h2>
            <h3>1. Start by going to the <u><Link href="/mint">
                  Mint</Link></u> page to obtain you very own NFT!</h3>
            <h3>2. Go to the <u><Link href="/game">Game</Link></u> page or click on the I&apos;m ready to play button above to start the game. There select which of the NFT you want to attack with!</h3>
            <h3>3. To play it requires 0.000001 ETH, please confirm the transaction through in your wallet. </h3>
            <h3>4. Once confirmed you will see your game results! Good luck 😆</h3>
            <hr></hr>
            <h1>FAQ</h1>
            <h2>❓Where can I get TestNet funds?</h2>
            <h3>This game is deployed on the Goerli Testnet you can get funds from the following links:</h3>
            <h3>🟡 <a href="https://faucet.paradigm.xyz/" target="_blank">https://faucet.paradigm.xyz/</a></h3>
            <h3>🟡 <a href="https://goerlifaucet.com/" target="_blank">https://goerlifaucet.com/</a></h3>
            <h3>🟡 <a href="https://goerli-faucet.pk910.de/" target="_blank">https://goerli-faucet.pk910.de/</a></h3>
            <p>&nbsp;</p>  
            <h2>❓How do I know if I have received payment?</h2>
            <h3>You can copy the transaction hash and search it on <a href="https://goerli.etherscan.io/" target="_blank">Goerli Etherscan</a></h3>
            <h3>After the transaction is confirmed on blockchain you should also see that you have received money in your Wallet.</h3>

    
            
        </div>
      </div>
  );
}
  
 
  
  export default WebGameInfo;
  