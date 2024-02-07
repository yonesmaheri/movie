import { Divider, Spinner } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="h-[100dvh] w-full flex items-center justify-center"
      >
        <Spinner size="lg" />
        <Divider orientation="vertical" className="mx-3 h-10 bg-blue-500" />
        <h2>
          Welcome to my movie website <br /> please wait...
        </h2>
      </motion.div>
    </>
  );
}
