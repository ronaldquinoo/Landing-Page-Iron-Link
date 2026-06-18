export default function Footer() {
  return (
    <footer className="w-full py-12 px-10 flex flex-col items-center gap-4 bg-surface-container-lowest border-t-4 border-surface-container-high">
      <div className="flex gap-8 mb-4">
        <a className="font-mono text-[10px] tracking-tight font-bold uppercase text-on-surface hover:text-primary transition-colors" href="#">VER GITHUB</a>
        <a className="font-mono text-[10px] tracking-tight font-bold uppercase text-on-surface hover:text-primary transition-colors" href="#">DOCUMENTACIÓN</a>
        <a className="font-mono text-[10px] tracking-tight font-bold uppercase text-on-surface hover:text-primary transition-colors" href="#">CONTACTO EQUIPO</a>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="font-mono text-[10px] tracking-tight font-bold uppercase text-on-surface-variant">© 2024 EQUIPO DESARROLLADOR ESTUDIANTIL</div>
        <div className="w-12 h-px bg-outline-variant"></div>
        <div className="text-[8px] font-mono font-medium text-on-surface-variant/80 uppercase text-center">SISTEMA_COMPILADO: V0.8.2 // PROYECTO UNIVERSITARIO SIN FINES DE LUCRO</div>
      </div>
    </footer>
  );
}
