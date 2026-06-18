import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-8 h-16 bg-surface/95 backdrop-blur-md border-b-2 border-surface-container-high shadow-[inset_1px_1px_0px_var(--color-surface-bright)]">
        <div className="text-2xl font-black tracking-tighter text-primary-container italic cursor-pointer">
          <a href="#inicio">IRON_LINK</a>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a className="font-headline uppercase tracking-widest text-sm font-bold text-outline hover:text-primary-container transition-colors duration-300" href="#enfoque">ENFOQUE</a>
          <a className="font-headline uppercase tracking-widest text-sm font-bold text-outline hover:text-primary-container transition-colors duration-300" href="#modulos">MÓDULOS</a>
          <a className="font-headline uppercase tracking-widest text-sm font-bold text-outline hover:text-primary-container transition-colors duration-300" href="#hoja-de-ruta">HOJA DE RUTA</a>
          <a className="font-headline uppercase tracking-widest text-sm font-bold text-outline hover:text-primary-container transition-colors duration-300" href="#herramientas">HERRAMIENTAS</a>
        </nav>
        <div className="flex items-center gap-6">
          <button className="hidden md:block bg-primary-container text-on-primary-container px-4 py-2 font-headline font-bold text-xs tracking-tighter uppercase shadow-[1px_1px_0px_var(--color-on-surface)] active:scale-95 duration-100 ease-in-out cursor-pointer hover:bg-primary transition-colors">
            VER REPOSITORIO
          </button>
          <button className="md:hidden text-primary-container p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-surface/95 backdrop-blur-md flex flex-col items-center justify-start pt-12 gap-8 md:hidden border-t-2 border-surface-container-high">
          <a className="font-headline uppercase tracking-widest text-lg font-bold text-on-surface-variant hover:text-primary-container transition-colors duration-300" href="#enfoque" onClick={() => setIsMenuOpen(false)}>ENFOQUE</a>
          <a className="font-headline uppercase tracking-widest text-lg font-bold text-on-surface-variant hover:text-primary-container transition-colors duration-300" href="#modulos" onClick={() => setIsMenuOpen(false)}>MÓDULOS</a>
          <a className="font-headline uppercase tracking-widest text-lg font-bold text-on-surface-variant hover:text-primary-container transition-colors duration-300" href="#hoja-de-ruta" onClick={() => setIsMenuOpen(false)}>HOJA DE RUTA</a>
          <a className="font-headline uppercase tracking-widest text-lg font-bold text-on-surface-variant hover:text-primary-container transition-colors duration-300" href="#herramientas" onClick={() => setIsMenuOpen(false)}>HERRAMIENTAS</a>
          <button className="mt-8 bg-primary-container text-on-primary-container px-8 py-4 font-headline font-bold text-sm tracking-tighter uppercase shadow-[1px_1px_0px_var(--color-on-surface)] active:scale-95 duration-100 ease-in-out cursor-pointer hover:bg-primary transition-colors">
            VER REPOSITORIO
          </button>
        </div>
      )}
    </>
  );
}
