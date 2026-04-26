export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left */}
          <div className="text-center md:text-left">
            <p className="text-xl font-bold tracking-tight">
              Yoshitha Divi
            </p>

            <p className="text-sm text-muted-foreground mt-2">
              Thank you for visiting.
            </p>
          </div>

          {/* Right */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </p>

            <p className="text-xs text-muted-foreground mt-1">
              Designed & developed by Yoshitha
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}