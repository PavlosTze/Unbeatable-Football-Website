import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet';
import logo from '../assets/logo.webp';

const links = [
  ['Concept', '#concept'],
  ['Modes', '#modes'],
  ['Highlights', '#features'],
  ['How It Works', '#how-it-works'],
];

const Header = () => {
  const scrollToDownload = () => {
    document.querySelector('#download')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050B14]/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3 text-white">
            <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-[#35F27C]/30 bg-[#35F27C]/10 shadow-lg shadow-[#35F27C]/10">
              <img src={logo} alt="Unbeatable Football logo" className="h-full w-full object-cover" />
            </span>
            <span className="text-lg font-black tracking-[-0.03em]">Unbeatable Football</span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-medium text-white/70 transition hover:text-white">
                {label}
              </a>
            ))}
            <Button onClick={scrollToDownload} className="rounded-xl bg-[#35F27C] font-bold text-[#07111F] hover:bg-[#77f8a3]">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </nav>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button type="button" aria-label="Open menu" className="rounded-xl border border-white/15 p-2 text-white hover:bg-white/10">
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 border-l border-white/10 bg-[#07111F] text-white">
                <div className="mt-8 flex flex-col gap-5">
                  {links.map(([label, href]) => (
                    <SheetClose asChild key={href}>
                      <a href={href} className="text-lg font-semibold text-white/85">
                        {label}
                      </a>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Button onClick={scrollToDownload} className="mt-3 rounded-xl bg-[#35F27C] font-bold text-[#07111F] hover:bg-[#77f8a3]">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
