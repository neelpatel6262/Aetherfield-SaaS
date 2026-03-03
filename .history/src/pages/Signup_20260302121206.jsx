import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';

// Lucide icons
import {
  Eye,
  EyeOff,
  Check,
  X,
  CircleCheck,
} from 'lucide-react';

const Signup = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // ── Validation ───────────────────────────────────────────────
  const validate = () => {
    const errs = {};

    if (!form.firstName.trim()) errs.firstName = 'First name is required';
    if (!form.lastName.trim()) errs.lastName = 'Last name is required';

    if (!form.email) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!form.company.trim()) errs.company = 'Company name is required';

    if (!form.password) {
      errs.password = 'Password is required';
    } else if (form.password.length < 8) {
      errs.password = 'Password must be at least 8 characters';
    }

    if (!form.confirmPassword) {
      errs.confirmPassword = 'Please confirm your password';
    } else if (form.password !== form.confirmPassword) {
      errs.confirmPassword = 'Passwords do not match';
    }

    if (!agreed) errs.agreed = 'You must agree to the terms to continue';

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1400));
      setStep(2);
    } catch (err) {
      console.error('Signup error:', err);
    } finally {
      setLoading(false);
    }
  };

  // ── Password Strength ────────────────────────────────────────
  const getPasswordStrength = (password) => {
    if (!password) return null;

    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    if (strength <= 1) return { label: 'Weak', color: 'bg-red-500', width: 'w-1/4' };
    if (strength === 2) return { label: 'Fair', color: 'bg-yellow-500', width: 'w-2/4' };
    if (strength === 3) return { label: 'Good', color: 'bg-blue-500', width: 'w-3/4' };
    return { label: 'Strong', color: 'bg-green-500', width: 'w-full' };
  };

  const strength = getPasswordStrength(form.password);

  // ── Reusable Password Field ──────────────────────────────────
  const PasswordInput = ({ label, name, value, onChange, show, onToggle, placeholder, error }) => (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-xs text-gray-700 font-medium tracking-wide uppercase mb-1.5">
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          type={show ? 'text' : 'password'}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-4 py-3 text-sm border rounded-lg outline-none transition-all pr-11
            ${error ? 'border-red-400 bg-red-50 focus:ring-red-200' : 'border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10'}`}
        />
        <button
          type="button"
          onClick={onToggle}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black transition p-1"
          aria-label={show ? 'Hide password' : 'Show password'}
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {/* Strength bar (only for password) */}
      {name === 'password' && value && (
        <div className="mt-2">
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className={`h-full transition-all duration-300 ${strength.color} ${strength.width}`} />
          </div>
          <p className="mt-1.5 text-xs text-gray-600">
            Password strength: <span className="font-medium text-black">{strength.label}</span>
          </p>
        </div>
      )}

      {/* Match indicator (only for confirm password) */}
      {name === 'confirmPassword' && value && (
        <div className="mt-2 flex items-center gap-1.5 text-xs">
          {form.password === value ? (
            <>
              <Check size={14} className="text-green-600" />
              <span className="text-green-600 font-medium">Passwords match</span>
            </>
          ) : (
            <>
              <X size={14} className="text-red-600" />
              <span className="text-red-600">Passwords do not match</span>
            </>
          )}
        </div>
      )}

      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );

  // ── Step 2: Success screen ───────────────────────────────────
  if (step === 2) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-5">
        <div className="w-full max-w-md text-center flex flex-col items-center gap-6">
          <img src={Logo} alt="Aetherfield" className="h-7 w-auto mb-2" />

          <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
            <CircleCheck size={32} className="text-white" strokeWidth={2.5} />
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold text-black">Check your inbox</h1>
            <p className="text-sm text-gray-500">We sent a verification link to</p>
            <p className="text-base font-semibold text-black">{form.email}</p>
          </div>

          <p className="text-sm text-gray-500 max-w-xs">
            Click the link in your email to activate your account. Don’t forget to check your spam folder.
          </p>

          <div className="border-t border-gray-100 pt-6 w-full flex flex-col gap-3 text-sm text-gray-500">
            <button
              onClick={() => setStep(1)}
              className="hover:text-black transition underline"
            >
              Wrong email? Go back
            </button>
            <Link to="/" className="hover:text-black transition">
              Return to homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ── Step 1: Signup Form ──────────────────────────────────────
  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* Left: Form */}
      <div className="w-full lg:w-1/2 flex flex-col px-6 md:px-12 lg:px-16 py-10 lg:py-16 overflow-y-auto">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            Create your account
          </h1>
          <p className="mt-3 text-base text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-black font-medium underline hover:opacity-80 transition">
              Sign in
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="firstName" className="block text-xs text-gray-700 font-medium uppercase tracking-wide mb-1.5">
                First name
              </label>
              <input
                id="firstName"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="Luna"
                className={`w-full px-4 py-3 border rounded-lg text-sm outline-none transition-all
                  ${errors.firstName ? 'border-red-400 bg-red-50' : 'border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10'}`}
              />
              {errors.firstName && <p className="mt-1.5 text-xs text-red-600">{errors.firstName}</p>}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-xs text-gray-700 font-medium uppercase tracking-wide mb-1.5">
                Last name
              </label>
              <input
                id="lastName"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Teme"
                className={`w-full px-4 py-3 border rounded-lg text-sm outline-none transition-all
                  ${errors.lastName ? 'border-red-400 bg-red-50' : 'border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10'}`}
              />
              {errors.lastName && <p className="mt-1.5 text-xs text-red-600">{errors.lastName}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-xs text-gray-700 font-medium uppercase tracking-wide mb-1.5">
              Work email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className={`w-full px-4 py-3 border rounded-lg text-sm outline-none transition-all
                ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10'}`}
            />
            {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="company" className="block text-xs text-gray-700 font-medium uppercase tracking-wide mb-1.5">
              Company name
            </label>
            <input
              id="company"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Acme Inc"
              className={`w-full px-4 py-3 border rounded-lg text-sm outline-none transition-all
                ${errors.company ? 'border-red-400 bg-red-50' : 'border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10'}`}
            />
            {errors.company && <p className="mt-1.5 text-xs text-red-600">{errors.company}</p>}
          </div>

          {/* Password */}
          <PasswordInput
            label="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
            show={showPassword}
            onToggle={() => setShowPassword(!showPassword)}
            placeholder="Minimum 8 characters"
            error={errors.password}
          />

          {/* Confirm Password */}
          <PasswordInput
            label="Confirm password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            show={showConfirm}
            onToggle={() => setShowConfirm(!showConfirm)}
            placeholder="Repeat your password"
            error={errors.confirmPassword}
          />

          {/* Terms checkbox */}
          <div className="flex items-start gap-3 mt-2">
            <div
              className={`w-5 h-5 rounded border flex items-center justify-center transition cursor-pointer flex-shrink-0 mt-0.5
                ${agreed ? 'bg-black border-black' : 'border-gray-300 hover:border-gray-500'}`}
              onClick={() => {
                setAgreed(!agreed);
                setErrors((prev) => ({ ...prev, agreed: '' }));
              }}
            >
              {agreed && <Check size={14} className="text-white" strokeWidth={3} />}
            </div>
            <label className="text-sm text-gray-600 cursor-pointer select-none">
              I agree to Aetherfield's{' '}
              <Link to="/terms" className="text-black underline hover:opacity-80">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-black underline hover:opacity-80">
                Privacy Policy
              </Link>
            </label>
          </div>
          {errors.agreed && <p className="text-xs text-red-600 mt-1.5">{errors.agreed}</p>}

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className={`mt-6 w-full bg-black text-white text-base font-medium py-4 transition
              ${loading ? 'opacity-60 cursor-not-allowed' : 'hover:bg-gray-900'}`}
          >
            {loading ? 'Creating account...' : 'Create account'}
          </button>
        </form>
      </div>

      {/* Right: Brand panel */}
      <div
        className="hidden lg:flex w-1/2 flex-col justify-between p-16 sticky top-0 h-screen"
        style={{ background: 'linear-gradient(180deg, #C5DCF0 0%, #CBDDED 35%, #D6CEBC 75%, #E0C9A8 100%)' }}
      >
        <div />

        <div className="space-y-8">
          <p className="text-6xl font-extrabold text-black leading-tight font-[Heading]">
            Sustainability insights,
            <br />
            built for business.
          </p>
          <p className="text-2xl text-black/70 max-w-md leading-relaxed">
            Join hundreds of forward-thinking teams using Aetherfield to track emissions, model outcomes, and report with confidence.
          </p>
        </div>

        <div className="flex gap-12">
          {[
            { number: '500+', label: 'Companies onboarded' },
            { number: '34%', label: 'Avg. reporting time saved' },
            { number: '99.9%', label: 'Uptime guaranteed' },
          ].map((stat) => (
            <div key={stat.label} className="space-y-1">
              <p className="text-5xl font-extrabold text-black">{stat.number}</p>
              <p className="text-sm text-black/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Signup;