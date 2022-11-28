import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Page.css";
// eslint-disable-next-line
import {
  data1,
  data2,
  data3,
  data4,
  data5,
  data6,
  data7,
  data8,
  data9,
} from "../text/storyData";
import StoryPage from "../pages/StoryPage";
import PageTemplate from "../pages/PageTemplate";
import Page1 from "../pages/Page1_new";
import Outro from "../pages/OutroPage";

const CARD_OFFSET = 30;
const SCALE_FACTOR = 0.01;
const CARD_ANGLE_OFFSET = 0;

function Page(props) {
  const dataList = [
    data1,
    data2,
    data3,
    data4,
    data5,
    data6,
    data7,
    data8,
    data9,
  ];

  const [localCanDrag, setLocalCanDrag] = useState(true);
  const qId = props.color[0];
  const color = props.color[1];
  /* console.log(props.index, props.canGoNext) */

  const handleDrag = (x) => {
    if (Math.abs(x) > 50) {
      if (props.userProgress.length >= qId && qId <= 9 && x < 0) {
        props.moveToEnd(props.index, "next");
      } else if (qId !== 0 && x > 0) {
        props.moveToEnd(props.index, "prev");
      }
    }
  };

  return (
    <motion.li
      key={color}
      className="cardStyle"
      style={{
        backgroundColor: color,
        cursor: props.canDrag && localCanDrag ? "grab" : "auto",
        rotate: `${
          Math.floor(Math.random() * CARD_ANGLE_OFFSET) - CARD_ANGLE_OFFSET / 2
        }deg`,
      }}
      initial={{
        x: `${(props.index * CARD_OFFSET) / 40}vw`,
        y: `${(props.index * CARD_OFFSET) / 45}vw`,
      }}
      animate={{
        scale: 1 - props.index * SCALE_FACTOR,
        zIndex: props.CARD_COLORS.length - props.index,
      }}
      drag={props.canDrag && localCanDrag ? "x" : false}
      dragConstraints={{
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
      }}
      dragElastic={props.userProgress.length >= qId ? 0.5 : 0.1}
      //TODO: add cursor grab and grabbing toggles on drag start and end
      //onDragStart={(e) => e.target.style.cursor = "grabbing"}
      onDragEnd={(event, info) => handleDrag(info.offset.x)}
    >
      {props.canDrag ? (
        /* PageTemplate is the info on the cards */
        qId === 0 ? (
          <StoryPage />
        ) : qId === 1 ? (
          <Page1
            localCanDragArr={[localCanDrag, setLocalCanDrag]}
            progress={props.userProgress}
            qId={qId}
            data={dataList[qId - 1]}
          />
        ) : qId <= 9 ? (
          <PageTemplate
            localCanDragArr={[localCanDrag, setLocalCanDrag]}
            progress={props.userProgress}
            qId={qId}
            data={dataList[qId - 1]}
          />
        ) : (
          <Outro />
        )
      ) : null}
    </motion.li>
  );
}

export default Page;
