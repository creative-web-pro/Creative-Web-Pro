"use client";

import { memo } from "react";
import { motion } from "motion/react";

const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const Title = memo(function Title({ title, subTitle }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={animationVariants}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-10 max-w-3xl mx-auto"
        >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight bg-foreground pb-1.5 bg-clip-text text-transparent">
                {title}
            </h2>
            <p className="text-sm sm:text-lg mb-6 mt-2 font-light text-foreground/80">
                {subTitle}
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto" />
        </motion.div>
    );
});

export default Title;