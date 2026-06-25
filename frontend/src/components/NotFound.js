import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Trophy } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Unbeatable Football</title>
        <meta name="description" content="The page you're looking for could not be found." />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-[#050B14] p-4 text-white">
        <Card className="w-full max-w-md border-white/10 bg-[#101A2A] text-white shadow-2xl shadow-black/30">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#35F27C]/10 text-[#35F27C]">
              <Trophy className="h-10 w-10" />
            </div>
            <CardTitle className="text-3xl font-black">Page Not Found</CardTitle>
            <CardDescription className="text-white/60">This route is not part of the current Unbeatable Football website.</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button asChild className="rounded-xl bg-[#35F27C] font-bold text-[#07111F] hover:bg-[#77f8a3]">
              <Link to="/">Go Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default NotFound;
