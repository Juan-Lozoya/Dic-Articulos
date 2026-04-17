'use client';

import { FileText, MessageSquare, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type Docs = {
  title: string;
  decription: string;
  date: string;
  status: string;
  variant: 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link' | 'tertiary';
  revisiones: number;
  link: string;
};

export default function TableAutor() {
  const myDocs: Docs[] = [
    {
      title: 'Análisis de algoritmos cuánticos para optimización combinatoria',
      decription:
        'Este artículo presenta una revisión exhaustiva de los algoritmos cuánticos aplicados a problemas de optimización combinatoria, evaluando su eficiencia frente a métodos clásicos.',
      date: '2026-03-10',
      status: 'En revisión',
      variant: 'secondary',
      revisiones: 1,
      link: 'https://github.com/Juan-Lozoya/Dic-Articulos',
    },
    {
      title: 'Impacto de la inteligencia artificial en la educación superior latinoamericana',
      decription:
        'Estudio comparativo sobre la adopción de herramientas de IA en universidades de América Latina y su impacto en los procesos de enseñanza-aprendizaje.',
      date: '2026-02-15',
      status: 'Aprobado',
      variant: 'outline',
      revisiones: 2,
      link: 'https://github.com/Juan-Lozoya/Dic-Articulos',
    },
    {
      title: 'Redes neuronales para diagnóstico médico asistido',
      decription:
        'Desarrollo de una arquitectura de redes neuronales profundas para asistir en el diagnóstico temprano de enfermedades cardiovasculares.',
      date: '2026-03-01',
      status: 'Requiere Cambios',
      variant: 'tertiary',
      revisiones: 1,
      link: 'https://github.com/Juan-Lozoya/Dic-Articulos',
    },
  ];

  return (
    <>
      <div className="overflow-hidden border rounded-md mt-5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="max-w-50">Documento</TableHead>
              <TableHead>Fecha</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Revisiones</TableHead>
              <TableHead className="w-10" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {myDocs.map((doc) => (
              <TableRow key={doc.date} className="cursor-pointer hover:bg-muted/50">
                <TableCell>
                  <div className="flex items-start gap-2">
                    <FileText className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-foreground line-clamp-1 max-w-80 md:max-w-160">
                        {doc.title}
                      </p>
                      <p className="text-xs text-muted-foreground line-clamp-1 max-w-50 md:max-w-120">
                        {doc.decription}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">{doc.date}</TableCell>
                <TableCell>
                  <Badge variant={doc.variant}>{doc.status}</Badge>
                </TableCell>
                <TableCell>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MessageSquare className="h-3.5 w-3.5" />
                    {doc.revisiones}
                  </span>
                </TableCell>
                <TableCell>
                  <a
                    href={doc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
