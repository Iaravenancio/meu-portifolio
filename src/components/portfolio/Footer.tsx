export function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 py-10 text-center text-xs text-muted-foreground sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <div className="font-mono">
          © {new Date().getFullYear()} Iara Venâncio Ribeiro · Built with code & curiosity.
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan animate-pulse" />
          <span className="font-mono uppercase tracking-widest">system online</span>
        </div>
      </div>
    </footer>
  );
}
