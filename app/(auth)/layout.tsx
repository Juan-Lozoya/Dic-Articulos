export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center mb-8">
          <h1 className="text-shadow-md font-semibold text-5xl">DICCARD</h1>
          <span className="text-gray-600">Sistema de Arbitraje Académico</span>
        </div>

        <div className="rounded-md shadow-md min-w-20 min-h-40">{children}</div>
      </div>
    </>
  );
}
