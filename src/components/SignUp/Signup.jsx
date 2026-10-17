import { useState } from "react";

const VEHICLES = [
  "Other Inquiry",
  "Haval H6",
  "Haval Jolion",
  "Haval H6 HEV",
  "Haval Dargo",
];

const inputClass =
  "w-full h-[40px] bg-black text-white placeholder-white border border-white rounded-[3px] !px-4 !py-3 !text-sm " +
  "outline-none transition-all duration-200 hover:bg-white/5 focus:border-white focus:ring-2 focus:ring-white/40";

function Row({ label, children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-3 md:gap-8 items-start">
      <h3 className="text-white font-bold text-base md:pt-3">{label}</h3>
      <div className="flex flex-col gap-5">{children}</div>
    </div>
  );
}

export default function SignUp() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    password: "",
    confirm: "",
    vehicle: VEHICLES[0],
    promo: false,
  });
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "First name is required";
    if (!form.lastName.trim()) e.lastName = "Last name is required";
    if (!/^[0-9+\-\s]{10,15}$/.test(form.phone)) e.phone = "Enter a valid phone number";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (form.password.length < 8) e.password = "Minimum 8 characters";
    if (form.confirm !== form.password) e.confirm = "Passwords do not match";
    return e;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      // TODO: send `form` to your signup API
      setDone(true);
    }
  };

  const Err = ({ name }) =>
    errors[name] ? <p className="text-red-400 text-xs mt-1">{errors[name]}</p> : null;

  return (

    <main className="min-h-screen flex justify-center items-center bg-black text-white pt-40 pb-24 px-5">
      <div className="w-full max-w-[900px] mx-auto">
        {/* Title */}
        <div className="flex flex-col items-center gap-1 !mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            Sign Up
          </h1>
          <p className="text-white/60 mt-2">Create your Haval account</p>
          <div className="w-[320px] max-w-full h-px bg-white mx-auto mt-5" />
        </div>

        {done ? (
          <div className="border border-white rounded-[3px] p-10 text-center">
            <h2 className="text-2xl font-bold uppercase mb-2">Account created</h2>
            <p className="text-white/70">
              Welcome, {form.firstName}! Please check your email to verify your account.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="flex flex-col gap-12">
            <Row label="Personal Information">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input className={inputClass} name="firstName" placeholder="First Name*" value={form.firstName} onChange={onChange} />
                  <Err name="firstName" />
                </div>
                <div>
                  <input className={inputClass} name="lastName" placeholder="Last Name*" value={form.lastName} onChange={onChange} />
                  <Err name="lastName" />
                </div>
                <div>
                  <input className={inputClass} name="phone" placeholder="Phone Number*" value={form.phone} onChange={onChange} />
                  <Err name="phone" />
                </div>
                <div>
                  <input className={inputClass} type="email" name="email" placeholder="Email Address*" value={form.email} onChange={onChange} />
                  <Err name="email" />
                </div>
              </div>
              <input className={inputClass} name="city" placeholder="City" value={form.city} onChange={onChange} />
            </Row>

            <Row label="Account Security">
              <div className="relative">
                <input
                  className={inputClass + " pr-20"}
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="Password*"
                  value={form.password}
                  onChange={onChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPass((s) => !s)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs uppercase font-semibold text-white/70 hover:text-white cursor-pointer"
                >
                  {showPass ? "Hide" : "Show"}
                </button>
                <Err name="password" />
              </div>
              <div>
                <input
                  className={inputClass}
                  type={showPass ? "text" : "password"}
                  name="confirm"
                  placeholder="Confirm Password*"
                  value={form.confirm}
                  onChange={onChange}
                />
                <Err name="confirm" />
              </div>
            </Row>

            <Row label="Select a Vehicle">
              <select className={inputClass} name="vehicle" value={form.vehicle} onChange={onChange}>
                {VEHICLES.map((v) => (
                  <option key={v} className="bg-black">{v}</option>
                ))}
              </select>
            </Row>

            <label className="flex items-center gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                name="promo"
                checked={form.promo}
                onChange={onChange}
                className="size-4 accent-white"
              />
              <span>I would like a Haval representative to contact me for promotional offers</span>
            </label>

            <div className="text-center">
              <button
                type="submit"
                className=" bg-white text-black font-semibold text-sm !px-8 !py-3 rounded-[3px] cursor-pointer
                           transition-all duration-200 hover:bg-black hover:text-white hover:ring-1 hover:ring-white
                           active:scale-95"
              >
                Create Account &gt;
              </button>
              <p className="text-white/60 text-sm !mt-5">
                Already have an account?{" "}
                <a href="/login" className="text-white underline hover:no-underline">Log in</a>
              </p>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}

