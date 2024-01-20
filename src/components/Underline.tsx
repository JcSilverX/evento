'use client';

import { motion } from "framer-motion";

export default function Underline() {
    return (
        <motion.span layoutId='header-active-link' className='block h-1 w-full bg-accent absolute bottom-[-.8rem] left-0'></motion.span>
    );
}
