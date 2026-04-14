import { motion } from "framer-motion";
import { FiDatabase, FiCreditCard, FiLock, FiCheckCircle } from "react-icons/fi";

function HowItWorks() {
  const steps = [
    {
      title: "Collecte",
      description: "Saisie des données biométriques et parentales à la source.",
      icon: FiDatabase,
    },
    {
      title: "Génération",
      description: "Création de l’empreinte cryptographique unique (Hash).",
      icon: FiCreditCard,
    },
    {
      title: "Sécurisation",
      description: "Validation par consensus sur le registre décentralisé.",
      icon: FiLock,
    },
    {
      title: "Vérification",
      description: "Accès instantané aux services pour le citoyen.",
      icon: FiCheckCircle,
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-950 text-white sm:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-amber-400">Protocole de Souveraineté Digital</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight">Un protocole clair pour l’identité souveraine</h2>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-8 text-left shadow-[0_20px_60px_-40px_rgba(15,23,42,0.4)]"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-3xl bg-amber-500/15 text-amber-300">
                  <Icon className="h-7 w-7" />
                </div>
                <span className="mb-4 inline-block text-3xl font-bold text-slate-200">0{index + 1}</span>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-slate-400">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;