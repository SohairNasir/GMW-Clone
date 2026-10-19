import { useState } from "react";

const inputClass =
  "w-full bg-black text-white placeholder-white border border-white rounded-[3px] !px-4 !py-3 text-sm " +
  "outline-none transition-all duration-200 hover:bg-white/5 focus:border-white focus:ring-2 focus:ring-white/40";

function Row({ label, children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] !gap-3 md:!gap-8 items-start">
      <h3 className="text-white font-bold text-base md:!pt-3">{label}</h3>
      <div className="flex flex-col  !gap-5">{children}</div>
    </div>
  );
}

export default function Login() {
  // Only used for the Show/Hide password button (UI only, no form data).
  const [showPass, setShowPass] = useState(false);

  return (
    <main className="min-h-screen flex justify-center items-center bg-black text-white pt-40 pb-24 px-5">
      <div className="w-full max-w-[900px]">
        {/* Title */}
        <div className="flex flex-col items-center text-center !mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            Login
          </h1>
          <p className="text-white/60 mt-2">Sign in to your Haval account</p>
          <div className="w-[320px] !bg-red-500 max-w-full !h-px !mt-5" />
        </div>

        <form className="flex flex-col !gap-12">
          <Row label="Account Details">
        
            <input
              className={inputClass}
              type="email"
              name="email"
              placeholder="Email Address*"
              required
            />

            <div className="relative">
              <input
                className={inputClass}
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Password*"
                required
              />
              <button
                type="button"
                onClick={() => setShowPass((s) => !s)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs uppercase font-semibold text-white/70 hover:text-white cursor-pointer"
              >
                {showPass ? "Hide" : "Show"}
              </button>
            </div>

          </Row>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <label className="flex items-center gap-3 cursor-pointer select-none">
              <input type="checkbox" name="remember" className="size-4 accent-white" />
              <span>Remember me</span>
            </label>
            <a href="/forgot-password" className="text-white underline hover:no-underline text-sm">
              Forgot password?
            </a>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-white text-black font-semibold text-sm !px-8 !py-3 rounded-[3px] cursor-pointer
                         transition-all duration-200 hover:bg-black hover:text-white hover:ring-1 hover:ring-white
                         active:scale-95"
            >
              Login &gt;
            </button>
            <p className="text-white/60 text-sm !mt-5">
              Don&apos;t have an account?{" "}
              <a href="/signup" className="text-white underline hover:no-underline">
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}