import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'

const Signup = () => {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors]   = useState({})
  const [loading, setLoading] = useState(false)
  const [agreed, setAgreed]   = useState(false)
  const [showPass, setShowPass]    = useState(false)   // ✅ toggle password
  const [showConfirm, setShowConfirm] = useState(false) // ✅ toggle confirm

  const validate = () => {
    const e = {}
    if (!form.firstName.trim())                         e.firstName       = 'First name is required'
    if (!form.lastName.trim())                          e.lastName        = 'Last name is required'
    if (!form.email.includes('@'))                      e.email           = 'Enter a valid email'
    if (!form.company.trim())                           e.company         = 'Company name is required'
    if (form.password.length < 8)                       e.password        = 'Password must be at least 8 characters'
    if (!form.confirmPassword)                          e.confirmPassword = 'Please confirm your password'
    else if (form.password !== form.confirmPassword)    e.confirmPassword = 'Passwords do not match'
    if (!agreed)                                        e.agreed          = 'You must agree to continue'
    return e
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) return setErrors(errs)
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setStep(2)
  }

  // Password strength checker
  const getStrength = (pw) => {
    if (!pw) return null
    if (pw.length < 6) return { label: 'Weak', color: 'bg-red-400', width: 'w-1/4' }
    if (pw.length < 8) return { label: 'Fair', color: 'bg-yellow-400', width: 'w-2/4' }
    if (/[A-Z]/.test(pw) && /[0-9]/.test(pw)) return { label: 'Strong', color: 'bg-green-500', width: 'w-full' }
    return { label: 'Good', color: 'bg-blue-400', width: 'w-3/4' }
  }
  const strength = getStrength(form.password)

  // Eye icon
  const EyeIcon = ({ show }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {show
        ? <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></>
        : <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>
      }
    </svg>
  )

  // ── Field component ──────────────────────────────────
  const Field = ({ label, name, type = 'text', placeholder }) => (
    <div className="flex flex-col gap-1">
      <label className="text-[12px] text-black font-[btn] tracking-wide uppercase">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={form[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className={`w-full border px-4 py-3 text-[14px] text-black placeholder-gray-400 outline-none transition font-[subheading]
          ${errors[name] ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white focus:border-black'}`}
      />
      {errors[name] && (
        <p className="text-[11px] text-red-500 font-[btn]">{errors[name]}</p>
      )}
    </div>
  )

  // ── Password Field with toggle + strength ────────────
  const PasswordField = ({ label, name, show, onToggle, placeholder }) => (
    <div className="flex flex-col gap-1">
      <label className="text-[12px] text-black font-[btn] tracking-wide uppercase">
        {label}
      </label>
      <div className="relative">
        <input
          type={show ? 'text' : 'password'}   // ✅ toggle between text/password
          name={name}
          value={form[name]}
          onChange={handleChange}
          placeholder={placeholder}
          className={`w-full border px-4 py-3 pr-12 text-[14px] text-black placeholder-gray-400 outline-none transition font-[subheading]
            ${errors[name] ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white focus:border-black'}`}
        />
        {/* Show/hide toggle */}
        <button
          type="button"
          onClick={onToggle}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition"
        >
          <EyeIcon show={show} />
        </button>
      </div>

      {/* Strength bar — only on password field */}
      {name === 'password' && form.password && (
        <div className="flex flex-col gap-1 mt-1">
          <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
            <div className={`h-full rounded-full transition-all duration-300 ${strength.color} ${strength.width}`} />
          </div>
          <p className="text-[11px] text-gray-400 font-[btn]">
            Strength: <span className="text-black">{strength.label}</span>
          </p>
        </div>
      )}

      {/* Match indicator — only on confirmPassword */}
      {name === 'confirmPassword' && form.confirmPassword && (
        <p className={`text-[11px] font-[btn] ${form.password === form.confirmPassword ? 'text-green-500' : 'text-red-500'}`}>
          {form.password === form.confirmPassword ? '✓ Passwords match' : '✗ Passwords do not match'}
        </p>
      )}

      {errors[name] && (
        <p className="text-[11px] text-red-500 font-[btn]">{errors[name]}</p>
      )}
    </div>
  )

  // ── Step 2 ────────────────────────────────────────────
  if (step === 2) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-5">
        <div className="w-full max-w-md text-center flex flex-col items-center gap-6">
          <img src={Logo} alt="Aetherfield" className="h-6 w-auto mb-4" />
          <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[28px] font-extrabold text-black font-[heading]">Check your inbox</h1>
            <p className="text-[14px] text-gray-500 font-[subheading]">We sent a verification link to</p>
            <p className="text-[14px] font-semibold text-black font-[btn]">{form.email}</p>
          </div>
          <p className="text-[13px] text-gray-400 font-[subheading] max-w-xs">
            Click the link in your email to activate your account. Check your spam folder if you don't see it.
          </p>
          <div className="border-t border-gray-100 pt-6 w-full flex flex-col gap-3">
            <button onClick={() => setStep(1)} className="text-[13px] text-gray-400 hover:text-black transition font-[btn] underline">
              Wrong email? Go back
            </button>
            <Link to="/" className="text-[13px] text-gray-400 hover:text-black transition font-[btn]">
              Return to homepage
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // ── Step 1 ────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-white flex">

      {/* Left — Form */}
      <div className="w-full lg:w-1/2 flex flex-col px-8 md:px-16 py-12 overflow-y-auto">
        <Link to="/">
          <img src={Logo} alt="Aetherfield" className="h-6 w-auto mb-12" />
        </Link>

        <div className="mb-8">
          <h1 className="text-[36px] font-extrabold text-black leading-tight mb-2 font-[heading]">
            Create your account
          </h1>
          <p className="text-[14px] text-gray-500 font-[subheading]">
            Already have an account?{' '}
            <Link to="/login" className="text-black underline hover:opacity-60 transition">Sign in</Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <div className="grid grid-cols-2 gap-4">
            <Field label="First name" name="firstName" placeholder="Luna" />
            <Field label="Last name"  name="lastName"  placeholder="Teme" />
          </div>

          <Field label="Work email"   name="email"   type="email" placeholder="you@company.com" />
          <Field label="Company name" name="company"              placeholder="Acme Inc"         />

          {/* ✅ Password with toggle + strength */}
          <PasswordField
            label="Password"
            name="password"
            show={showPass}
            onToggle={() => setShowPass(!showPass)}
            placeholder="Min. 8 characters"
          />

          {/* ✅ Confirm password with toggle + match indicator */}
          <PasswordField
            label="Confirm password"
            name="confirmPassword"
            show={showConfirm}
            onToggle={() => setShowConfirm(!showConfirm)}
            placeholder="Repeat password"
          />

          {/* Terms */}
          <div className="flex flex-col gap-1">
            <label className="flex items-start gap-3 cursor-pointer">
              <div
                onClick={() => { setAgreed(!agreed); setErrors({ ...errors, agreed: '' }) }}
                className={`w-5 h-5 flex-shrink-0 border mt-0.5 flex items-center justify-center transition cursor-pointer
                  ${agreed ? 'bg-black border-black' : 'bg-white border-gray-300'}`}
              >
                {agreed && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <span className="text-[13px] text-gray-500 font-[subheading]">
                I agree to Aetherfield's{' '}
                <Link to="/terms" className="text-black underline hover:opacity-60">Terms of Service</Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-black underline hover:opacity-60">Privacy Policy</Link>
              </span>
            </label>
            {errors.agreed && <p className="text-[11px] text-red-500 font-[btn]">{errors.agreed}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white text-[14px] font-semibold py-4 hover:opacity-75 transition disabled:opacity-40 font-[btn] mt-2"
          >
            {loading ? 'Creating account...' : '• Create account'}
          </button>

        </form>
      </div>

      {/* Right — Brand panel */}
      <div
        className="hidden lg:flex w-1/2 flex-col justify-between p-16 sticky top-0 h-screen"
        style={{ background: 'linear-gradient(180deg, #C5DCF0 0%, #CBDDED 35%, #D6CEBC 75%, #E0C9A8 100%)' }}
      >
        <div />

        <div className="flex flex-col gap-8">
          <p className="text-[56px] font-extrabold text-black leading-tight font-[heading]">  {/* ✅ 40→56px */}
            Sustainability insights, built for business.
          </p>
          <p className="text-[20px] text-black/60 font-[subheading] max-w-sm leading-relaxed"> {/* ✅ 16→20px */}
            Join hundreds of teams using Aetherfield to track emissions, model outcomes, and report with confidence.
          </p>
        </div>

        {/* Stats */}
        <div className="flex gap-10">
          {[
            { number: '500+',  label: 'Companies onboarded'      },
            { number: '34%',   label: 'Avg. reporting time saved' },
            { number: '99.9%', label: 'Uptime guaranteed'         },
          ].map(s => (
            <div key={s.label} className="flex flex-col gap-1">
              <p className="text-[36px] font-extrabold text-black font-[heading]">{s.number}</p>  {/* ✅ 28→36px */}
              <p className="text-[13px] text-black/50 font-[btn]">{s.label}</p>                   {/* ✅ 12→13px */}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Signup