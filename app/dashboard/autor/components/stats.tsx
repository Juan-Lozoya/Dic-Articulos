import { Badge } from '@/components/ui/badge';

export default function StatsAutor() {
  const stats = [
    { key: 'pendiente', label: 'Pendiente', number: 0, variant: 'default' },
    { key: 'revision', label: 'En revisión', number: 1, variant: 'secondary' },
    { key: 'aprobado', label: 'Aprobado', number: 1, variant: 'outline' },
    { key: 'rechazado', label: 'Rechazado', number: 1, variant: 'destructive' },
  ];
  return (
    <>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-2">
        {stats.map((stat) => (
          <div key={stat.key} className="shadow-md rounded-md bg-card w-full min-h-20">
            <div className="p-2">
              <div className="w-full flex items-center justify-start">
                <Badge>{stat.label}</Badge>
              </div>
              <div className="w-full ml-3 text-lg">{stat.number}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
