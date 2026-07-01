import React from 'react';
import {Helmet} from 'react-helmet-async';
import {
    BarChart3,
    CalendarClock,
    CheckCircle,
    Flame,
    Gauge,
    Globe2,
    Goal,
    Medal,
    Shield,
    Trophy,
    Users,
} from 'lucide-react';
import {Badge} from './ui/badge';
import {Card, CardContent} from './ui/card';
import Header from './Header';
import Footer from './Footer';
import logo from '../assets/logo.webp';

const appStoreUrl = 'https://apps.apple.com/us/app/unbeatable-football/id6784974578';
const googlePlayUrl = 'https://play.google.com/store/apps/details?id=com.unbeatable.football.team';

const modes = [
    {
        icon: <Trophy className="h-6 w-6"/>,
        title: 'Champions League',
        status: 'Available now',
        description: 'Draft players from iconic Champions League team-seasons from 2000 onwards. Build the strongest possible lineup across 11 rounds and chase elite squad ratings.',
        examples: ['Real Madrid 2016-17', 'Barcelona 2008-09', 'Bayern Munich 2012-13', 'Manchester City 2022-23', 'Liverpool 2018-19'],
    },
    {
        icon: <Flame className="h-6 w-6"/>,
        title: 'Daily Challenges',
        status: 'Available now',
        description: 'Take on a fresh challenge every day. Draft above the target rating or build a squad strong enough to beat a random team-season opponent, then protect your daily streak.',
        examples: ['Daily streaks', 'Target rating goals', 'Random opponents', 'One-day objectives'],
    },
    {
        icon: <Globe2 className="h-6 w-6"/>,
        title: 'World Cup',
        status: 'Coming soon',
        description: 'Draft from legendary national-team tournament campaigns and build lineups from World Cup champions, finalists, golden generations, and unforgettable squads.',
        examples: ['Brazil 2002', 'Spain 2010', 'Germany 2014', 'France 2018', 'Argentina 2022'],
    },
    {
        icon: <CalendarClock className="h-6 w-6"/>,
        title: 'More Modes Ahead',
        status: 'Planned',
        description: 'Future updates will expand Unbeatable Football with more competitions, domestic leagues, eras, formations, player pools, and draft challenges.',
        examples: ['More eras', 'Domestic leagues', 'New competitions', 'Historical challenges'],
    },
];

const features = [
    ['Historic team-seasons', Shield],
    ['Champions League launch mode', Trophy],
    ['World Cup mode coming soon', Globe2],
    ['Daily challenges', Flame],
    ['Daily streak tracking', CalendarClock],
    ['Real-performance-based player ratings', BarChart3],
    ['11-round squad drafts', Users],
    ['Attack, midfield, defense ratings', Gauge],
    ['Goalkeeper-specific ratings', Shield],
    ['Multiple supported formations', Medal],
    ['Rating and opponent challenges', Goal],
];

const steps = [
    'Enter an 11-round draft built around legendary football team-seasons.',
    'Each round gives you a random team-season, then you choose one player for your lineup.',
    'Fit players into a formation where each position weighs attack, midfield, defense, and goalkeeping differently.',
    'Finish the draft to receive your final squad rating, clear one-off objectives, and keep your daily challenge streak alive.',
];

const teamExamples = ['Real Madrid 2016-17', 'Barcelona 2008-09', 'Bayern Munich 2012-13', 'Manchester City 2022-23', 'Liverpool 2018-19', 'Brazil 2002', 'Spain 2010', 'Argentina 2022'];

const StoreButtons = ({centered = false}) => {
    return (
        <div
            className={`flex flex-col items-start gap-3 sm:flex-row sm:items-center ${centered ? 'justify-center' : ''}`}>
            <a href={appStoreUrl} target="_blank" rel="noopener noreferrer"
               aria-label="Download Unbeatable Football on the App Store"
               className="block transition hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#35F27C]">
                <img src="/app_store.webp" alt="Download on the App Store" className="h-14 w-auto"/>
            </a>
            <a href={googlePlayUrl} target="_blank" rel="noopener noreferrer"
               aria-label="Download Unbeatable Football on Google Play"
               className="block transition hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#35F27C]">
                <img src="/play_store.webp" alt="Download on the Play Store" className="h-14 w-auto"/>
            </a>
        </div>
    );
};

