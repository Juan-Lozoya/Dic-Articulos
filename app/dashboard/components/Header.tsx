import { Scale, LogOut } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

export default function Header() {
  return (
    <>
      <div className="h-15 flex items-center justify-between px-6">
        <div className="flex items-center">
          <div className="bg-primary rounded-md p-1 mr-2">
            <Scale className="text-white w-6 h-6" />
          </div>
          <div className="block">
            <h1 className="text-xl font-semibold">Diccard</h1>
            <h3 className="text-sm">Sistema de Arbitraje Academico</h3>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex space-x-2 items-center bg-primary px-3 py-1 rounded-full text-white">
            <Scale className="w-4 h-4" />
            <span className="text-sm font-semibold">María García</span>
            <Badge variant="secondary">Autor</Badge>
          </div>
          <LogOut className="hover:bg-primary hover:text-secondary rounded-md p-1 w-6 h-6 cursor-pointer" />
        </div>
      </div>
      <Separator />
    </>
  );
}
