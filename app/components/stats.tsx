import { Separator } from '@/components/ui/separator';

export default function HomeStats() {
  const stats = [
    { value: '3', label: 'Roles definidos' },
    { value: '5', label: 'Estados de documento' },
    { value: '100%', label: 'Trazabilidad' },
    { value: '∞', label: 'Documentos' },
  ];
  return (
    <>
      <section className="bg-muted/50 py-12 px-4">
        <div className="container mx-auto max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-heading text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
      <Separator />
    </>
  );
}
