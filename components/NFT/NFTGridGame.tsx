//Created by Calise (3035239131)
import { useState } from 'react';
import type { NFT as NFTType } from "@thirdweb-dev/sdk";
import Link from "next/link";
import React from "react";
import { NFT_COLLECTION_ADDRESS } from "../../const/contractAddresses";
import Skeleton from "../Skeleton/Skeleton";
import NFT from "./NFT";
import styles from "../../styles/Buy.module.css";
import Web3 from 'web3';

type Props = {
  isLoading: boolean;
  data: NFTType[] | undefined;
  overrideOnclickBehavior?: (nft: NFTType) => void;
  emptyText?: string;
};

export default function NFTGrid({
  isLoading,
  data,
  overrideOnclickBehavior,
  emptyText = "No NFTs found for this collection.",
}: Props) {

  const myAddress = "0x976F821642A6057b6f448e5Bf218eD820df7ebe5";
  const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);

  async function initialPayment(nft: NFTType) {  
      const web3 = new Web3(window.ethereum);
      await window.ethereum.enable(); // prompt user to connect their wallet

      const accounts = await web3.eth.getAccounts();
      const accountBalance = await web3.eth.getBalance(accounts[0]);
      const amountToSend = BigInt(web3.utils.toWei('0.000001', 'ether'));

      if (accountBalance < amountToSend) {
        alert('Insufficient balance to send transaction');
        return;
      }

      const transactionObject = {
        from: accounts[0],
        to: myAddress,
        value: amountToSend.toString(),
      };

      try {
        const result = await window.ethereum.request({
          method: 'eth_sendTransaction',
          params: [transactionObject],
        });
        console.log(result);
        setIsPaymentConfirmed(true);
        // navigate to target page once payment is confirmed
        window.location.href = `/battle/${NFT_COLLECTION_ADDRESS}/${nft.metadata.id}`;
      } catch (error) {
        console.error(error);
      }
  }

  return (
    <div className={styles.nftGridContainer}>
      {isLoading ? (
        [...Array(20)].map((_, index) => (
          <div key={index} className={styles.nftContainer}>
            <Skeleton key={index} width={"100%"} height="312px" />
          </div>
        ))
      ) : data && data.length > 0 ? (
        data.map((nft) =>
          !overrideOnclickBehavior ? (
            <Link
              key={nft.metadata.id}
              className={styles.nftContainer}
              onClick={(event) => {
                if (!isPaymentConfirmed) {
                  event.preventDefault();
                  initialPayment(nft);
                }
              }}
              href={isPaymentConfirmed ? `/battle/${NFT_COLLECTION_ADDRESS}/${nft.metadata.id}` : '#'}
            >
              <NFT nft={nft} />
            </Link>
          ) : (
            <div
              key={nft.metadata.id}
              className={styles.nftContainer}
              onClick={() => overrideOnclickBehavior(nft)}
            >
              <NFT nft={nft} />
            </div>
          )
        )
      ) : (
        <p>{emptyText}</p>
      )}
    </div>
  );
}