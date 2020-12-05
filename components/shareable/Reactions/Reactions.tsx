import useHover from "@Hooks/useHover";
import React from "react";
import { ReactionsStyles } from "./styles";
const Reactions = () => {
  const [ref, value] = useHover();
  return (
    <ReactionsStyles ref={ref} isHover={value}>
      <ul>
        <li className="emo-item">
          <span className="emo-name">Like</span>
          <img src="/images/emotion/1.png" alt="emotion-name" />
        </li>
        <li className="emo-item">
          <span className="emo-name">Love</span>
          <img src="/images/emotion/2.png" alt="emotion-name" />
        </li>
        <li className="emo-item">
          <span className="emo-name">Haha</span>
          <img src="/images/emotion/3.png" alt="emotion-name" />
        </li>
        <li className="emo-item">
          <span className="emo-name">Wow</span>
          <img src="/images/emotion/4.png" alt="emotion-name" />
        </li>
        <li className="emo-item">
          <span className="emo-name">Sad</span>
          <img src="/images/emotion/5.png" alt="emotion-name" />
        </li>
        <li className="emo-item">
          <span className="emo-name">Angry</span>
          <img src="/images/emotion/6.png" alt="emotion-name" />
        </li>
      </ul>
    </ReactionsStyles>
  );
};

export default React.memo(Reactions);
