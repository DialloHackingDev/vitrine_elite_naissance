import { motion } from "framer-motion";
import { FaQrcode } from "react-icons/fa";
import { FiSmartphone, FiHash } from "react-icons/fi";

function Solution() {
  return (
    <section id="solution" className="py-24 px-6 bg-slate-100 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-amber-500">L’infrastructure NaissanceChain</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">Une architecture hybride, mobile et blockchain</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Une solution institutionnelle qui combine l’accessibilité terrain à la sécurité des registres numériques,
            pour garantir une identité fiable et vérifiable dès la naissance.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)]"
          >
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-950/5 text-slate-900">
              <FiSmartphone className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold">Mobile Registration</h3>
            <p className="mt-3 text-slate-600">
              Interface intuitive pour les agents de santé communautaires, permettant l’enregistrement hors-ligne en zones reculées.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)]"
          >
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-950/5 text-slate-900">
              <FiHash className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold">Hash Protection</h3>
            <p className="mt-3 text-slate-600">
              Chaque enregistrement est ancré cryptographiquement, garantissant l’intégrité des données contre toute altération.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)]"
          >
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-950/5 text-slate-900">
              <FaQrcode className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold">QR Verification</h3>
            <p className="mt-3 text-slate-600">
              Génération instantanée de certificats avec QR codes sécurisés pour une vérification immédiate par les autorités.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default Solution;