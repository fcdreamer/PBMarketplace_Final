//Created by Calise (3035239131)
import React, { Component, useState } from "react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import backgroundimg from "../public/hero-gradient.png"


function Mint(){
  return(
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              <Image
                src="/hero-gradient.png"
                width={1390}
                height={1390}
                alt="Gradient Background"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
          <div className={styles.section}>
            <h1>To play, start by minting a NFT!</h1>
            <iframe
            src="https://bafybeidpp4d3znpjxlvlhitaylbqwmyk2gzcxazp5wkftvwu7r3lsyku2q.gateway.ipfscdn.io/?contract=0xcd5Ab1663542B1DE59589bCFBd93807cC6643Dc0&chain=%7B%22name%22%3A%22Goerli%22%2C%22chain%22%3A%22%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fgoerli.rpc.thirdweb.com%2Fed043a51ae23b0db3873f5a38b77ab28175fa496f15d3c53cf70401be89b622a%22%5D%2C%22nativeCurrency%22%3A%7B%22symbol%22%3A%22ETH%22%2C%22name%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22goerli%22%2C%22chainId%22%3A5%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22goerli%22%7D&theme=dark&primaryColor=cyan"
            width="600px"
            height="600px"></iframe>
          </div>
    </div>
    </div>
    </div>

  );
}
  
 
  
  export default Mint;
  