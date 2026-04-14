import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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

          <div className="flex items-center gap-4">
            <a
              href="#solution"
              className="hidden rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-400 md:inline-flex"
            >
              Infrastructure
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition hover:bg-slate-800 md:hidden"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {menuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-0 top-[72px] z-40 bg-slate-950/98 border-b border-slate-800/70 md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-white">
              <a
                href="#problem"
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-100 transition hover:bg-slate-900"
              >
                Problème
              </a>
              <a
                href="#solution"
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-100 transition hover:bg-slate-900"
              >
                Solution
              </a>
              <a
                href="#impact"
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-100 transition hover:bg-slate-900"
              >
                Impact
              </a>
              <a
                href="#solution"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-amber-500 px-4 py-3 text-base font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                Infrastructure
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default Navbar;