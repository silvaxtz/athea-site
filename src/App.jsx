export default function AtheaAtelier3D() {
  const whatsapp = "https://wa.me/5571999999999";
  const shopee = "https://shopee.com.br/";
  const instagram = "https://instagram.com/athea.atelier3d";

  const produtos = [
    {
      nome: "Produtos personalizados",
      texto:
        "Criamos peças em 3D sob encomenda, de acordo com sua ideia, modelo, cor e necessidade.",
      icone: "🎨",
    },
    {
      nome: "Decoração e presentes",
      texto:
        "Itens criativos para casa, quarto, escritório, setup, lembrancinhas e datas especiais.",
      icone: "🎁",
    },
    {
      nome: "Utilidades e soluções 3D",
      texto:
        "Suportes, organizadores, acessórios, peças funcionais e várias outras opções em impressão 3D.",
      icone: "🧩",
    },
  ];

  return (
    <main className="min-h-screen bg-[#071f1f] text-white">
      <section className="px-6 py-8 md:px-16 lg:px-24 bg-gradient-to-br from-[#061717] via-[#0b3434] to-[#071f1f]">
        <nav className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Logo Athea Atelier 3D"
              className="h-16 w-16 rounded-2xl object-cover shadow-2xl border-2 border-[#d4af37] bg-white"
            />

            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-[0.16em] text-[#d4af37]">
                ATHEA ATELIER
              </h1>

              <p className="text-xs md:text-sm tracking-[0.28em] text-white/70">
                IMPRESSÃO 3D
              </p>
            </div>
          </div>

          <a
            href={instagram}
            className="hidden md:block rounded-full border border-[#d4af37]/50 px-5 py-3 text-sm font-semibold text-[#d4af37]"
          >
            Instagram
          </a>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center pt-20 pb-16">
          <div>
            <span className="inline-block rounded-full border border-[#d4af37]/40 bg-white/5 px-4 py-2 text-sm text-[#f7df9e]">
              ✨ Produtos criativos feitos em impressão 3D
            </span>

            <h2 className="mt-7 text-5xl md:text-7xl font-bold leading-tight">
              Athea Atelier 3D
            </h2>

            <p className="mt-5 text-2xl md:text-3xl text-[#d4af37] font-semibold">
              Peças personalizadas para decorar, presentear, vender e muito
              mais.
            </p>

            <p className="mt-6 max-w-xl text-lg text-white/75 leading-relaxed">
              Site de amostra para apresentar sua marca, seus produtos e muito
              mais, levando o cliente direto para compra na Shopee, WhatsApp ou
              Instagram.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <a
                href={shopee}
                className="text-center rounded-full bg-[#d4af37] px-7 py-4 font-bold text-[#071f1f] shadow-2xl"
              >
                Comprar na Shopee
              </a>

              <a
                href={whatsapp}
                className="text-center rounded-full border border-white/20 px-7 py-4 font-semibold text-white"
              >
                Chamar no WhatsApp
              </a>

              <a
                href={instagram}
                className="text-center rounded-full border border-[#d4af37]/50 px-7 py-4 font-semibold text-[#d4af37]"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md overflow-hidden rounded-[2.5rem] border border-[#d4af37]/40 bg-gradient-to-br from-[#123737] to-[#071f1f] shadow-2xl text-center">
            <div className="flex flex-col items-center justify-center px-8 py-10 relative">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[#0fdfc7] to-[#d4af37]" />

              <div className="relative z-10 flex flex-col items-center">
                <img
                  src="/logo.png"
                  alt="Logo Athea Atelier 3D"
                  className="h-56 w-56 object-cover rounded-full border-4 border-[#d4af37] shadow-2xl bg-white"
                />

                <h3 className="mt-8 text-5xl font-bold tracking-[0.2em] text-[#d4af37]">
                  ATHEA
                </h3>

                <p className="mt-2 text-2xl tracking-[0.35em] text-white">
                  ATELIER
                </p>

                <p className="mt-5 text-white/70 max-w-sm">
                  Sua logo aparecerá aqui quando o site estiver publicado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="produtos"
        className="bg-[#f8f5ed] text-[#071f1f] px-6 py-20 md:px-16 lg:px-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#0f7f75] font-semibold tracking-[0.25em]">
              CATÁLOGO
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              O que podemos criar
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-black/60 text-lg">
              Trabalhamos com diversos tipos de produtos em impressão 3D. Esses
              são apenas alguns exemplos do que podemos fazer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {produtos.map((item) => (
              <div
                key={item.nome}
                className="rounded-[2rem] bg-white p-7 shadow-xl border border-black/5"
              >
                <div className="h-16 w-16 rounded-2xl bg-[#071f1f] text-[#d4af37] flex items-center justify-center mb-6 text-3xl">
                  {item.icone}
                </div>

                <h3 className="text-2xl font-bold">{item.nome}</h3>

                <p className="mt-3 text-black/65 leading-relaxed">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16 lg:px-24 bg-[#071f1f]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#d4af37] font-semibold tracking-[0.25em]">
              SOBRE A MARCA
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Criatividade em cada camada.
            </h2>

            <p className="mt-5 text-white/70 text-lg leading-relaxed">
              A Athea Atelier 3D cria produtos personalizados com visual bonito,
              acabamento cuidadoso e opções de cores para cada pedido.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "Peças personalizadas sob encomenda",
              "Presentes, decoração e lembrancinhas",
              "Acessórios, suportes e organizadores",
              "E muitas outras opções em impressão 3D",
            ].map((texto) => (
              <div
                key={texto}
                className="flex items-center gap-4 rounded-2xl bg-white/10 border border-white/10 p-5"
              >
                <span className="text-[#d4af37]">★</span>

                <span className="font-semibold">{texto}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16 lg:px-24 bg-gradient-to-r from-[#0f7f75] to-[#071f1f] text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          Gostou de alguma peça?
        </h2>

        <p className="mt-4 text-white/75 text-lg">
          Acesse a loja, chame no WhatsApp ou acompanhe as novidades no
          Instagram.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={shopee}
            className="rounded-full bg-[#d4af37] px-8 py-4 font-bold text-[#071f1f] shadow-2xl"
          >
            Shopee
          </a>

          <a
            href={whatsapp}
            className="rounded-full bg-white/10 border border-white/20 px-8 py-4 font-bold text-white"
          >
            WhatsApp
          </a>

          <a
            href={instagram}
            className="rounded-full bg-white/10 border border-white/20 px-8 py-4 font-bold text-white"
          >
            Instagram
          </a>
        </div>
      </section>

      <footer className="px-6 py-8 bg-[#041313] text-center text-white/60">
        <p className="mb-3 text-[#d4af37]">ATHEA ATELIER 3D</p>

        <p>© 2026 Athea Atelier 3D. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}