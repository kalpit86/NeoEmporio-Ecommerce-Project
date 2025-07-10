import logo from '../assets/neoemporio-logo.png';

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center 
      bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 text-white px-6">

      <img
        src={logo}
        alt="NeoEmporio Logo"
        className="w-32 h-32 mb-6 drop-shadow-md rounded-md"
      />

      <h1 className="text-5xl font-bold tracking-tight mb-4">
        NeoEmporio
      </h1>
      <p className="text-lg max-w-xl mb-2">
        A modern and elegant e‑commerce experience is launching soon.
      </p>
      <p className="text-sm opacity-80">Stay tuned for something extraordinary.</p>
    </div>
  );
}
