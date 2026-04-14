import { FiGlobe, FiShield, FiMail, FiMapPin } from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-3">
        <div>
          <p className="text-xl font-semibold text-white">NaissanceChain</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
            Bâtir l’infrastructure de confiance pour l’identité citoyenne.
            Notre mission est de garantir qu’aucun enfant ne naisse dans l’invisibilité juridique.
          </p>
          <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
            <FiMapPin className="h-5 w-5" />
            <span>Conakry, Guinée</span>
          </div>
        </div>

        <div className="grid gap-3 text-sm">
          <span className="mb-3 text-xs uppercase tracking-[0.25em] text-amber-400">Documentation</span>
          <a href="/whitepaper.pdf" className="transition hover:text-white">Whitepaper v1.0</a>
          <a href="#solution" className="transition hover:text-white">Protocol Specs</a>
          <a href="#impact" className="transition hover:text-white">Audit Reports</a>
          <a href="#problem" className="transition hover:text-white">Security Model</a>
        </div>

        <div className="grid gap-3 text-sm">
          <span className="mb-3 text-xs uppercase tracking-[0.25em] text-amber-400">Contact Officiel</span>
          <div className="flex items-center gap-3 text-slate-400">
            <FiMail className="h-5 w-5" />
            <span>contact@naissancechain.gn</span>
          </div>
          <div className="inline-flex rounded-full border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:border-amber-400 hover:text-amber-300">
            Contact Secretariat
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800/80 px-6 py-4 text-center text-xs text-slate-500 sm:px-10">
        © 2026 NaissanceChain Sovereign Ledger. Infrastructure d’État décentralisée.
      </div>
    </footer>
  );
}

export default Footer;