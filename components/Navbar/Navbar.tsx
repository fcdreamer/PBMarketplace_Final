//page was modified by Calise (30352319131)
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

/**
 * Navigation bar that shows up on all pages.
 * Rendered in _app.tsx file above the page content.
 */
export function Navbar() {
  const address = useAddress();

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="/PB_logo.png"
              width={65}
              height={45}
              alt="PetBattle Logo"
            />
          </Link>

          <div className={styles.navMiddle}>
            <Link href="/mint" className={styles.link}>
              Mint
            </Link>
            <Link href="/buy" className={styles.link}>
              Buy
            </Link>
            <Link href="/sell" className={styles.link}>
              Sell
            </Link>
            <Link href="/game" className={styles.link}>
              Web Game
            </Link>
            <Link href="https://project-20.gitbook.io/pb-whitepaper/" target="_blank"className={styles.link}>
              Whitepaper
            </Link>
            <div className={styles.dropdown}>
              <p className={styles.link}>Information</p> 
              <div className={styles.dropdown_content}>
                <Link href="/webGame">Web Game Rules</Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.navRight}>
          <div className={styles.navConnect}>
            <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
          </div>
          {address && (
            <Link className={styles.link} href={`/profile/${address}`}>
              <Image
                className={styles.profileImage}
                src="/user-icon.png"
                width={42}
                height={42}
                alt="Profile"
              />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
