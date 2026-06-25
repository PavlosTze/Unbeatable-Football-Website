import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.webp';

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-[#050B14]">
            <div className="container mx-auto px-6 py-12">
                <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
                    <div>
                        <div className="mb-4 flex items-center gap-3">
            <span
                className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-[#35F27C]/30 bg-[#35F27C]/10 shadow-lg shadow-[#35F27C]/10">
              <img src={logo} alt="Unbeatable Football logo" className="h-full w-full object-cover"/>
            </span>
                            <span className="font-black text-white">Unbeatable Football</span>
                        </div>
                        <p className="max-w-md text-sm leading-6 text-white/60">
                            A premium historical football draft game for building lineups from legendary team-seasons,
                            clearing daily challenges, and protecting streaks.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-4 font-bold text-white">Product</h4>
                        <div className="flex flex-col gap-2 text-sm text-white/60">
                            <a href="/#concept" className="hover:text-white">Concept</a>
                            <a href="/#modes" className="hover:text-white">Modes</a>
                            <a href="/#features" className="hover:text-white">Highlights</a>
                            <a href="/#download" className="hover:text-white">Download</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-4 font-bold text-white">Support</h4>
                        <div className="flex flex-col gap-2 text-sm text-white/60">
                            <a href="mailto:tzegianapps@gmail.com" className="hover:text-white">Contact</a>
                            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
                            <Link to="/csae-policy" className="hover:text-white">CSAE Policy</Link>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/45">
                    © 2026 Unbeatable Football. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
