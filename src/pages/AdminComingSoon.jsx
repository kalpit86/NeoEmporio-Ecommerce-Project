import logo from '../assets/neoemporio-logo.png';

export default function AdminComingSoon() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center 
      bg-gradient-to-tr from-slate-900 via-gray-800 to-black text-gray-100 px-6">

      <img
        src={logo}
        alt="NeoEmporio Logo"
        className="w-28 h-28 mb-5 drop-shadow-sm opacity-90 rounded-md"
      />

      <h1 className="text-4xl font-semibold mb-3">
        Admin Portal
      </h1>
      <p className="text-base max-w-lg mb-1">
        This panel will let you manage inventory, users, and analytics.
      </p>
      <p className="text-sm opacity-60 italic">
        Coming Soon — Secure backend integration in progress.
      </p>
    </div>
  );
}
