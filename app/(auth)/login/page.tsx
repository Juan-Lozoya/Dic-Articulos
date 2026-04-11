'use client';

import { Scale, FileText, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Data {
  role: string;
  email: string;
}

export default function AuthLogin() {
  const [data, setData] = useState<Data>({
    role: 'autor',
    email: '',
  });
  const router = useRouter();
  const loginOptionsRol = [
    { key: 'autor', label: 'Autor', icon: FileText },
    { key: 'revisor', label: 'Revisor', icon: BookOpen },
    { key: 'arbitro', label: 'Arbitro', icon: Scale },
  ];

  const handleRoute = () => {
    const rol = data.role;

    router.push(`/dashboard/${rol}`);
  };

  const handleSubmit = () => {
    console.log('handle');
    handleRoute();
  };

  const handleLegend = () =>
    data.role == 'autor'
      ? 'Enviar y dar seguimiento a documentos'
      : data.role == 'revisor'
        ? 'Evaluar documentos asignados'
        : 'Supervisar todo el proceso';

  return (
    <>
      <div className="px-3 py-4">
        <div className="py-1">
          <h1>Iniciar Sesion</h1>
          <span className="text-gray-600 text-sm">Selecciona tu rol e ingresa el correo</span>
        </div>
        <div className="py-1">
          <span className="text-gray-600 text-sm">Rol:</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {loginOptionsRol.map((rol) => (
              <Button
                key={rol.key}
                type="button"
                className="flex flex-col items-center h-15"
                variant={rol.key == data.role ? 'default' : 'outline'}
                onClick={() => setData({ ...data, role: rol.key })}
              >
                <rol.icon className="w-5 h-5" />
                <span>{rol.label}</span>
              </Button>
            ))}
          </div>
          <span className="text-gray-600 text-xs">{handleLegend()}</span>
        </div>

        <div className="py-2">
          <span className="text-gray-600 text-sm">Correo Electronico:</span>
          <div>
            <Input
              type="email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="correo@ejemplo.com"
            />
          </div>
        </div>

        <div className="py-1">
          <Button className="w-full" onClick={handleSubmit}>
            Ingresar
          </Button>
        </div>
      </div>
    </>
  );
}
