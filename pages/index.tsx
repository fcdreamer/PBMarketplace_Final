//Created by Calise (3035239131)
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css/skyblue';

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */


const Home: NextPage = () => {
  return (
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
          <div className={styles.heroAssetFrame}>
            <Image
              src="/PB_banner.png"
              width={919}
              height={271}
              alt="PetBattle Banner"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <p className={styles.heroSubtitle}>
              Join PetBattle for an opportunity to engage in a profitable gaming experience!
              </p>

              <div className={styles.heroCtaContainer}>
                <Link className={styles.PLAYButton} href="/mint">
                  PLAY NOW
                </Link>
              </div>
              <a href="#Pet Information">
                <div className={styles.scrollButton}></div>
              </a>
              <p></p>
              <p> learn more </p>
            </div>
          </div>

          <div className={styles.section} id = "Pet Information">
    
              <h1>Pets</h1>
              <h3>Players utilize Pets to battle and earn rewards. Each Pet has different strengths and weaknesses, which require 
                players to put together the most optimal team based on skills, attributes, and equipment to win. Players can challenge 
                other teams or go against AI to level up.</h3>
              <h2>Species</h2>
              <div className={styles.row}>
                <div className={styles.column}>
                    <Image src="/Cat_NFT.png" alt="Example image of Cat NFT" width={250} height={250}/>
                    <p>Cat</p>
                </div>
                <div className={styles.column}>
                    <Image src="/Bear_NFT.png" alt="Example image of Bear NFT" width={250} height={250}/>
                    <p>Bear</p>
                </div>
                <div className={styles.column}>
                    <Image src="/Rabbit_NFT.png" alt="Example image of Rabbit NFT" width={250} height={250}/>
                    <p>Rabbit</p>
                </div>
              
              <Link className={styles.buttonLearn} href="https://project-20.gitbook.io/pb-whitepaper/gamefi-elements/pets" target="_blank">
                  Learn more about attributes, species, skills and equipment
              </Link>
              </div>
          </div>

          {/* scroll down button */}
          <a href="#Gameplay">
            <div className={styles.staticScroll}></div>
          </a>
        
          <div className={styles.section2} id = "Gameplay">
    
              <h1>Gameplay</h1>
              <h2>Battle System</h2>
              <h3>PetBattle employs a round combat game system. Each player sends three Pets into battle to 
                attack and defend against the attacks from the opponent during each turn.</h3>
              <br></br>
              <Splide>
                <SplideSlide>
                  <Image src="/PVP_battle.png" alt="Picture of PVP" width={750} height={320}/>
                  <h2>Ranking System (PVP)</h2>
                  <p>Players choose from the NFT of their choice to attack in a turn based game.</p>
                </SplideSlide>
                <SplideSlide>
                  <Image src="/WebGame_demo.png" alt="Picture of Web Game" width={660} height={350}/>
                  <h2>Web Game (PVE)</h2>
                  <p>Try our simple Web Game to win rewards!</p>
                </SplideSlide>
                <SplideSlide>
                  <Image src="/coming_soon.png" alt="Picture of PVE" width={750} height={320}/>
                  <h2>Dungeon System (PVE)</h2>
                  <p>The Dungeon system is in development.</p>
                </SplideSlide>
              </Splide>
          </div>

          {/* <a href="#Gameplay">
            <div className={styles.staticScroll}></div>
          </a> */}

        </div>
      </div>
    </div>

  );
};


export default Home;
