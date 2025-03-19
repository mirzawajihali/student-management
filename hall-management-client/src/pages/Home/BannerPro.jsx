
"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "../../ui/lamp";
import Banner from "./Banner";

 
export function BannerPro() {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 50 }}
        whileInView={{ opacity: 1, y: 300 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
       <Banner/>
      </motion.div>
    </LampContainer>
  );
}