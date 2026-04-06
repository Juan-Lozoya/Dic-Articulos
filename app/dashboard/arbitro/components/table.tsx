'use client';

import { FileText, ExternalLink } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function TableArbitro() {
  return (
    <>
      <div className="overflow-hidden border rounded-md mt-5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Documento</TableHead>
              <TableHead>Autor</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Revisores</TableHead>
              <TableHead>Progreso</TableHead>
              <TableHead className="w-10" />
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableCell>
              <div className="flex items-start gap-2">
                <FileText className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <div>
                  <p className="font-medium text-foreground line-clamp-1 max-w-80 md:max-w-160">
                    Análisis de algoritmos cuánticos para optimización combinatoria
                  </p>
                </div>
              </div>
            </TableCell>
            <TableCell>María García</TableCell>
            <TableCell>En Revision</TableCell>
            <TableCell>2</TableCell>
            <TableCell>1/2</TableCell>
            <TableCell>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              </a>
            </TableCell>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
