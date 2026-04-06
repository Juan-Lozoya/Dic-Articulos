'use client';

import { Scale, FileText, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthLogin() {
  const [selectedRole, setSelectedRole] = useState<string>('autor');
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const loginOptionsRol = [
    { key: 'autor', label: 'Autor', icon: FileText },
    { key: 'revisor', label: 'Revisor', icon: BookOpen },
    { key: 'arbitro', label: 'Arbitro', icon: Scale },
  ];

  const handleSubmit = () => {
    console.log('handle');
    if (email.slice() == '') return;
  };

  const handleLegend = () =>
    selectedRole == 'autor'
      ? 'Enviar y dar seguimiento a documentos'
      : selectedRole == 'revisor'
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
            {loginOptionsRol.map((rol) => {
              const Icon = rol.icon;
              const isActive: boolean = rol.key == selectedRole;

              return (
                <Button
                  key={rol.key}
                  type="button"
                  className="flex flex-col items-center h-15"
                  variant={isActive ? 'default' : 'outline'}
                  onClick={() => setSelectedRole(rol.key)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{rol.label}</span>
                </Button>
              );
            })}
          </div>
          <span className="text-gray-600 text-xs">{handleLegend()}</span>
        </div>

        <div className="py-2">
          <span className="text-gray-600 text-sm">Correo Electronico:</span>
          <div>
            <Input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
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
