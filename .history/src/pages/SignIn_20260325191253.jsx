import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';

import { Eye, EyeOff, CircleCheck } from 'lucide-react';

const PasswordInput = ({
  label,
  name,
  value,
  onChange,
  show,
  onToggle,
  placeholder,
  error,
}) => (
  <div className="flex flex-col gap-1">
    <label
      htmlFor={name}
      className="text-xs text-gray-700 font-medium tracking-wide uppercase mb-1.5"
    >
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
          ${error 
            ? 'border-red-400 bg-red-50 focus:ring-red-200' 
            : 'border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10'
          }`}
      />

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black transition p-1"
        aria-label={show ? 'Hide password' : 'Show password'}
      >
        {show ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>

    {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
  </div>
);

const SignIn = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const validate = () => {
    const errs = {};

    if (!form.email) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!form.password) {
      errs.password = 'Password is required';
    } else if (form.password.length < 8) {
      errs.password = 'Password must be at least 8 characters';
    }

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
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // Check if user exists in localStorage (from signup)
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        const user = JSON.parse(savedUser);
        if (user.email === form.email) {
          console.log('Login successful:', user);
          // In real app, you would set auth token here
          navigate('/dashboard'); // or wherever you want to redirect
          return;
        }
      }

      setErrors({ general: 'Invalid email or password' });
    } catch (err) {
      console.error('Login error:', err);
      setErrors({ general: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col px-6 md:px-12 lg:px-16 py-10 lg:py-16 overflow-y-auto">
        <div className="mb-10">
          <img src={Logo} alt="Aetherfield" className="h-7 w-auto mb-8" />

          <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            Welcome back
          </h1>
          <p className="mt-3 text-base text-gray-600">
            Don't have an account?{' '}
            <Link
              to="/signup"
              className="text-black font-medium underline hover:opacity-80 transition"
            >
              Create account
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
          <div>
            <label
              htmlFor="email"
              className="block text-xs text-gray-700 font-medium uppercase tracking-wide mb-1.5"
            >
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
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>
            )}
          </div>

          <PasswordInput
            label="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
            show={showPassword}
            onToggle={() => setShowPassword(!showPassword)}
            placeholder="Enter your password"
            error={errors.password}
          />

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between text-sm mt-2">
            <div className="flex items-center gap-2">
              <div
                className={`w-5 h-5 rounded border flex items-center justify-center transition cursor-pointer
                  ${rememberMe ? 'bg-black border-black' : 'border-gray-300 hover:border-gray-500'}`}
                onClick={() => setRememberMe(!rememberMe)}
              >
                {rememberMe && <CircleCheck size={14} className="text-white" />}
              </div>
              <span className="text-gray-600 cursor-pointer select-none" onClick={() => setRememberMe(!rememberMe)}>
                Remember me
              </span>
            </div>

            <Link to="/forgot-password" className="text-black hover:underline transition">
              Forgot password?
            </Link>
          </div>

          {errors.general && (
            <p className="text-sm text-red-600 text-center mt-2">{errors.general}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`mt-6 w-full bg-black text-white text-base font-medium py-4 rounded-lg transition
              ${loading ? 'opacity-60 cursor-not-allowed' : 'hover:bg-gray-900'}`}
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-8">
          Protected by reCAPTCHA • Privacy • Terms
        </p>
      </div>

      {/* Right Side - Decorative Panel (Same style as SignUp) */}
      <div
        className="hidden lg:flex w-1/2 flex-col justify-between p-16 sticky top-0 h-screen"
        style={{
          background: 'linear-gradient(180deg, #C5DCF0 0%, #CBDDED 35%, #D6CEBC 75%, #E0C9A8 100%)',
        }}
      >
        <div />

        <div className="space-y-8">
          <p className="text-6xl font-extrabold text-black leading-tight font-[Heading]">
            Sustainability insights,
            <br />
            built for business.
          </p>
          <p className="text-2xl text-black/70 max-w-md leading-relaxed font-[Subheading]">
            Join hundreds of forward-thinking teams using Aetherfield to track emissions, model outcomes, and report with confidence.
          </p>
        </div>

        <div className="flex gap-12 font-[Btn] text-black/60">
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

export default SignIn;