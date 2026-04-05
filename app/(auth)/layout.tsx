export default function AuthLayout({children}: {children: React.ReactNode}){
  return(
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="rounded-md shadow-md min-w-20 min-h-40">
          {children}
        </div>
      </div>
    </>
  )
}