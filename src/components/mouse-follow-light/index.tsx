import { FC, useContext, useEffect, useRef } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import gsap from "gsap";
import { MainContext } from "../../providers/MainContext";

interface IMouseFollowLight {}

export const MouseFollowLight: FC<IMouseFollowLight> = ({}) => {
  const { posY, mousePosition } = useContext(MainContext);

  const refRoot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let parent = refRoot.current?.parentElement;
    let rootPos = refRoot.current?.getBoundingClientRect();
    if (parent && rootPos) {
      let parentPos = parent?.getBoundingClientRect();
      // let window = document.documentElement.getBoundingClientRect();
      // console.log(window.y);

      // let blockPosY = mousePosition.y - parentPos.y - parentPos.height / 2;
      // let blockPosX = mousePosition.x - parentPos.x - parentPos.width / 2;

      let blockPosY = mousePosition.y - parentPos.y - rootPos?.height / 2;
      let blockPosX = mousePosition.x - parentPos.x - rootPos?.width / 2;

      gsap.set(refRoot.current, {
        // y: posY + mousePosition.y,
        y: blockPosY,
        x: blockPosX,
      });
    }
  }, [posY, mousePosition]);

  return <div className={clsx(styles.MouseFollowLight)} ref={refRoot} />;
};
