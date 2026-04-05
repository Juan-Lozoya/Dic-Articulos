import { Scale, FileText, BookOpen } from "lucide-react";

export default function AuthLogin(){
  const loginOptionsRol = [
    {key: 'autor', label: 'Autor', icon: FileText},
    {key: 'revisor', label: 'Revisor', icon: BookOpen},
    {key: 'arbitro', label: 'Arbitro', icon: Scale},
  ];

  return(
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

              return (
                <button key={rol.key} type="button" className="flex flex-col items-center">
                  <Icon className="w-5 h-5"/>
                  <span>{rol.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}