'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Star } from 'lucide-react';

export default function TableRevisor() {
  const myDocs = [
    {
      title: 'Análisis de algoritmos cuánticos para optimización combinatoria',
      autor: 'María García',
      status: { label: 'En revisión', variant: 'secondary' },
      eval: 4,
      link: 'https://github.com/Juan-Lozoya/Dic-Articulos',
    },
    {
      title: 'Impacto de la inteligencia artificial en la educación superior latinoamericana',
      autor: 'María García',
      status: { label: 'Aprobado', variant: 'default' },
      eval: 5,
      link: 'https://github.com/Juan-Lozoya/Dic-Articulos',
    },
  ];
  return (
    <>
      <div className="overflow-hidden border rounded-md mt-5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Documento</TableHead>
              <TableHead className="text-center">Autor</TableHead>
              <TableHead className="text-center">Estado</TableHead>
              <TableHead className="text-center">Mi Evaluación</TableHead>
              <TableHead className="w-10" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {myDocs.map((doc) => (
              <TableRow key={doc.eval} className='className="cursor-pointer hover:bg-muted/50"'>
                <TableCell>
                  <p className="font-medium text-foreground line-clamp-1">{doc.title}</p>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground text-center">
                  {doc.autor}
                </TableCell>
                <TableCell className="text-center">
                  <Badge>{doc.status.label}</Badge>
                </TableCell>
                <TableCell className="flex justify-center">
                  <span className="flex items-center gap-1 text-sm text-status-approved">
                    <Star className="h-3.5 w-3.5" /> {doc.eval}/5
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
