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

  // Validation, handleChange, handleSubmit, getPasswordStrength remain exactly the same...
  // (I'm not repeating them here to keep it short — keep your original code)

  // ── Reusable Password Field (FIXED version) ──────────────────────────────────
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
          onClick={(e) => {
            e.preventDefault();       // ← prevents form submit
            e.stopPropagation();      // ← STOPS click from bubbling to input
            onToggle();
          }}
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

  // Rest of your component (Step 2, Step 1 form, brand panel) remains EXACTLY the same
  // ... keep your original code here ...

};

export default Signup;