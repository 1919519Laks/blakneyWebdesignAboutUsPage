"use client";
import { Button } from "@heroui/button";
import { useState } from "react";

import { title } from "@/components/primitives";

export default function AboutMePage() {
  let facts: string[] = [
    "n 2006, an Australian man tried to sell New Zealand on eBay. The price rose to $3,000 before eBay shut it down.",
    "When asked if he knew the speed of sound, Einstein said he \"didn't carry such information in my mind since it's readily available in books.",
    '12+1 = 11+2, and "twelve plus one" is an anagram of "eleven plus two."',
    "William McKinley was on the $500 bill, Grover Cleveland was on the $1,000, and James Madison was on the $5,000.",
    "In Japan, letting a sumo wrestler make your baby cry is considered good luck.",
    "Nutella was invented during WWII, when an Italian pastry maker mixed hazelnuts into chocolate to extend his chocolate ration.",
    "The Scots have a word for that panicky hesitation you get when introducing someone whose name you can't remember: tartle.",
  ];
  const [fact, setFact] = useState("");

  return (
    <div>
      <h1 className={title()}>About Me!</h1>

      <br />
      <br />
      <br />

      <p>I am a cryptid! There are no confirmed photos of meeee</p>
      <a
        color="blue"
        href="https://www.w3schools.com/css/css3_flexbox_container.asp"
      >
        W3 schools!
      </a>
      <br />
      <br />
      <p>HOWever! I have a ton of photos of hobbies!</p>
      <div className="flex align-around justify-evenly flex-wrap">
        <div className="basis-1/5">
          <img alt="bob ross etch a sketch" src="bobross.JPG" />
          <p>
            This is my Etch-A-Sketch Rendition of one of Bob Ross&apos;
            paintings! I
          </p>
          <p>
            have quite a bit of experience with the Etch A Sketch! I also have
            other images here!
          </p>
        </div>
        <div className="basis-1/5">
          <img alt="campfire EAS" src="campfire.JPG" />
          <p>
            This project took me 2 days! The longest time I&apos;ve spent on
            such a project
          </p>
        </div>
        <div className="basis-1/5">
          <img alt="birds etch" src="etchBird.jpg" />
        </div>
        <div className="basis-1/5">
          <img alt="DnD town" src="harx.JPG" />
        </div>
        <div className="basis-1/5">
          <img alt="reindeer etch" src="reindeer.JPG" />
          <p>This was my first time touching an etch a sketch!</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex align-around justify-evenly flex-wrap">
        <div className="basis-1/3">
          <p>
            I also am a bit of a geek for pretty mushrooms! This is a Parrot Wax
            Cap!
          </p>
          <img alt="parrotwax" src="parrotWax.JPG" />
        </div>
        <div className="basis-1/3">
          <img alt="ruby bonnet" src="rubyyBonnet.PNG" />
          <p>Look! Ruby bonnet! So sweet, so cute, so smoll. Such baby.</p>
        </div>
        <div className="basis-1/3">
          <img alt="stinkhorn" src="veiledStinkhorn.PNG" />
          <p>Veiled stinkhorn!</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex align-around justify-evenly flex-wrap">
        <div className="basis-1/2">
          <p>I also do macrophotography!</p>
          <img alt="clovers" src="clovermacro.JPEG" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="flex align-around justify-evenly flex-wrap">
        <div className="basis-1/2">
          <p>
            Another passion of mine is Variant sudoku, which takes regular
            sudoku and tosses in extra rules!
          </p>
          <p>These are some puzzles I made</p>
          <img alt="dawn" src="dawn.PNG" />
        </div>
        <div className="basis-1/2">
          <p>This is part of a gift set I gave to a friend!</p>
          <img alt="The Monster" src="themonster.PNG" />
        </div>
      </div>

      <br />
      <br />
      <br />
      <div className="flex align-around justify-evenly flex-wrap">
        <div className="basis-1/2">
          <p>
            Another pet project/goal of mine is to code Rock Paper Scissors; and
            all its variants
          </p>
          <img alt="7" src="rps7.PNG" />
        </div>
        <div className="basis-1/2">
          <img alt="11" src="rps11.PNG" />
        </div>
        <div className="basis-1/2">
          <img alt="15" src="rps15.PNG" />
        </div>
        <div className="basis-1/2">
          <img alt="101" src="rps101.PNG" />
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button
        onPress={() => {
          setFact(facts[Math.floor(Math.random() * facts.length)]);
        }}
      >
        Press for a fact!
      </Button>
      <p>{fact}</p>
    </div>
  );
}
