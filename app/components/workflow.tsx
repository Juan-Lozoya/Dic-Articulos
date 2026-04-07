export default function HomeWorkflow() {
  const flow = [
    {
      step: '01',
      title: 'El autor envía el documento',
      description: 'Sube título, resumen y enlace al archivo para iniciar el proceso.',
      color: 'bg-secondary',
    },
    {
      step: '02',
      title: 'El árbitro asigna revisores',
      description: 'Selecciona los revisores más adecuados para evaluar el contenido.',
      color: 'bg-primary',
    },
    {
      step: '03',
      title: 'Los revisores evalúan',
      description: 'Completan el formulario de evaluación con calificación y recomendación.',
      color: 'bg-secondary',
    },
    {
      step: '04',
      title: 'Se define el estado final',
      description: 'El árbitro revisa evaluaciones y determina la decisión final.',
      color: 'bg-primary',
    },
  ];
  return (
    <>
      <section id="workflow" className="py-18 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-3">
              Flujo de trabajo
            </h2>
            <p className="text-muted-foreground">Un proceso claro y estructurado en 4 pasos.</p>
          </div>
          <div className="space-y-0">
            {flow.map((item, i) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div
                    className={`h-10 w-10 rounded-full ${item.color} flex items-center justify-center text-sm font-bold text-primary-foreground shrink-0`}
                  >
                    {item.step}
                  </div>
                  {i < 3 && <div className="w-px h-16 bg-border" />}
                </div>
                <div className="pt-1.5 pb-8">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
