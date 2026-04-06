import Header from './components/Header';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <div className="p-6">{children}</div>
      </div>
    </>
  );
}
