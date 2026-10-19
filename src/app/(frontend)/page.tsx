// Placeholder until the prototype design is ported (task 2).
export default function HomePage() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-6 bg-lime px-4 text-center">
      <h1 className="text-5xl font-bold">tai</h1>
      <p className="text-lg">Pride of Africa</p>
      <a
        className="rounded-lg bg-forest px-6 py-3 font-semibold text-white focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-amber"
        href="https://wa.me/255755702121"
      >
        Chat on WhatsApp
      </a>
    </section>
  )
}
