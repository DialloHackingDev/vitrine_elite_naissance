import { motion } from "framer-motion";
import { FiTrendingUp, FiClock, FiShield, FiUsers } from "react-icons/fi";
import enfant1Image from "../assets/enfant1.avif";

function Impact() {
  const stats = [
    { value: "95%", label: "Taux d’enregistrement cible", icon: FiTrendingUp },
    { value: "0s", label: "Délai de vérification", icon: FiClock },
    { value: "100%", label: "Inclusion scolaire", icon: FiUsers },
    { value: "Civic", label: "Identity sovereignty", icon: FiShield },
  ];

  return (
    <section id="impact" className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white sm:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.15),transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.16),transparent_25%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.95fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-sm uppercase tracking-[0.4em] text-amber-400">Un Impact Mesurable pour la Nation</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">Notre déploiement vise à transformer radicalement le paysage administratif guinéen d’ici 2026.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Une infrastructure de confiance conçue pour apporter de la transparence,
              accélérer l’accès aux services et garantir l’identification de chaque citoyen.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {stats.slice(0, 4).map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                    <div className="flex items-center gap-3 text-amber-300">
                      <Icon className="h-6 w-6" />
                      <span className="text-3xl font-bold text-white">{item.value}</span>
                    </div>
                    <p className="mt-3 text-sm text-slate-300">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/40">
              <div className="h-[420px] rounded-[1.75rem] bg-cover bg-center" style={{ backgroundImage: `url(${enfant1Image})` }} />
              <div className="absolute left-6 bottom-10 w-72 rounded-[1.25rem] bg-amber-400/10 p-6 shadow-lg shadow-slate-950/30 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.25em] text-amber-300">“</p>
                <p className="mt-3 text-base leading-7 text-slate-100">
                  L’acte de naissance est le premier rempart contre l’invisibilité sociale.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Impact;