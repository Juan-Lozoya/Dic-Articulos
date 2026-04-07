'use client';

import { Scale } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import RouteNames from '@/utils/routeNames';

export default function HomeNav() {
  const router = useRouter();
  return (
    <>
      <nav className="h-15 flex items-center justify-between px-8 top-0 w-full z-50 backdrop-blur-md">
        <div className="flex items-center space-x-2">
          <div className="bg-primary rounded-md p-2">
            <Scale className="text-white w-5 h-5" />
          </div>
          <h1 className="text-xl font-semibold">Diccard</h1>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">
            Características
          </a>
          <a href="#workflow" className="hover:text-foreground transition-colors">
            Flujo
          </a>
          <a href="#roles" className="hover:text-foreground transition-colors">
            Roles
          </a>
        </div>

        <Button onClick={() => router.push(RouteNames.login)}>Iniciar sesión</Button>
      </nav>
      <Separator />
    </>
  );
}
