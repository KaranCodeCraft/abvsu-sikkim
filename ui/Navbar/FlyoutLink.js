"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const showflyout = open && FlyoutContent;

  const pathname = usePathname()
  useEffect(() => {
      setOpen(false);
  }, [pathname])
  

  return (
    <div
      className="group relative h-fit w-fit"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link href={href} className="relative cursor-pointer font-medium">
        {children}
        <span
          className={`absolute -bottom-2 -left-2 -right-2 h-1 origin-left ${
            showflyout ? "scale-x-100" : "scale-x-0"
          } rounded-full bg-orange-500 transition-transform duration-300 ease-out`}
        />
      </Link>
      <AnimatePresence>
        {showflyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "backOut" }}
            style={{ x: "-50%" }}
            className="absolute left-1/2 top-12"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute -top-2 left-1/2 h-4 w-4  -translate-x-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FlyoutLink;
