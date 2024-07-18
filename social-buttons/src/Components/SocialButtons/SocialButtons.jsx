import React from "react";
import styles from "./SocialButtons.module.css";

const SocialButtons = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.wrapperContainer}>
        <h1>Social Buttons</h1>
        <div className={styles.buttonsWrapper}>
          {buttonsList.map((button, index) => {
            return (
              <p
                key={button?.id}
                style={{
                  color: button?.color,
                  backgroundColor: button?.background,
                }} className={styles.btnItem}
              >
                {button?.title}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialButtons;

const buttonsList = [
  {
    id: 1,
    title: "Like",
    color: "white",
    background: "#eab308",
  },
  {
    id: 2,
    title: "Comment",
    color: "#323f4b",
    background: "white",
  },
  {
    id: 3,
    title: "Share",
    color: "white",
    background: "#1d4ed8",
  },
];
