import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'

const Signup = () => {
  const [step, setStep] = useState(1)          // 1 = signup, 2 = verify
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

  const validate = () => {
    const e = {}
    if (!form.firstName.trim())                   e.firstName       = 'Required'
    if (!form.lastName.trim())                    e.lastName        = 'Required'
    if (!form.email.includes('@'))                e.email           = 'Enter a valid email'
    if (!form.company.trim())                     e.company         = 'Required'
    if (form.password.length < 8)                 e.password        = 'Min 8 characters'
    if (form.password !== form.confirmPassword)   e.confirmPassword = 'Passwords do not match'
    if (!agreed)                                  e.agreed          = 'You must agree to continue'
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
    await new Promise(r => setTimeout(r, 1200))  // simulate API
    setLoading(false)
    setStep(2)
  }

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

  // ── Step 2 — Email Verification ───────────────────────
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
            <h1 className="text-[28px] font-extrabold text-black font-[heading]">
              Check your inbox
            </h1>
            <p className="text-[14px] text-gray-500 font-[subheading]">
              We sent a verification link to
            </p>
            <p className="text-[14px] font-semibold text-black font-[btn]">
              {form.email}
            </p>
          </div>

          <p className="text-[13px] text-gray-400 font-[subheading] max-w-xs">
            Click the link in your email to activate your account. Check your spam folder if you don't see it.
          </p>

          <div className="border-t border-gray-100 pt-6 w-full flex flex-col gap-3">
            <button
              onClick={() => setStep(1)}
              className="text-[13px] text-gray-400 hover:text-black transition font-[btn] underline"
            >
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

  // ── Step 1 — Signup Form ──────────────────────────────
  return (
    <div className="min-h-screen bg-white flex">

      {/* Left — Form */}
      <div className="w-full lg:w-1/2 flex flex-col px-8 md:px-16 py-12">

        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Aetherfield" className="h-6 w-auto mb-12" />
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[36px] font-extrabold text-black leading-tight mb-2 font-[heading]">
            Create your account
          </h1>
          <p className="text-[14px] text-gray-500 font-[subheading]">
            Already have an account?{' '}
            <Link to="/login" className="text-black underline hover:opacity-60 transition">
              Sign in
            </Link>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Name row */}
          <div className="grid grid-cols-2 gap-4">
            <Field label="First name"  name="firstName" placeholder="Luna"    />
            <Field label="Last name"   name="lastName"  placeholder="Teme"    />
          </div>

          <Field label="Work email"    name="email"    type="email"    placeholder="you@company.com"   />
          <Field label="Company name"  name="company"                  placeholder="Acme Inc"          />
          <Field label="Password"      name="password" type="password" placeholder="Min. 8 characters" />
          <Field label="Confirm password" name="confirmPassword" type="password" placeholder="Repeat password" />

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
            {errors.agreed && (
              <p className="text-[11px] text-red-500 font-[btn]">{errors.agreed}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white text-[14px] font-semibold py-4 hover:opacity-75 transition disabled:opacity-40 font-[btn] mt-2"
          >
            {loading ? 'Creating account...' : '• Create account'}
          </button>

        </form>
      </div>

      {/* Right — Brand panel — hidden on mobile */}
      <div
        className="hidden lg:flex w-1/2 flex-col justify-between p-16"
        style={{ background: 'linear-gradient(180deg, #C5DCF0 0%, #CBDDED 35%, #D6CEBC 75%, #E0C9A8 100%)' }}
      >
        <div />

        <div className="flex flex-col gap-6">
          <p className="text-[40px] font-extrabold text-black leading-tight font-[heading]">
            Sustainability insights, built for business.
          </p>
          <p className="text-[16px] text-black/60 font-[subheading] max-w-sm">
            Join hundreds of teams using Aetherfield to track emissions, model outcomes, and report with confidence.
          </p>
        </div>

        {/* Stats row */}
        <div className="flex gap-10">
          {[
            { number: '500+', label: 'Companies onboarded' },
            { number: '34%',  label: 'Avg. reporting time saved' },
            { number: '99.9%', label: 'Uptime guaranteed' },
          ].map(s => (
            <div key={s.label} className="flex flex-col gap-1">
              <p className="text-[28px] font-extrabold text-black font-[heading]">{s.number}</p>
              <p className="text-[12px] text-black/50 font-[btn]">{s.label}</p>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}

export default Signup