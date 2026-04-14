import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <div className="text-lg font-semibold tracking-tight">NaissanceChain</div>

        <div className="hidden md:flex items-center gap-8 text-slate-200">
          <a href="#problem" className="transition hover:text-amber-300">Problème</a>
          <a href="#solution" className="transition hover:text-amber-300">Solution</a>
          <a href="#impact" className="transition hover:text-amber-300">Impact</a>
        </div>

        <a
          href="#solution"
          className="rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
        >
          Infrastructure
        </a>
      </div>
    </motion.nav>
  );
}

export default Navbar;