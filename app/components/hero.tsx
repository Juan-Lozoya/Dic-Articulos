'use client';

import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import RouteNames from '@/utils/routeNames';

export default function HomeHero() {
  const router = useRouter();
  return (
    <>
      <section className="py-20 px-4">
        <div className="flex flex-col items-center justify-center text-center w-full">
          <div className="bg-secondary w-fit rounded-full px-2">
            <span className="text-xs text-gray-600">Plataforma de arbitraje académico</span>
          </div>
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="font-heading text-2xl md:text-6xl font-semibold text-foreground leading-tight mb-6">
              Gestiona el arbitraje de tus
              <span className="text-muted"> publicaciones académicas</span>
            </h1>
            <p className="text-md text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Simplifica el proceso de envío, revisión y aprobación de artículos y libros académicos
              con una plataforma moderna, transparente y eficiente.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" onClick={() => router.push(RouteNames.login)} className="gap-2">
                Comenzar ahora <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#workflow">Ver cómo funciona</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Separator />
    </>
  );
}
