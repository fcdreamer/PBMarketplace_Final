//Created by Calise (3035239131)
import {
  ThirdwebNftMedia,
  useAddress,
} from "@thirdweb-dev/react";
import React, { useEffect, useState, useRef} from "react";
import Container from "../../../components/Container/Container";
import { GetStaticProps, GetStaticPaths } from "next";
import { NFT, ThirdwebSDK } from "@thirdweb-dev/sdk";
import {
  NETWORK,
  NFT_COLLECTION_ADDRESS,
} from "../../../const/contractAddresses";
import styles from "../../../styles/WebGame.module.css";
import toast, { Toaster } from "react-hot-toast";
import { ethers } from "ethers";
import Swal from 'sweetalert2'
import { useRouter } from "next/router";
import Web3 from 'web3';

interface Attribute {
  trait_type: string;
  value: string;
}

type Props = {
  nft: NFT;
};

export default function TokenPage({ nft}: Props) {
  const [result, setResult] = useState({
    gameres: "",
    computerSelection: "",
  });
  const [transaction, setTransaction] = useState("")

  /////////////////////////////////////////////////////
  const privateKey =
  "d42b238aa39f67498d9130461fee6a872d3ce790cad83ebe85f5ecde3d5c8cea";

  const provider = new ethers.providers.JsonRpcProvider(
    "https://goerli.infura.io/v3/e029e329538547838c121a6f2ea6a7ad"
  );
  const signer = new ethers.Wallet(privateKey, provider);
  ///////////////////////////////////////////////
  const router = useRouter()
  const rewardAmount = "0.000001"
  // const address = useAddress();
  const dataFetchedRef = useRef(false);
  //////////////////////////////////////////////
  function prevPage() {
    router.push('/game')
  }
  /////////////////////////////////////////////
  async function sendReward(amount : string, flaging : number) {
    const web3 = new Web3(window.ethereum);
    await window.ethereum.enable(); // prompt user to connect their wallet
    const account = await web3.eth.getAccounts();
    const address = account[0];
    try {
      // Get the current balance of the sending account
      const balanceBefore = await signer.getBalance();
      console.log("My Balance " + balanceBefore);
      // Prepare the transaction data
      let tx = {
        to: address,
        value: ethers.utils.parseEther(amount),
      };
      const transaction = await signer.sendTransaction(tx);
      setTransaction(transaction.hash)
      console.log("Transaction Hash " + transaction.hash);
      if(flaging === 0){
      Swal.fire("🎉You Won!🎊 The Reward Transaction Hash: " + transaction.hash)
    } else {
      Swal.fire("😐 It's a tie! 🤝 ETHs are refunded:" + transaction.hash)
    }
      const receipt = await transaction.wait();
      console.log("Receipt " + receipt);
      router.push('/game');
    // }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  }
  /////////////////////////////////////////////////////

  //parse to get the NFT species 
  const Head = Object.entries(nft?.metadata?.attributes || {})
  .filter(([key, value]: [string, unknown]) => (value as Attribute)?.trait_type === 'Head')
  .map(([key, value]: [string, unknown]) => (value as Attribute)?.value)[0] || '';
  
  const species = Head.split(" ")[1]

  //MAIN PLAY GAME FUNCTION
  function playGame() {

    function chooseAttackSpecies() {
      const attack_species = ["bear", "rabbit", "cat"];
      const randomIndex = Math.floor(Math.random() * attack_species.length);
      return attack_species[randomIndex];
    }
  
    const computerSelection = chooseAttackSpecies();
    
    if (
      (species === "bear" && computerSelection === "cat") ||
      (species === "cat" && computerSelection === "rabbit") ||
      (species === "rabbit" && computerSelection === "bear")
    ) {
      console.log("WIN");
      const rewardAmountFloat = parseFloat(rewardAmount);
      const doubledValue = rewardAmountFloat * 2;
      const doubledValueString = doubledValue.toFixed(18);
      sendReward(doubledValueString.toString(), 0);
      const transactionHash = "Tx Hash : "
      // setResult({ result: `You win! ${doubledValueString} Goerli`, species, computerSelection, transactionHash });
      const gameres = "WIN✨"
      return {gameres, computerSelection}
    } else if (species === computerSelection) {
      console.log("TIE");
      const transactionHash = ""
      sendReward(rewardAmount.toString(), 1)
      // setResult({ result: "It's a tie! amount return", species, computerSelection , transactionHash });
      const gameres = "TIED🤝"
      return {gameres, computerSelection}
    } else {
      console.log("LOSE");
      const transactionHash = ""
      Swal.fire("You Lose! 💸 No Rewards, better luck next time!🥹 ")
      setTimeout(prevPage, 7000);
      // setResult({ result: "You lose!", species, computerSelection , transactionHash });
      const gameres = "LOSE😭"
      return {gameres, computerSelection}
    }
  }

  useEffect(() => {
    if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;
    const game = playGame();
    setResult(game)
  
  }, []);
  // const gameResult = playGame();


  return (
      <div className={styles.hero}>
        <div className={styles.section}>
        <h1>YOU {result.gameres}</h1>
        <div className={styles.row}>
            <div className={styles.column}>
              <h1>You selected: {species}</h1>
              <ThirdwebNftMedia
                  metadata={nft.metadata}
                  className={styles.Image}
                  style = {{ height: "300px"}}
              />
            </div>
            <div className={styles.column}>
              <p>&nbsp;</p> 
              <p>&nbsp;</p>
              <p>&nbsp;</p> 
              <p>&nbsp;</p> 
              <p>&nbsp;</p> 
              <h1>VS</h1>
            </div>
            <div className={styles.column}>
              <h1>Computer selected: {result.computerSelection}</h1>
              {result.computerSelection === "bear" && (
              <img src="/Bear_NFT.png" alt="Bear" className={styles.Image} width={300} height={300}/>
                )}
              {result.computerSelection === "cat" && (
              <img src="/Cat_NFT.png" alt="Cat" className={styles.Image} width={300} height={300}/>
                )}
              {result.computerSelection === "rabbit" && (
              <img src="/Rabbit_NFT.png" alt="Rabbit" className={styles.Image} width={300} height={300}/>
                )}
            </div>
        </div>
            <p>**Please give it a few seconds to load the transaction hash and rewards, if you tie or win! Thank you 🫀</p>
            </div>
        </div>   
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const tokenId = context.params?.tokenId as string;

  const sdk = new ThirdwebSDK(NETWORK);

  const contract = await sdk.getContract(NFT_COLLECTION_ADDRESS);

  const nft = await contract.erc721.get(Number(tokenId));

  let contractMetadata;

  try {
    contractMetadata = await contract.metadata.get();
  } catch (e) {}

  return {
    props: {
      nft,
      contractMetadata: contractMetadata || null,
    },
    revalidate: 1, // https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const sdk = new ThirdwebSDK(NETWORK);

  const contract = await sdk.getContract(NFT_COLLECTION_ADDRESS);

  const nfts = await contract.erc721.getAll();

  const paths = nfts.map((nft) => {
    return {
      params: {
        contractAddress: NFT_COLLECTION_ADDRESS,
        tokenId: nft.metadata.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: "blocking", // can also be true or 'blocking'
  };
};