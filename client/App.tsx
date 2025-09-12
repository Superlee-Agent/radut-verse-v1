import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Button } from "@/components/ui/button";

const queryClient = new QueryClient();

function Header() {
  const logoUrl =
    "https://cdn.builder.io/api/v1/image/assets%2F2711b768900f460f84e959042bd91f7e%2F3293657936e64761b5d866e8d5d775b7?format=webp&width=800";
  const nav = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#team", label: "Team" },
    { href: "#news", label: "News" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src={logoUrl} alt="RadutVerse logo" className="h-8 w-8 rounded" />
          <span className="text-white font-extrabold tracking-tight text-lg">
            RadutVerse
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#news" className="hidden sm:block">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_theme(colors.primary.DEFAULT)]">
              Explore RadutVerse
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50">
      <div className="container py-8 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} RadutVerse. All rights reserved.
      </div>
    </footer>
  );
}

function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#13030f] to-[#000000]">
      <Header />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
