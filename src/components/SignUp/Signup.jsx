import { useState } from "react";
import { useForm } from "react-hook-form"
import usethemeStyle from "../../Hooks/themeStyle";


 // vehicles Models
const VEHICLES = [
  "Other Inquiry",
  "Haval H6",
  "Haval Jolion",
  "Haval H6 HEV",
  "Haval Dargo",
];

let userData = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    password: "",
    confirm: "",
    vehicle: VEHICLES[0],
    promo: false,
  }

export default function SignUp() {

  const {bodyBg , bodyTxt , btnBg , btnTxt} = usethemeStyle()

  const inputClass =
  `w-full bg-${bodyBg} text-${bodyTxt} placeholder-${bodyTxt} border-1 border-${bodyTxt} rounded-[3px] !px-4 !py-3 !text-sm ` +
  "outline-none transition-all duration-200 hover:bg-white/5 focus:border-white focus:ring-2 focus:ring-white/40";

  
function Row({ label, children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-3 md:gap-8 items-start">
      <h3 className={`text-${bodyTxt} font-bold text-base md:pt-3`}>{label}</h3>
      <div className="flex flex-col gap-5">{children}</div>
    </div>
  );
}
  
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
  const [done , setDone] = useState(false)

  const {register , handleSubmit , watch , formState :{errors},} = useForm()
  console.log(errors.firstName)
  const onSubmit = (ev) => {
    // ev.preventDefault();
    console.log(ev)
  };
  
  return (

    <main className={`min-h-screen flex justify-center items-center bg-${bodyBg} text-${bodyTxt} !pt-10 !pb-23 px-5`}>
      <div className="w-full max-w-[900px] mx-auto">
        {/* Title */}
        <div className="contact-header">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            Sign Up
          </h1>
          <p>Create your Haval account</p>
          <div className="divider !bg-red-600" />
        </div>

        {done ? (
          <div className="border border-white rounded-[3px] p-10 text-center">
            <h2 className="text-2xl font-bold uppercase mb-2">Account created</h2>
            <p className="text-white/70">
              Welcome, {form.firstName}! Please check your email to verify your account.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-12">
            <Row label="Personal Information">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input className={inputClass} name="firstName" {...register('firstName', {required:true})} placeholder="First Name*" />
                </div>
                <div>
                  <input className={inputClass} name="lastName" {...register('lastName')} placeholder="Last Name*"  />
                  
                </div>
                <div>
                  <input className={inputClass} name="phone" {...register('phone')} placeholder="Phone Number*" onChange={onchange}/>
                  
                </div>
                <div>
                  <input className={inputClass} type="email" name="email" {...register('email')} placeholder="Email Address*" onChange={onchange}/>
                  
                </div>
              </div>
              <input className={inputClass} name="city" {...register('city')} placeholder="City" onChange={onchange} />
            </Row>

            <Row label="Account Security">
              <div className="relative">
                <input
                  className={inputClass + " pr-20"}
                  type={showPass ? "text" : "password"}
                  name="password"
                  {...register('password')}
                  placeholder="Password*"
                  onChange={onchange}
                />
                <button
                  type="button"
                  onClick={() => setShowPass((s) => !s)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs uppercase font-semibold text-white/70 hover:text-white cursor-pointer"
                >
                  {showPass ? "Hide" : "Show"}
                </button>
                
              </div>
              <div>
                <input
                  className={inputClass}
                  type={showPass ? "text" : "password"}
                  name="confirm"
                  {...register('confirm')}
                  onChange={onchange}
                  placeholder="Confirm Password*"
                />
                
              </div>
            </Row>

            <Row label="Select a Vehicle">
              
              <select className={`${inputClass} pr-10 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22white%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_1rem_center] bg-no-repeat`} name="vehicle">
                {VEHICLES.map((v) => (
                  <option key={v} className="bg-black text-sm">{v}</option>
                ))}
              </select>
            </Row>

            <label className="flex items-center gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                name="promo"
                {...register('promo')}
                className="size-4 accent-white"
              />
              <span>I would like a Haval representative to contact me for promotional offers</span>
            </label>

            <div className="text-center">
              <button
                type="submit"
                className={`bg-${btnBg} text-${btnTxt} font-semibold text-sm !px-8 !py-3 rounded-[3px] cursor-pointer
                           transition-all duration-200 hover:bg-black hover:text-white hover:ring-1 hover:ring-white
                           active:scale-95`}
              >
                Create Account &gt;
              </button>
              <p className={`text-${bodyTxt} text-sm !mt-5`}>
                Already have an account?{" "}
                <a href="/login" className={`text-${bodyTxt} underline hover:no-underline`}>Log in</a>
              </p>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}

