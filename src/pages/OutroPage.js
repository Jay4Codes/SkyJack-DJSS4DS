import React from "react";
import "./PageTemplate.css";
import "./OutroPage.css";

function Outro(props) {
  /* const [localCanDrag, setLocalCanDrag] = props.localCanDragArr */

  /* const toggleSwitch = () => setLocalCanDrag(!localCanDrag) */
  /* const toggleSelect = () => setIsSelected(!isSelected) */

  return (
    <div className="page-inner-wrapper">
      <div className="page-nav">Case 727</div>
      <div className="page-body">
        <div className="clue-body">
          <div className="clue-title">Conclusion</div>
          <div className="clue-text outro-text">
            The fingerprint data matched with Retired Sergeant Robert Gordon, of
            the prestigious 107th Infantry Regiment. His address: 4086 Adams
            Drive Houston, TX 77099. The FBI calls in the Rapid Action Task
            Force and surrounds Cooper's home. They barge into the house and see
            Cooper enjoying the same drink he had ordered all these years ago.
            The calmness still intact on his ageing face, he asks the senior
            officers to take a seat. Without any undue pressure, he narrates his
            tale that had kept the world curious. Gordon: “Care for a hot
            Brandy, gentlemen? Anyway, I'll spare you the extra trouble. I did
            what I had to; my Lily is at peace now. Your flaw-ridden system has
            already cost me enough; first my leg, and then my Lily. This country
            just knows money and profit. The cost of human life here is like
            peanuts. I have nothing else to say.” FBI Officer: “Sergeant, don't
            make us force you. You have cooperated till now, might as well
            narrate the entire tale as it happened. It's over now.” Sergeant:
            “So be it! The aviation sector has been favoured heavily by the
            Senators and Politicians, and while they kept building newer
            airports, they overlooked the securities of the existing ones! Be it
            the faulty plane designs, or the loose security; the loopholes
            always kept deepening. Screw you gentlemen, and screw this country!”
            * a silent gunshot is heard * Dan Cooper, or may I say, Sergeant
            Gordon knew no one would have believed him if he had just made a
            public announcement. The FBI shuts this case down and kills Dan
            Cooper so that the real story never reaches the public. The
            government couldn't afford the aviation market to witness such a
            huge hit, so this case remains “unsolved” in the record books. They
            do fix some of their flaws, but most of the air crimes still pass
            ahead undetected. This is seen by the whole world on September 11,
            2001; when the Twin Towers fell. Hero or a villain, thats for you to
            decide.
          </div>
        </div>
      </div>
      <div className="page-footer btn-container"></div>
    </div>
  );
}

export default Outro;
