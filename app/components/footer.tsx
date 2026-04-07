import { Separator } from '@/components/ui/separator';
import { FileText } from 'lucide-react';

export default function HomeFooter() {
  return (
    <>
      <Separator />
      <footer className="py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-primary flex items-center justify-center">
              <FileText className="h-3 w-3 text-primary-foreground" />
            </div>
            <span className="font-heading font-semibold text-foreground">Diccard</span>
          </div>
          <p>© 2026 Diccard. Plataforma de arbitraje académico.</p>
        </div>
      </footer>
    </>
  );
}
