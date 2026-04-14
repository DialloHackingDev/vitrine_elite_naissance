import { motion } from "framer-motion";
import { FiBookOpen, FiHeart, FiShield } from "react-icons/fi";

function Problem() {
  return (
    <section id="problem" className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white sm:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.14),transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight">Le Défi de l’Identité Civile</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            En Guinée, des milliers de naissances ne sont pas enregistrées,
            créant un vide identitaire qui entrave l’accès aux services fondamentaux.
          </p>
          <p className="mt-4 text-slate-400">
            Les procédures manuelles, la fraude administrative et l’absence de
            vérification numérique freinent les droits essentiels à l’éducation,
            à la santé et à la citoyenneté.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[1.5rem] border border-slate-700/80 bg-slate-900/90 p-8 shadow-lg shadow-slate-950/30"
          >
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-amber-500/15 text-amber-300">
              <FiBookOpen className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold">Obstacle à l’Éducation</h3>
            <p className="mt-3 text-slate-400">
              Sans acte de naissance, l’inscription aux examens nationaux devient impossible,
              brisant le cycle de l’apprentissage.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[1.5rem] border border-slate-700/80 bg-slate-900/90 p-8 shadow-lg shadow-slate-950/30"
          >
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-500/15 text-emerald-300">
              <FiHeart className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold">Accès à la Santé</h3>
            <p className="mt-3 text-slate-400">
              La protection sociale et le suivi vaccinal dépendent d’une identité vérifiable dès le premier jour.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-[1.5rem] border border-slate-700/80 bg-slate-900/90 p-8 shadow-lg shadow-slate-950/30"
          >
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-500/15 text-cyan-300">
              <FiShield className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold">Droit Fondamental</h3>
            <p className="mt-3 text-slate-400">
              L’identité juridique est le socle de tous les droits citoyens. Son absence est une exclusion systémique.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default Problem;