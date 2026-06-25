import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Unbeatable Football</title>
        <meta name="description" content="Privacy Policy for Unbeatable Football." />
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
            <h1 className="mb-3 text-4xl font-black">Privacy Policy</h1>
            <p className="mb-8 text-white/60"><strong>Last updated:</strong> June 2026</p>

            <div className="space-y-8 text-white/80">
              <section>
                <h2 className="mb-3 text-2xl font-bold text-white">1. Information We Collect</h2>
                <p>Unbeatable Football may collect basic app usage data, device diagnostics, crash reports, and gameplay preferences to operate and improve the game. If accounts, leaderboards, purchases, or cloud features are enabled, we may collect the information needed to provide those services.</p>
              </section>
              <section>
                <h2 className="mb-3 text-2xl font-bold text-white">2. How We Use Information</h2>
                <p>We use information to provide gameplay features, improve ratings and simulations, fix bugs, monitor app performance, respond to support requests, and keep the service secure.</p>
              </section>
              <section>
                <h2 className="mb-3 text-2xl font-bold text-white">3. Third-Party Services</h2>
                <p>The app and website may use platform services such as Apple App Store, Google Play, analytics, crash reporting, hosting, and payment providers. These services are governed by their own privacy policies.</p>
              </section>
              <section>
                <h2 className="mb-3 text-2xl font-bold text-white">4. Data Sharing</h2>
                <p>We do not sell personal information. We may share data with service providers that help us operate the app, comply with law, prevent abuse, or protect our rights and users.</p>
              </section>
              <section>
                <h2 className="mb-3 text-2xl font-bold text-white">5. Contact</h2>
                <p>For privacy questions or data requests, contact <a href="mailto:tzegianapps@gmail.com" className="text-[#35F27C] underline">tzegianapps@gmail.com</a>.</p>
              </section>
            </div>
          </article>
        </main>
      </div>
    </>
  );
};

export default PrivacyPolicy;
