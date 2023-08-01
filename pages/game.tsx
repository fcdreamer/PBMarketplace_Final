//Created by Calise (3035239131)
import React, { Component, useState } from "react";
import type { NextPage } from "next";
import styles from "../styles/WebGame.module.css";
// import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import backgroundimg from "../public/hero-gradient.png"
import {
    useContract,
    useAddress,
    useOwnedNFTs
  } from "@thirdweb-dev/react";
  import { useRouter } from "next/router";
  import Container from "../components/Container/Container";
//   import ListingWrapper from "../../components/ListingWrapper/ListingWrapper";
  import NFTGridGame from "../components/NFT/NFTGridGame";
  import Skeleton from "../components/Skeleton/Skeleton";
  import {
    MARKETPLACE_ADDRESS,
    NFT_COLLECTION_ADDRESS,
  } from "../const/contractAddresses";
//   import styles from "../../styles/Profile.module.css";
//   import randomColor from "../../util/randomColor";
  


function Game(){
  const { contract: nftCollection } = useContract(NFT_COLLECTION_ADDRESS);

  const { contract: marketplace } = useContract(
    MARKETPLACE_ADDRESS,
    "marketplace-v3"
  );

  const address = useAddress()

  //get a list of NFTS that the person owns
  const { data: ownedNfts, isLoading: loadingOwnedNfts } = useOwnedNFTs(
    nftCollection, address
  );

  return(
        <div className={styles.section}>
            <h1>Select a NFT to Battle with</h1>
            <p>The page will load to the game results page upon confirmation of transaction, please give it some time to load! Thank you 🫀</p>
            <h3>Don&apos;t know how to play? <u><Link href="/webGame">Click here to learn the rules!</Link></u></h3>
            <NFTGridGame
            data={ownedNfts}
            isLoading={loadingOwnedNfts}
            emptyText="Looks like you don't have any NFTs to battle yet. Head to the mint page to claim some!"
            />
        </div>
  );
}
  
 
  
  export default Game;
  