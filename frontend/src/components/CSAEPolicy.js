import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

const CSAEPolicy = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>CSAE Policy | Unbeatable Football</title>
        <meta name="description" content="Content Safety and Abuse Enforcement Policy for Unbeatable Football." />
      </Helmet>
      <div className="min-h-screen bg-[#050B14] text-white">
        <header className="border-b border-white/10 bg-[#07111F]">
          <div className="container mx-auto flex items-center justify-between px-6 py-4">
            <Button variant="ghost" className="text-white hover:bg-white/10" onClick={() => navigate('/')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            <div className="flex items-center gap-3 font-black">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#35F27C]/10 text-[#35F27C]"><Trophy className="h-5 w-5" /></span>
              Unbeatable Football
            </div>
          </div>
        </header>

        <main className="container mx-auto px-6 py-12">
          <article className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-[#101A2A] p-8">
            <h1 className="mb-3 text-4xl font-black">CSAE Policy</h1>
            <p className="mb-8 text-white/60"><strong>Last updated:</strong> June 2026</p>

            <div className="space-y-8 text-white/80">
              <section>
                <h2 className="mb-3 text-2xl font-bold text-white">1. Our Commitment</h2>
                <p>Unbeatable Football does not tolerate child sexual abuse or exploitation, grooming, harassment, threats, hate speech, spam, scams, or other abusive behavior in any user-generated or community feature.</p>
              </section>
              <section>
                <h2 className="mb-3 text-2xl font-bold text-white">2. Enforcement</h2>
                <p>When violations are identified, we may remove content, restrict access, suspend accounts, preserve evidence, and report serious violations to the appropriate authorities or platform providers where required.</p>
              </section>
              <section>
                <h2 className="mb-3 text-2xl font-bold text-white">3. Reporting</h2>
                <p>To report abuse, contact <a href="mailto:tzegianapps@gmail.com" className="text-[#35F27C] underline">tzegianapps@gmail.com</a>. For immediate danger, contact local emergency services or law enforcement.</p>
              </section>
              <section>
                <h2 className="mb-3 text-2xl font-bold text-white">4. Updates</h2>
                <p>This policy may be updated as the app adds new online, community, or account-based features.</p>
              </section>
            </div>
          </article>
        </main>
      </div>
    </>
  );
};

export default CSAEPolicy;
