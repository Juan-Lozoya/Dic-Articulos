'use client';

export default function StatsRevisor() {
  const myDocs = [
    { key: 'pend', label: 'Pendientes', number: 0, variant: 'default' },
    { key: 'eval', label: 'Evaluados', number: 2, variant: 'secondary' },
    { key: 'total', label: 'Total asignados', number: 2, variant: 'outline' },
  ];

  return (
    <>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-2">
        {myDocs.map((doc) => (
          <div key={doc.key} className="shadow-md rounded-md bg-card w-full min-h-20">
            <div className="p-4">
              <h1 className="font-semibold text-md">{doc.label}</h1>
              <span className={`text-lg text-${doc.variant}`}>{doc.number}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
