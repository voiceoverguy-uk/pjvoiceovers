export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060606] border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-white font-bold text-lg tracking-tight">
            PJ<span className="text-red-500">Voiceovers</span>
          </p>
          <p className="text-gray-500 text-sm mt-0.5">British Male Voiceover Artist</p>
        </div>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="tel:07970118818" className="hover:text-gray-300 transition-colors">
            07970 118818
          </a>
          <a
            href="mailto:paul@pjvoiceovers.com"
            className="hover:text-gray-300 transition-colors"
          >
            paul@pjvoiceovers.com
          </a>
        </div>
        <p className="text-gray-600 text-sm">
          &copy; {currentYear} PJ Voiceovers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
