import { FileText, ClipboardCheck, Shield, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function HomeRoles() {
  const roles = [
    {
      icon: FileText,
      role: 'Autor',
      items: ['Enviar documentos', 'Ver estado de envíos', 'Leer comentarios de revisores'],
    },
    {
      icon: ClipboardCheck,
      role: 'Revisor',
      items: ['Ver documentos asignados', 'Evaluar con formulario', 'Emitir recomendación'],
    },
    {
      icon: Shield,
      role: 'Árbitro',
      items: ['Supervisar todo el proceso', 'Asignar revisores', 'Filtrar y gestionar estados'],
    },
  ];

  return (
    <>
      <section id="roles" className="py-18 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-3">
              Un dashboard para cada rol
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Cada usuario accede a las herramientas que necesita según su función en el proceso.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {roles.map((item, index) => (
              <Card key={item.role} className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-card-foreground mb-4">
                    {item.role}
                  </h3>
                  <ul className="space-y-2">
                    {item.items.map((r) => (
                      <li key={r} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
