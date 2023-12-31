"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "@/store";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import Image from "next/image";
import CustomButton from "./CustomButton";

const HomeSection = () => {
  const snap = useSnapshot(state);

  const handleClick=()=>{
    state.intro=false
  }
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home " {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <Image
              src="/threejs.png"
              alt="logo"
              width={32}
              height={32}
              className=" object-contain"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text ">
                LET'S <br className="xl:block hidden" /> DO IT.
              </h1>
            </motion.div>
            <motion.div
            {...headContentAnimation}
            className="flex flex-col gap-5">
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique and exclusive shirt with our brand-new 3D
                customization tool.
                <strong>Unleash your imagination</strong> and define your own
                style.
              </p>
              <CustomButton
              type="filled"
              title="Customize It"
              handleClick={handleClick}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default HomeSection;
