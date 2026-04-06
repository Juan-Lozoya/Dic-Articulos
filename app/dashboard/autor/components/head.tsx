import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function HeadAutor() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-2xl">Mis Documentos</h1>
          <span className="text-sm text-gray-600">
            Gestiona tus envíos y revisa el estado de tus documentos
          </span>
        </div>
        <div>
          <Button>
            <Plus className="w-4 h-4" />
            Nuevo envío
          </Button>
        </div>
      </div>
    </>
  );
}
