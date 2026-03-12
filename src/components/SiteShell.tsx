import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { SiteNavbar } from "@/components/SiteNavbar";
import { SiteFooter } from "@/components/SiteFooter";

export const SiteShell = ({ children }: { children: React.ReactNode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNavbar
        mobileOpen={mobileMenuOpen}
        onMobileToggle={() => setMobileMenuOpen((v) => !v)}
      />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
};
