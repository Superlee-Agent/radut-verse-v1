import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const logoUrl =
    "https://cdn.builder.io/api/v1/image/assets%2F2711b768900f460f84e959042bd91f7e%2F3293657936e64761b5d866e8d5d775b7?format=webp&width=800";

  return (
    <div className="text-white">
      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 h-[48rem] w-[48rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(241,4,121,0.35),transparent)] blur-3xl" />
          <div className="absolute bottom-[-10rem] right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(closest-side,rgba(189,96,120,0.35),transparent)] blur-3xl" />
        </div>
        <div className="container grid gap-10 pb-24 pt-24 md:pt-28 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-primary" /> Live on-chain vibes
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              RadutVerse
              <span className="block bg-gradient-to-r from-[#f10479] via-[#d06786] to-white bg-clip-text text-transparent">
                Minimalist Web3 Experience
              </span>
            </h1>
            <p className="max-w-xl text-white/70 text-base sm:text-lg">
              Masuk ke dunia Web3 yang elegan dan profesional. RadutVerse
              menghadirkan pengalaman kripto yang modern, cepat, dan mudah
              dipahami untuk semua orang.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#about">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_theme(colors.primary.DEFAULT)]">
                  Mulai Jelajah
                </Button>
              </a>
              <a href="#news">
                <Button variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                  Lihat Berita
                </Button>
              </a>
            </div>
            <div className="flex items-center gap-3 pt-4">
              <img src={logoUrl} alt="RadutVerse" className="h-10 w-10 rounded" />
              <span className="text-sm text-white/60">Tema mengikuti logo resmi RadutVerse</span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative mx-auto mt-6 aspect-square w-72 max-w-full rounded-2xl border border-white/10 bg-gradient-to-br from-black to-[#1a0b15] p-4 shadow-2xl sm:w-80 lg:mt-0">
              <img src={logoUrl} alt="RadutVerse logo" className="h-full w-full rounded-xl object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative border-t border-white/10">
        <div className="container grid gap-10 py-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Tentang RadutVerse</h2>
            <p className="mt-4 text-white/70">
              RadutVerse adalah ekosistem yang berfokus pada pengalaman Web3 yang
              sederhana dan dapat diandalkan. Desain minimalis, navigasi yang
              intuitif, serta akses ke konten kripto terbaru menjadikan
              RadutVerse tempat yang nyaman bagi pemula maupun antusias web3.
            </p>
          </div>
          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold">Desain Profesional</h3>
              <p className="mt-2 text-sm text-white/70">
                Antarmuka bersih dengan tipografi tajam dan kontras yang tepat.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold">Ramah Web3</h3>
              <p className="mt-2 text-sm text-white/70">
                Nuansa neon dan gelap yang familiar bagi komunitas kripto.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold">Kinerja Cepat</h3>
              <p className="mt-2 text-sm text-white/70">
                Dibangun dengan teknologi modern untuk kecepatan dan stabilitas.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold">Fokus Komunitas</h3>
              <p className="mt-2 text-sm text-white/70">
                Berita dan pembaruan terkini, kurasi dari sumber tepercaya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="relative border-t border-white/10">
        <div className="container py-20">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Tim Inti</h2>
              <p className="mt-2 text-white/70">Orang-orang di balik RadutVerse</p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Radut", role: "Founder & Visionary" },
              { name: "Nova", role: "Lead Engineer" },
              { name: "Astra", role: "Product Designer" },
            ].map((m) => (
              <div
                key={m.name}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#f10479] to-[#bd6078] text-xl font-bold">
                  {m.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold">{m.name}</h3>
                <p className="text-sm text-white/70">{m.role}</p>
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[radial-gradient(closest-side,rgba(241,4,121,0.25),transparent)] blur-2xl transition-transform group-hover:translate-x-6 group-hover:-translate-y-3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section id="news" className="relative border-t border-white/10">
        <div className="container py-20">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Berita Terkini</h2>
              <p className="mt-2 text-white/70">Update singkat seputar RadutVerse dan web3</p>
            </div>
            <a href="#home">
              <Button variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                Kembali ke Atas
              </Button>
            </a>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Peluncuran RadutVerse v1",
                date: "2025-09-01",
                excerpt:
                  "Versi perdana dengan desain minimalis, performa tinggi, dan navigasi yang mulus.",
              },
              {
                title: "Integrasi Wallet akan hadir",
                date: "2025-10-10",
                excerpt:
                  "Kami menyiapkan dukungan koneksi wallet non-custodial untuk autentikasi yang aman.",
              },
              {
                title: "Program Komunitas",
                date: "2025-11-05",
                excerpt:
                  "Rangkaian event online untuk edukasi dan kolaborasi ekosistem Web3 di RadutVerse.",
              },
            ].map((a) => (
              <article key={a.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <time className="text-xs text-white/60">{new Date(a.date).toLocaleDateString()}</time>
                <h3 className="mt-2 text-lg font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm text-white/70">{a.excerpt}</p>
                <div className="mt-4">
                  <Button variant="link" className="p-0 text-primary">Baca Selengkapnya</Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
