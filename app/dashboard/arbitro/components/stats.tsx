'use client';

import { Clock, AlertCircle, CheckCircle, CircleXIcon } from 'lucide-react';

export default function StatsArbitro() {
  const infoPanel = [
    { key: 'pendiente', label: 'Pendiente', icon: Clock, number: 1 },
    { key: 'revision', label: 'En revisión', icon: AlertCircle, number: 1 },
    { key: 'aprobado', label: 'Aprobado', icon: CheckCircle, number: 1 },
    { key: 'rechazado', label: 'Rechazado', icon: CircleXIcon, number: 1 },
  ];

  return (
    <>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-x-3 gap-y-2">
        {infoPanel.map((info) => {
          const Icon = info.icon;

          return (
            <div
              key={info.key}
              className="shadow-md rounded-md bg-card w-full min-h-20 flex items-center px-3"
            >
              <div className="rounded-md bg-secondary w-fit p-2">
                <Icon className="text-muted-foreground" />
              </div>
              <div className="ml-3">
                <h1 className="font-semibold">{info.number}</h1>
                <span className="text-sm text-gray-600">{info.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
