import { motion } from "framer-motion";
import { FiGlobe, FiShield, FiArrowRight } from "react-icons/fi";
import backImage from "../assets/back.jpg";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white" style={{ backgroundImage: `url(${backImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.18),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.16),_transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            
            <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              L’avenir de <span className="text-amber-400">L’identité juridique</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Unifiant le registre civil de Guinée avec une infrastructure immuable,
              décentralisée et conforme aux standards institutionnels.
              Sécurisé, transparent et accessible partout.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#solution"
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400"
              >
                Infrastructure
                <FiArrowRight className="ml-3 text-lg" />
              </a>
              
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 text-amber-300">
                  <FiGlobe className="text-2xl" />
                  <span className="font-semibold">Accessibilité mobile</span>
                </div>
                <p className="mt-3 text-sm text-slate-300">
                  Enregistrement hors-ligne et synchronisation sécurisée pour les zones rurales.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 text-amber-300">
                  <FiShield className="text-2xl" />
                  <span className="font-semibold">Sécurité renforcée</span>
                </div>
                <p className="mt-3 text-sm text-slate-300">
                  Chaque acte est cryptographiquement ancré pour garantir l’intégrité des données.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/40"
          >
            <div className="h-full rounded-[1.75rem] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),transparent_60%)] p-6 sm:p-8">
              <div className="h-full rounded-[1.5rem] bg-[linear-gradient(180deg,_rgba(15,23,42,0.95),rgba(15,23,42,0.88))] p-6 shadow-inner shadow-slate-950/50">
                <div className="h-full rounded-[1.25rem] bg-[url('https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default Hero;