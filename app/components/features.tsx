import { Users, Shield, CheckCircle, Send, ClipboardCheck, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function HomeFeatures() {
  const features = [
    {
      icon: Send,
      title: 'Envío de documentos',
      description:
        'Los autores envían título, resumen y enlace al documento de forma sencilla y organizada.',
    },
    {
      icon: ClipboardCheck,
      title: 'Evaluación estructurada',
      description: 'Formularios de evaluación con calificación, comentarios y recomendación clara.',
    },
    {
      icon: Shield,
      title: 'Supervisión completa',
      description:
        'El árbitro tiene visibilidad total: asigna revisores, filtra por estado y supervisa tiempos.',
    },
    {
      icon: CheckCircle,
      title: 'Estados visuales',
      description:
        'Indicadores de color para cada estado: en revisión, aprobado, rechazado o requiere cambios.',
    },
    {
      icon: Users,
      title: 'Gestión de roles',
      description:
        'Dashboards diferenciados para autores, revisores y árbitros con permisos específicos.',
    },
    {
      icon: Award,
      title: 'Historial y comentarios',
      description:
        'Seguimiento completo del proceso con historial de revisiones y comentarios internos.',
    },
  ];

  return (
    <>
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-3">
              Características principales
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Todo lo que necesitas para gestionar el proceso de revisión académica de principio a
              fin.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="border-border bg-card hover:shadow-md transition-shadow"
              >
                <CardContent>
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