const LandingPage = () => {
    return (
        <>
            <Helmet>
                <title>Unbeatable Football | Historic Football Draft Game</title>
                <meta name="description"
                      content="Draft players from legendary football team-seasons across 11 rounds, build your lineup, clear daily challenges, and protect your streak in Unbeatable Football."/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.unbeatablefootball.com/"/>
                <meta property="og:title" content="Unbeatable Football | Historic Football Draft Game"/>
                <meta property="og:description"
                      content="Draft players across 11 rounds, build a balanced lineup, clear daily challenges, and protect your streak."/>
                <meta name="image" property="og:image" content="/og-image.png"/>
                <meta property="og:image:secure_url" content="/og-image.png"/>
                <meta property="og:image:type" content="image/png"/>
                <meta property="og:image:width" content="1200"/>
                <meta property="og:image:height" content="630"/>
                <meta property="og:image:alt" content="Unbeatable Football historic football draft game"/>
                <meta property="og:site_name" content="Unbeatable Football"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="Unbeatable Football | Historic Football Draft Game"/>
                <meta name="twitter:description"
                      content="Legendary team-seasons. 11-round drafts. Daily challenges. One unbeatable lineup."/>
                <meta name="twitter:image" content="https://www.unbeatablefootball.com/og-image.png"/>
                <meta name="twitter:image:alt" content="Unbeatable Football historic football draft game"/>
            </Helmet>

            <div className="min-h-screen overflow-hidden bg-[#050B14] text-[#F5F7FA]">
                <Header/>

                <main>
                    <section className="relative border-b border-white/10 px-6 py-20 sm:py-24 lg:py-28">
                        <div
                            className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(53,242,124,0.18),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(214,168,79,0.16),transparent_25%),linear-gradient(135deg,#07111F_0%,#0B1F24_52%,#050B14_100%)]"/>
                        <div
                            className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:48px_48px]"/>

                        <div
                            className="container relative mx-auto grid gap-14 lg:grid-cols-[1.02fr_0.98fr]">
                            <div>
                                <Badge className="mb-6 border-[#35F27C]/40 bg-[#35F27C]/10 px-4 py-2 text-[#35F27C]">
                                    Launch Mode: Champions League
                                </Badge>
                                <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">
                                    Draft a Squad That Is Truly Unbeatable
                                </h1>
                                <p className="mt-7 max-w-2xl text-lg leading-8 text-[#A7B0BE] sm:text-xl">
                                    Build a lineup across 11 rounds using players from iconic football team-seasons.
                                    Every pick matters, every position changes the rating, and every draft asks whether
                                    your squad can become unbeatable.
                                </p>
                                <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">
                                    Champions League and Daily Challenges are available first. World Cup is coming
                                    soon, with more competitions, eras, formations, and challenges on the way.
                                </p>
                                <div className="mt-9">
                                    <StoreButtons/>
                                </div>
                                <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-center">
                                    {['11-round drafts', 'Daily streaks', 'Challenge objectives'].map((item) => (
                                        <div key={item}
                                             className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-semibold text-white/80">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute -inset-10 rounded-full bg-[#35F27C]/10 blur-3xl"/>
                                <div
                                    className="relative rounded-[2rem] border border-white/10 bg-[#101A2A]/85 p-5 shadow-2xl shadow-black/40 backdrop-blur">
                                    <div
                                        className="mb-5 flex items-center justify-between rounded-2xl border border-white/10 bg-[#07111F] p-4">
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.28em] text-[#D6A84F]">Round 7 of
                                                11</p>
                                            <p className="mt-1 text-lg font-bold">Random team-season: Real Madrid
                                                2016-17</p>
                                        </div>
                                        <Users className="h-7 w-7 text-[#35F27C]"/>
                                    </div>

                                    <div className="grid gap-4 sm:grid-cols-3">
                                        <div
                                            className="rounded-3xl border border-[#35F27C]/25 bg-gradient-to-br from-[#122033] to-[#0B1F24] p-5">
                                            <Badge
                                                className="mb-5 border-[#35F27C]/40 bg-[#35F27C]/10 text-[#35F27C]">Select</Badge>
                                            <p className="text-sm text-[#A7B0BE]">Forward</p>
                                            <h3 className="mt-2 text-xl font-black">Cristiano Ronaldo</h3>
                                            <div className="mt-5 flex items-end justify-between">
                                                <div>
                                                    <p className="text-xs uppercase tracking-[0.22em] text-white/50">Attack</p>
                                                    <p className="text-4xl font-black text-[#35F27C]">99</p>
                                                </div>
                                                <p className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">elite</p>
                                            </div>
                                        </div>

                                        <div
                                            className="rounded-3xl border border-[#D6A84F]/25 bg-gradient-to-br from-[#1d2635] to-[#101A2A] p-5">
                                            <Badge
                                                className="mb-5 border-[#D6A84F]/40 bg-[#D6A84F]/10 text-[#D6A84F]">Option</Badge>
                                            <p className="text-sm text-[#A7B0BE]">Midfielder</p>
                                            <h3 className="mt-2 text-xl font-black">Luka Modric</h3>
                                            <div className="mt-5 flex items-end justify-between">
                                                <div>
                                                    <p className="text-xs uppercase tracking-[0.22em] text-white/50">Midfield</p>
                                                    <p className="text-4xl font-black text-[#D6A84F]">96</p>
                                                </div>
                                                <p className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">control</p>
                                            </div>
                                        </div>

                                        <div
                                            className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#122033] to-[#07111F] p-5">
                                            <Badge
                                                className="mb-5 border-white/20 bg-white/5 text-white/75">Option</Badge>
                                            <p className="text-sm text-[#A7B0BE]">Defender</p>
                                            <h3 className="mt-2 text-xl font-black">Sergio Ramos</h3>
                                            <div className="mt-5 flex items-end justify-between">
                                                <div>
                                                    <p className="text-xs uppercase tracking-[0.22em] text-white/50">Defense</p>
                                                    <p className="text-4xl font-black text-white">94</p>
                                                </div>
                                                <p className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">leader</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 rounded-3xl border border-white/10 bg-[#07111F]/80 p-5">
                                        <div className="mb-4 flex items-center justify-between text-sm text-white/60">
                                            <span>Drafted squad rating</span>
                                            <span>Formation: 4-3-3</span>
                                        </div>
                                        {['Attack', 'Midfield', 'Defense', 'Goalkeeping'].map((label, index) => (
                                            <div key={label} className="mb-3 last:mb-0">
                                                <div className="mb-1 flex justify-between text-sm">
                                                    <span>{label}</span><span>{[94, 91, 88, 84][index]}</span></div>
                                                <div className="h-2 rounded-full bg-white/10">
                                                    <div
                                                        className="h-2 rounded-full bg-gradient-to-r from-[#35F27C] to-[#D6A84F]"
                                                        style={{width: `${[94, 91, 88, 84][index]}%`}}/>
                                                </div>
                                            </div>
                                        ))}
                                        <div
                                            className="mt-5 rounded-2xl border border-[#D6A84F]/25 bg-[#D6A84F]/10 p-4 text-left">
                                            <p className="text-xs uppercase tracking-[0.22em] text-[#D6A84F]">Challenge</p>
                                            <p className="mt-2 font-bold text-white">Draft a squad rated 90+ or beat a
                                                random team-season opponent.</p>
                                            <div
                                                className="mt-4 flex flex-wrap items-center gap-2 text-sm text-white/70">
                                                <span
                                                    className="rounded-full border border-[#35F27C]/25 bg-[#35F27C]/10 px-3 py-1 text-[#35F27C]">Daily streak: 6 days</span>
                                                <span>Complete today's challenge to keep it alive.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="concept" className="px-6 py-20 sm:py-24">
                        <div className="container mx-auto grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                            <div>
                                <Badge className="mb-5 border-[#D6A84F]/40 bg-[#D6A84F]/10 text-[#D6A84F]">The Core
                                    Idea</Badge>
                                <h2 className="text-4xl font-black tracking-[-0.035em] sm:text-5xl">Every round starts
                                    with a legendary team-season.</h2>
                                <p className="mt-6 text-lg leading-8 text-[#A7B0BE]">
                                    Unbeatable Football does not treat clubs or countries as generic teams. In every
                                    round, the pool is tied to a specific season or tournament campaign, so Real Madrid
                                    2016-17 and Real Madrid 2013-14 are different sources of players.
                                </p>
                                <p className="mt-4 text-lg leading-8 text-[#A7B0BE]">
                                    Your job is to read the board, choose the right player, and build a balanced lineup
                                    across attack, midfield, defense, and goalkeeping.
                                </p>
                            </div>
                            <div className="grid gap-3 sm:grid-cols-2">
                                {teamExamples.map((team) => (
                                    <div key={team}
                                         className="rounded-2xl border border-white/10 bg-[#101A2A] p-4 font-semibold text-white/90 shadow-lg shadow-black/10">
                                        <CheckCircle className="mb-3 h-5 w-5 text-[#35F27C]"/>
                                        {team}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="modes" className="bg-[#07111F] px-6 py-20 sm:py-24">
                        <div className="container mx-auto">
                            <div className="mx-auto mb-12 max-w-3xl text-center">
                                <Badge className="mb-5 border-white/15 bg-white/5 text-white/80">Modes</Badge>
                                <h2 className="text-4xl font-black tracking-[-0.035em] sm:text-5xl">Built to expand
                                    across football history</h2>
                                <p className="mt-5 text-lg leading-8 text-[#A7B0BE]">Champions League is the launch
                                    draft pool, while Daily Challenges add fresh objectives and streak tracking.
                                    Unbeatable Football is built to expand across clubs, countries, competitions, and
                                    generations.</p>
                            </div>
                            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                                {modes.map((mode) => (
                                    <Card key={mode.title}
                                          className="border-white/10 bg-[#101A2A] text-white shadow-xl shadow-black/20">
                                        <CardContent className="p-7">
                                            <div className="mb-6 flex items-center justify-between">
                                                <div
                                                    className="rounded-2xl bg-[#35F27C]/10 p-3 text-[#35F27C]">{mode.icon}</div>
                                                <Badge
                                                    className="border-[#D6A84F]/40 bg-[#D6A84F]/10 text-[#D6A84F]">{mode.status}</Badge>
                                            </div>
                                            <h3 className="text-2xl font-black">{mode.title}</h3>
                                            <p className="mt-4 min-h-36 leading-7 text-[#A7B0BE]">{mode.description}</p>
                                            <div className="mt-6 flex flex-wrap gap-2">
                                                {mode.examples.map((example) => <span key={example}
                                                                                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">{example}</span>)}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="features" className="px-6 py-20 sm:py-24">
                        <div className="container mx-auto">
                            <div className="mb-12 max-w-3xl">
                                <Badge
                                    className="mb-5 border-[#35F27C]/40 bg-[#35F27C]/10 text-[#35F27C]">Highlights</Badge>
                                <h2 className="text-4xl font-black tracking-[-0.035em] sm:text-5xl">Draft with history,
                                    balance, and tactical intent</h2>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {features.map(([label, Icon]) => (
                                    <div key={label}
                                         className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-[#35F27C]/35 hover:bg-[#35F27C]/[0.06]">
                                        <Icon className="mb-5 h-6 w-6 text-[#D6A84F]"/>
                                        <h3 className="text-lg font-bold">{label}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="how-it-works" className="bg-[#0B1F24] px-6 py-20 sm:py-24">
                        <div className="container mx-auto grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                            <div>
                                <Badge className="mb-5 border-[#D6A84F]/40 bg-[#D6A84F]/10 text-[#D6A84F]">How It
                                    Works</Badge>
                                <h2 className="text-4xl font-black tracking-[-0.035em] sm:text-5xl">Draft. Fit. Rate.
                                    Complete challenges.</h2>
                            </div>
                            <div className="grid gap-4">
                                {steps.map((step, index) => (
                                    <div key={step}
                                         className="flex gap-5 rounded-3xl border border-white/10 bg-[#101A2A] p-6">
                                        <div
                                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#35F27C] font-black text-[#07111F]">{index + 1}</div>
                                        <p className="text-lg leading-8 text-white/85">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="download" className="relative px-6 py-20 text-center sm:py-24">
                        <div
                            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(53,242,124,0.15),transparent_36%)]"/>
                        <div
                            className="container relative mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-[#101A2A]/85 px-6 py-14 shadow-2xl shadow-black/30 backdrop-blur sm:px-12">
                            <div
                                className="mx-auto mb-6 flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl border border-[#D6A84F]/40 bg-[#07111F] shadow-2xl shadow-[#35F27C]/15">
                                <img src={logo} alt="Unbeatable Football logo" className="h-full w-full object-cover"/>
                            </div>
                            <h2 className="text-4xl font-black tracking-[-0.035em] sm:text-5xl">Can you create an
                                Unbeatable Football Team today?</h2>
                            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#A7B0BE]">Download Unbeatable
                                Football and start drafting lineups from legendary Champions League team-seasons.
                                Complete daily challenges, protect your streak, and prepare for World Cup.</p>
                            <div className="mt-8">
                                <StoreButtons centered/>
                            </div>
                            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-white/70">
                                <span>Historically informed ratings</span>
                                <span>•</span>
                                <span>11-round squad drafts</span>
                                <span>•</span>
                                <span>Daily challenge streaks</span>
                                <span>•</span>
                                <span>More competitions and challenges on the way</span>
                            </div>
                        </div>
                    </section>
                </main>

                <Footer/>
            </div>
        </>
    );
};

export default LandingPage;
