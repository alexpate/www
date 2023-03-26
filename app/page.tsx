import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="pt-32 pb-16">
        <h1 className="text-2xl font-light leading-normal max-w-2xl text-white/80">
          A design-focused product engineer partnering with startups to help
          build best-in-class products. Currently building the future of web3 at
          MoonPay.
        </h1>

        <Link href="/profile" className="text-white block mt-8">
          View my profile →
        </Link>
      </section>

      <section className="pt-10 pb-16">
        <h2 className="font-normal text-lg mb-4 text-white">Projects</h2>
        <div className="flex flex-col gap-4">
          <div className="bg-black/20 rounded-lg p-6">
            <h4 className="text-white font-medium text-lg">Alpha One</h4>
            <p className="text-white/60">
              This is a description for the project
            </p>
          </div>
          <div className="bg-black/20 rounded-lg p-6">
            <h4 className="text-white font-medium text-lg">Duo</h4>
            <p className="text-white/60">
              This is a description for the project
            </p>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-16">
        <h2 className="font-normal text-lg mb-4 text-white">Recent posts</h2>
        <div className="flex flex-col gap-4">
          <div className="bg-black/20 rounded-lg p-6">
            <h4 className="text-white font-medium text-lg">Alpha One</h4>
            <p className="text-white/60">
              This is a description for the project
            </p>
          </div>
          <div className="bg-black/20 rounded-lg p-6">
            <h4 className="text-white font-medium text-lg">Alpha One</h4>
            <p className="text-white/60">
              This is a description for the project
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
