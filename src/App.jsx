import React, { useState, useEffect } from 'react';
import { 
  Dog, Mail, Lock, User, ChevronLeft, ArrowRight, Home as HomeIcon, 
  Compass, Calendar, UserCircle, Cat, PawPrint, CheckCircle2, AlertCircle,
  Camera, Search, Bell, Star, MapPin, Clock, ChevronRight, Shield, Heart,
  Navigation, Car, Map, Phone, Settings, LogOut, CreditCard
} from 'lucide-react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateTo = (screen) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentScreen(screen);
      setIsTransitioning(false);
    }, 200);
  };

  const screens = [
    { id: 'splash', name: '0. Splash Screen' },
    { id: 'onboarding', name: '1. Onboarding' },
    { id: 'auth', name: '2. Login / Register' },
    { id: 'email-signup', name: '2a. Email Sign Up' },
    { id: 'otp-verify', name: '2b. OTP Verification' },
    { id: 'forgot-password', name: '2c. Forgot Password' },
    { id: 'owner-setup', name: '2d. Owner Setup' },
    { id: 'pet-profile', name: '3. Create Pet Profile' },
    { id: 'home', name: '4. Home Screen' },
    { id: 'explore', name: '5. Explore / Search' },
    { id: 'service-detail', name: '6. Service Detail Page' },
    { id: 'booking-flow', name: '7. Booking Flow' },
    { id: 'bookings', name: '8. My Bookings' },
    { id: 'tracking', name: '9. Live Tracking' },
    { id: 'review', name: '10. Review Page' },
    { id: 'merchant', name: '11. Merchant Dashboard' },
    { id: 'settings', name: '12. Profile & Settings' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8 items-start justify-center">
        
        {/* 左侧控制面板 */}
        <div className="w-full md:w-[350px] bg-white p-6 rounded-3xl shadow-sm border border-slate-200 sticky top-6 max-h-[90vh] overflow-y-auto scrollbar-hide">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-teal-100 text-teal-600 rounded-xl">
              <PawPrint size={28} />
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-slate-800">PetEase</h1>
              <p className="text-xs text-slate-500 font-medium">17-Screen Master Prototype</p>
            </div>
          </div>
          
          <p className="text-sm text-slate-500 mb-6 leading-relaxed">
            Click the list below to instantly preview the interactive screen in the mobile simulator. All modules have been upgraded to premium high-fidelity UI.
          </p>

          <div className="space-y-2">
            {screens.map((screen) => (
              <button
                key={screen.id}
                onClick={() => navigateTo(screen.id)}
                className={`w-full text-left px-4 py-3.5 rounded-2xl transition-all flex items-center justify-between group text-sm font-medium ${
                  currentScreen === screen.id 
                    ? 'bg-teal-500 text-white shadow-md shadow-teal-500/20' 
                    : 'bg-slate-50 text-slate-600 hover:bg-teal-50 hover:text-teal-700'
                }`}
              >
                <span>{screen.name}</span>
                {currentScreen === screen.id && <ArrowRight size={16} />}
              </button>
            ))}
          </div>
        </div>

        {/* 右侧手机模型 */}
        <div className="relative w-[375px] h-[812px] bg-white rounded-[3rem] shadow-2xl border-[8px] border-slate-900 overflow-hidden flex-shrink-0 mx-auto">
          {/* 刘海屏装饰 */}
          <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-50 pointer-events-none">
            <div className="w-40 h-7 bg-slate-900 rounded-b-3xl"></div>
          </div>

          {/* 屏幕内容区域 */}
          <div className={`w-full h-full relative transition-opacity duration-200 overflow-x-hidden overflow-y-auto scrollbar-hide bg-slate-50 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            {currentScreen === 'splash' && <SplashScreen onNavigate={navigateTo} />}
            {currentScreen === 'onboarding' && <OnboardingScreen onNavigate={navigateTo} />}
            {currentScreen === 'auth' && <AuthScreen onNavigate={navigateTo} />}
            {currentScreen === 'email-signup' && <EmailSignUpScreen onNavigate={navigateTo} />}
            {currentScreen === 'otp-verify' && <OtpVerifyScreen onNavigate={navigateTo} />}
            {currentScreen === 'forgot-password' && <ForgotPasswordScreen onNavigate={navigateTo} />}
            {currentScreen === 'owner-setup' && <OwnerSetupScreen onNavigate={navigateTo} />}
            {currentScreen === 'pet-profile' && <PetProfileScreen onNavigate={navigateTo} />}
            {currentScreen === 'home' && <HomeScreen onNavigate={navigateTo} />}
            {currentScreen === 'explore' && <ExploreScreen onNavigate={navigateTo} />}
            {currentScreen === 'service-detail' && <ServiceDetailScreen onNavigate={navigateTo} />}
            {currentScreen === 'booking-flow' && <BookingFlowScreen onNavigate={navigateTo} />}
            {currentScreen === 'bookings' && <BookingsScreen onNavigate={navigateTo} />}
            {currentScreen === 'tracking' && <TrackingScreen onNavigate={navigateTo} />}
            {currentScreen === 'review' && <ReviewScreen onNavigate={navigateTo} />}
            {currentScreen === 'merchant' && <MerchantScreen onNavigate={navigateTo} />}
            {currentScreen === 'settings' && <SettingsScreen onNavigate={navigateTo} />}
          </div>
        </div>

      </div>
    </div>
  );
}

// ==============================
// 共享组件 (Shared Components)
// ==============================

const BottomNav = ({ activeTab, onNavigate }) => (
  <div className="absolute bottom-0 inset-x-0 h-20 bg-white border-t border-slate-100 flex justify-around items-center px-4 pb-4 pt-2 z-40">
    <button onClick={() => onNavigate('home')} className={`flex flex-col items-center gap-1 ${activeTab === 'home' ? 'text-teal-500' : 'text-slate-400'}`}>
      <HomeIcon size={22} className={activeTab === 'home' ? 'fill-teal-50' : ''} />
      <span className="text-[10px] font-medium">Home</span>
    </button>
    <button onClick={() => onNavigate('explore')} className={`flex flex-col items-center gap-1 ${activeTab === 'explore' ? 'text-teal-500' : 'text-slate-400'}`}>
      <Search size={22} />
      <span className="text-[10px] font-medium">Explore</span>
    </button>
    <button onClick={() => onNavigate('bookings')} className={`flex flex-col items-center gap-1 ${activeTab === 'bookings' ? 'text-teal-500' : 'text-slate-400'}`}>
      <Calendar size={22} className={activeTab === 'bookings' ? 'fill-teal-50' : ''} />
      <span className="text-[10px] font-medium">Bookings</span>
    </button>
    <button onClick={() => onNavigate('pet-profile')} className={`flex flex-col items-center gap-1 ${activeTab === 'pet-profile' ? 'text-teal-500' : 'text-slate-400'}`}>
      <Dog size={22} />
      <span className="text-[10px] font-medium">My Pets</span>
    </button>
    <button onClick={() => onNavigate('settings')} className={`flex flex-col items-center gap-1 ${activeTab === 'settings' ? 'text-teal-500' : 'text-slate-400'}`}>
      <UserCircle size={22} className={activeTab === 'settings' ? 'fill-teal-50' : ''} />
      <span className="text-[10px] font-medium">Profile</span>
    </button>
  </div>
);


// ==============================
// 0. Splash Screen
// ==============================
const SplashScreen = ({ onNavigate }) => {
  // Simulate auth check delay
  useEffect(() => {
    const timer = setTimeout(() => {
      onNavigate('onboarding');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full bg-teal-500 flex flex-col items-center justify-center text-white relative">
      <div className="w-28 h-28 bg-white rounded-3xl mb-6 flex items-center justify-center shadow-2xl shadow-teal-900/20">
        <PawPrint size={56} className="text-teal-500" />
      </div>
      <h1 className="text-4xl font-black tracking-tight mb-2">PetEase</h1>
      <p className="text-teal-100 font-medium tracking-wide">Your Pet Care Companion</p>
      
      <div className="absolute bottom-12 inset-x-0 flex justify-center">
        <div className="w-6 h-6 border-4 border-teal-200 border-t-white rounded-full animate-spin"></div>
      </div>
    </div>
  );
};


// ==============================
// 1. Onboarding Screens
// ==============================
const OnboardingScreen = ({ onNavigate }) => (
  <div className="w-full h-full bg-white flex flex-col pt-16 pb-10">
    <div className="flex-1 px-8 flex flex-col justify-center items-center text-center">
      <div className="w-64 h-72 bg-teal-50 rounded-[3rem] mb-10 flex items-center justify-center relative shadow-inner overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-teal-50"></div>
        <PawPrint size={80} className="text-teal-200 relative z-10" />
      </div>
      
      <div className="space-y-4 mb-10">
        <h2 className="text-3xl font-extrabold text-slate-800 leading-tight">Find Trusted<br/>Pet Services</h2>
        <p className="text-slate-500">Discover nearby verified pet care providers, book instantly, and track effortlessly.</p>
      </div>

      <div className="flex gap-2 mb-12">
        <div className="w-8 h-2 bg-teal-500 rounded-full"></div>
        <div className="w-2 h-2 bg-slate-200 rounded-full"></div>
        <div className="w-2 h-2 bg-slate-200 rounded-full"></div>
      </div>
    </div>
    
    <div className="px-6">
      <button 
        onClick={() => onNavigate('auth')}
        className="w-full bg-slate-900 text-white py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-slate-900/20 active:scale-95 transition-transform"
      >
        Get Started
      </button>
    </div>
  </div>
);


// ==============================
// 2. Login / Register
// ==============================
const AuthScreen = ({ onNavigate }) => {
  const [showSimulateModal, setShowSimulateModal] = useState(false);

  return (
    <div className="w-full h-full flex flex-col px-6 pt-16 pb-10 bg-white overflow-y-auto relative">
      <div className="flex-1 flex flex-col justify-center">
        <div className="w-20 h-20 mb-8 bg-teal-50 rounded-3xl flex items-center justify-center shadow-sm">
          <PawPrint size={36} className="text-teal-500" />
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Welcome Back</h2>
        <p className="text-slate-500 mb-10">Your trusted pet care companion.</p>

        <div className="w-full space-y-4">
          <button onClick={() => setShowSimulateModal(true)} className="w-full bg-white border-2 border-slate-100 text-slate-700 py-3.5 rounded-2xl font-semibold text-base hover:bg-slate-50 active:scale-95 transition-all flex items-center justify-center gap-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          <button onClick={() => setShowSimulateModal(true)} className="w-full bg-white border-2 border-slate-100 text-slate-700 py-3.5 rounded-2xl font-semibold text-base hover:bg-slate-50 active:scale-95 transition-all flex items-center justify-center gap-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05 1.8-3.08 1.8-1.09 0-1.44-.65-2.67-.65-1.2 0-1.58.62-2.63.65-1.07.03-2.24-.91-3.21-1.9-2.05-2.08-3.66-5.88-2.65-8.6.5-1.35 1.76-2.22 3.12-2.25 1.05-.03 2.03.7 2.66.7.62 0 1.83-.88 3.12-.75 1.34.13 2.56.66 3.23 1.67-2.76 1.7-2.27 5.75.52 6.91-.65 1.61-1.4 3.08-2.41 4.42zM15.13 3.46c.55-.66.92-1.58.82-2.46-.8.03-1.77.53-2.33 1.2-.48.56-.91 1.48-.79 2.36.87.07 1.75-.43 2.3-1.1z"/>
            </svg>
            Continue with Apple
          </button>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
            <div className="relative flex justify-center"><span className="bg-white px-4 text-xs font-semibold text-slate-400 tracking-wider">OR LOG IN WITH EMAIL</span></div>
          </div>

          <div className="space-y-4">
            <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-5 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all" />
            <input type="password" placeholder="Password" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-5 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all" />
          </div>

          <div className="flex justify-end pt-1">
            <button onClick={() => onNavigate('forgot-password')} className="text-teal-600 font-bold text-sm">Forgot Password?</button>
          </div>

          <div className="pt-2">
            <button onClick={() => onNavigate('home')} className="w-full bg-slate-900 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-slate-900/20 active:scale-95 transition-transform">
              Log In
            </button>
          </div>
        </div>
      </div>
      
      <div className="pt-8 text-center mt-auto">
        <p className="text-slate-500 text-sm">
          Don't have an account?{' '}
          <button onClick={() => onNavigate('email-signup')} className="text-teal-600 font-bold hover:text-teal-700">Sign Up</button>
        </p>
      </div>

      {/* OAuth Simulation Modal */}
      {showSimulateModal && (
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fade-in">
          <div className="bg-white w-full rounded-3xl p-6 shadow-2xl">
            <h3 className="font-bold text-xl text-slate-800 mb-2">OAuth Simulation</h3>
            <p className="text-sm text-slate-500 mb-6">In a real app, Google/Apple auth succeeds. Should we simulate a returning user or a brand new user?</p>
            <div className="space-y-3">
              <button onClick={() => { setShowSimulateModal(false); onNavigate('home'); }} className="w-full bg-slate-100 text-slate-800 py-3.5 rounded-xl font-bold">Returning User (Go to Home)</button>
              <button onClick={() => { setShowSimulateModal(false); onNavigate('owner-setup'); }} className="w-full bg-teal-500 text-white py-3.5 rounded-xl font-bold shadow-md shadow-teal-500/20">New User (Setup Profile)</button>
              <button onClick={() => setShowSimulateModal(false)} className="w-full bg-white border border-slate-200 text-slate-500 py-3.5 rounded-xl font-bold mt-2">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ==============================
// 2a. Email Sign Up Screen
// ==============================
const EmailSignUpScreen = ({ onNavigate }) => (
  <div className="w-full h-full flex flex-col px-6 pt-16 pb-10 bg-white overflow-y-auto">
    <div className="flex-1">
      <button onClick={() => onNavigate('auth')} className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-600 mb-6">
        <ChevronLeft size={20} />
      </button>
      <h2 className="text-3xl font-bold text-slate-800 mb-2">Create Account</h2>
      <p className="text-slate-500 mb-10">Sign up to start booking trusted pet services.</p>

      <div className="w-full space-y-4">
        <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-5 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all" />
        <input type="password" placeholder="Password (Min 8 characters)" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-5 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all" />
        <input type="password" placeholder="Confirm Password" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-5 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all" />

        <div className="pt-6">
          <button onClick={() => onNavigate('otp-verify')} className="w-full bg-teal-500 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-teal-500/20 active:scale-95 transition-transform">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </div>
);


// ==============================
// 2b. OTP Verification Screen
// ==============================
const OtpVerifyScreen = ({ onNavigate }) => (
  <div className="w-full h-full flex flex-col px-6 pt-16 pb-10 bg-white overflow-y-auto">
    <div className="flex-1">
      <button onClick={() => onNavigate('email-signup')} className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-600 mb-6">
        <ChevronLeft size={20} />
      </button>
      <h2 className="text-3xl font-bold text-slate-800 mb-2">Verify Email</h2>
      <p className="text-slate-500 mb-10">We've sent a 4-digit code to your email. Please enter it below.</p>

      <div className="flex justify-between gap-4 mb-8">
        {[1, 2, 3, 4].map(i => (
          <input key={i} type="text" maxLength={1} placeholder="0" className="w-16 h-16 text-center text-2xl font-bold bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all" />
        ))}
      </div>

      <button onClick={() => onNavigate('owner-setup')} className="w-full bg-teal-500 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-teal-500/20 active:scale-95 transition-transform mb-8">
        Verify Account
      </button>

      <div className="text-center">
        <p className="text-slate-500 text-sm">Didn't receive the code?</p>
        <button className="text-teal-600 font-bold mt-1">Resend Code</button>
      </div>
    </div>
  </div>
);


// ==============================
// 2c. Forgot Password
// ==============================
const ForgotPasswordScreen = ({ onNavigate }) => {
  const [sent, setSent] = useState(false);

  return (
    <div className="w-full h-full flex flex-col px-6 pt-16 pb-10 bg-white overflow-y-auto">
      <div className="flex-1">
        <button onClick={() => onNavigate('auth')} className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-600 mb-6">
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Reset Password</h2>
        <p className="text-slate-500 mb-10">Enter your email address and we will send you a link to reset your password.</p>

        {sent ? (
          <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-6 text-center animate-fade-in">
             <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
               <Mail size={32} />
             </div>
             <h3 className="font-bold text-slate-800 text-lg mb-2">Email Sent!</h3>
             <p className="text-sm text-slate-600 mb-6">Check your inbox for instructions to reset your password.</p>
             <button onClick={() => onNavigate('auth')} className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold">Back to Login</button>
          </div>
        ) : (
          <div className="w-full space-y-6">
            <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-5 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all" />
            <button onClick={() => setSent(true)} className="w-full bg-teal-500 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-teal-500/20 active:scale-95 transition-transform">
              Send Reset Link
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


// ==============================
// 2d. Owner Setup
// ==============================
const OwnerSetupScreen = ({ onNavigate }) => (
  <div className="w-full h-full flex flex-col px-6 pt-16 pb-10 bg-white overflow-y-auto">
    <div className="flex-1">
      <h2 className="text-3xl font-bold text-slate-800 mb-2 mt-4">Profile Setup</h2>
      <p className="text-slate-500 mb-10">Let's get to know you better before adding your furry friends!</p>

      <div className="flex justify-center mb-8">
        <div className="w-32 h-32 bg-slate-100 rounded-full border-4 border-white shadow-lg flex flex-col items-center justify-center text-slate-400 relative cursor-pointer group">
          <User size={40} className="mb-1" />
          <div className="absolute bottom-0 right-0 w-10 h-10 bg-teal-500 rounded-full border-4 border-white flex items-center justify-center text-white">
             <Camera size={18} />
          </div>
        </div>
      </div>

      <div className="w-full space-y-4">
        <input type="text" placeholder="Full Name" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-5 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all" />
        <input type="text" placeholder="Phone Number (Optional)" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-5 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all" />

        <div className="pt-8">
          <button onClick={() => onNavigate('pet-profile')} className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-slate-900/20 active:scale-95 transition-transform">
            Continue
          </button>
        </div>
      </div>
    </div>
  </div>
);


// ==============================
// 3. Create Pet Profile
// ==============================
const PetProfileScreen = ({ onNavigate }) => (
  <div className="w-full h-full flex flex-col bg-slate-50 relative pb-20">
    <div className="bg-white pt-14 pb-4 px-6 border-b border-slate-100 sticky top-0 z-10 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button onClick={() => onNavigate('owner-setup')} className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-600">
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-xl font-bold text-slate-800">Add a Pet</h2>
      </div>
      <button onClick={() => onNavigate('home')} className="text-teal-600 font-bold text-sm bg-teal-50 px-3 py-1.5 rounded-lg">Skip</button>
    </div>

    <div className="p-6 space-y-6 overflow-y-auto">
      <div className="flex justify-center mb-2">
        <div className="w-28 h-28 bg-teal-50 rounded-full border-2 border-dashed border-teal-300 flex flex-col items-center justify-center text-teal-600 relative cursor-pointer shadow-sm">
          <Camera size={28} className="mb-1 opacity-70" />
          <span className="text-xs font-semibold">Add Photo</span>
        </div>
      </div>

      <div className="space-y-4">
        <input className="w-full bg-white border border-slate-200 rounded-2xl p-4 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all" placeholder="Pet Name (e.g. Luna)" />
        
        <div className="grid grid-cols-2 gap-4">
          <input className="w-full bg-white border border-slate-200 rounded-2xl p-4 shadow-sm focus:border-teal-500 outline-none" placeholder="Breed" />
          <input className="w-full bg-white border border-slate-200 rounded-2xl p-4 shadow-sm focus:border-teal-500 outline-none" placeholder="Age" />
        </div>
        
        <input className="w-full bg-white border border-slate-200 rounded-2xl p-4 shadow-sm focus:border-teal-500 outline-none" placeholder="Weight (kg)" />
        <textarea className="w-full bg-white border border-slate-200 rounded-2xl p-4 shadow-sm focus:border-teal-500 outline-none h-24 resize-none" placeholder="Medical Info (Vaccinations, allergies...)" />
        <textarea className="w-full bg-white border border-slate-200 rounded-2xl p-4 shadow-sm focus:border-teal-500 outline-none h-24 resize-none" placeholder="Dietary Notes" />
      </div>

      <button onClick={() => onNavigate('home')} className="w-full bg-teal-500 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-teal-500/30 active:scale-95 transition-transform mt-4">
        Save Pet Profile
      </button>
    </div>
    
    <BottomNav activeTab="pet-profile" onNavigate={onNavigate} />
  </div>
);


// ==============================
// 4. Home Screen
// ==============================
const HomeScreen = ({ onNavigate }) => (
  <div className="w-full h-full flex flex-col bg-slate-50 relative pb-20">
    <div className="bg-teal-500 pt-16 pb-8 px-6 rounded-b-[2.5rem] text-white shadow-md relative z-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Hello, Sarah 👋</h2>
          <p className="text-teal-100 mt-1 text-sm">How is Luna doing today?</p>
        </div>
        <div className="relative">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md cursor-pointer border border-white/20">
            <Bell size={22} className="text-white" />
          </div>
          <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-teal-500 rounded-full"></div>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
        <input 
          type="text" 
          placeholder="Search pet services..." 
          className="w-full bg-white text-slate-800 rounded-2xl py-3.5 pl-12 pr-4 shadow-sm outline-none placeholder:text-slate-400 font-medium"
        />
      </div>
    </div>

    <div className="flex-1 overflow-y-auto px-6 pt-6 pb-8 space-y-8">
      {/* Categories */}
      <div>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide -mx-6 px-6 pb-2">
          {[
            { name: "Grooming", icon: "✂️", color: "bg-blue-50" },
            { name: "Boarding", icon: "🏠", color: "bg-amber-50" },
            { name: "Vet", icon: "🩺", color: "bg-emerald-50" },
            { name: "Training", icon: "🎾", color: "bg-purple-50" },
            { name: "Taxi", icon: "🚕", color: "bg-rose-50" }
          ].map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-2 cursor-pointer group">
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-slate-100 group-hover:scale-105 transition-transform`}>
                {item.icon}
              </div>
              <span className="text-xs font-semibold text-slate-600">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Promo Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-500 p-6 text-white shadow-lg shadow-blue-500/20 relative overflow-hidden">
        <div className="relative z-10">
          <span className="bg-white/20 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md">PROMO</span>
          <h3 className="font-extrabold text-2xl mt-3 mb-1">20% Off First<br/>Grooming</h3>
          <p className="text-blue-100 text-sm mb-4">Book trusted grooming today.</p>
          <button className="bg-white text-blue-600 px-5 py-2.5 rounded-xl font-bold text-sm">Claim Now</button>
        </div>
        <Dog size={120} className="absolute -right-6 -bottom-6 text-white opacity-20" />
      </div>

      {/* Nearby Providers */}
      <div>
        <div className="flex justify-between items-end mb-4">
          <h3 className="font-bold text-xl text-slate-800">Nearby Providers</h3>
          <button onClick={() => onNavigate('explore')} className="text-teal-600 font-semibold text-sm">See All</button>
        </div>

        <div className="space-y-4">
          {[1, 2].map((item) => (
            <div key={item} onClick={() => onNavigate('service-detail')} className="bg-white rounded-3xl p-3 flex gap-4 shadow-sm border border-slate-100 cursor-pointer hover:shadow-md transition-shadow">
              <div className="w-28 h-28 bg-slate-200 rounded-2xl overflow-hidden relative">
                 <img src={`https://api.dicebear.com/7.x/shapes/svg?seed=provider${item}&backgroundColor=e2e8f0`} alt="cover" className="w-full h-full object-cover opacity-70" />
                 <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-md flex items-center gap-1 text-[10px] font-bold text-slate-700">
                    <Star size={10} className="fill-amber-400 text-amber-400"/> 4.9
                 </div>
              </div>
              <div className="flex-1 py-1 pr-2 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-800 leading-tight mb-1">Pet Heaven Grooming</h4>
                  <p className="text-xs text-slate-500 flex items-center gap-1"><MapPin size={12}/> 3km away</p>
                </div>
                <div className="flex justify-between items-end">
                  <p className="font-extrabold text-lg text-teal-600">RM60<span className="text-xs text-slate-400 font-normal">/hr</span></p>
                  <button className="bg-slate-900 text-white rounded-xl px-4 py-2 text-xs font-bold">Book</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    <BottomNav activeTab="home" onNavigate={onNavigate} />
  </div>
);


// ==============================
// 5. Explore / Search Screen
// ==============================
const ExploreScreen = ({ onNavigate }) => (
  <div className="w-full h-full flex flex-col bg-slate-50 relative pb-20">
    <div className="bg-white pt-14 pb-4 px-6 border-b border-slate-100 sticky top-0 z-10 space-y-4">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
        <input 
          type="text" 
          placeholder="Search services, vets, grooming..." 
          className="w-full bg-slate-100 text-slate-800 rounded-2xl py-3.5 pl-12 pr-4 outline-none font-medium"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
        {["All", "Location", "Price", "Top Rated", "Available Today"].map((item, idx) => (
          <button key={item} className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${idx === 0 ? 'bg-teal-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
            {item}
          </button>
        ))}
      </div>
    </div>

    <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5">
      {[1, 2, 3, 4].map((item) => (
        <div key={item} onClick={() => onNavigate('service-detail')} className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <div className="h-40 bg-slate-200 relative">
            <img src={`https://api.dicebear.com/7.x/shapes/svg?seed=explore${item}&backgroundColor=cbd5e1`} alt="cover" className="w-full h-full object-cover opacity-60" />
            <div className="absolute top-3 right-3 w-8 h-8 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-slate-600">
              <Star size={16} />
            </div>
          </div>

          <div className="p-5">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-lg text-slate-800">Happy Paw Boarding {item}</h3>
                <p className="text-sm text-slate-500 flex items-center gap-1 mt-1"><MapPin size={14}/> 2.5km away • Subang Jaya</p>
              </div>
              <div className="flex items-center gap-1 bg-amber-50 text-amber-600 px-2 py-1 rounded-lg text-xs font-bold">
                <Star size={12} className="fill-amber-500"/> 4.8
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
              <p className="font-extrabold text-xl text-slate-800">RM80 <span className="text-xs text-slate-400 font-normal">/ night</span></p>
              <button className="bg-teal-50 text-teal-600 rounded-xl px-5 py-2 text-sm font-bold">Book Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    
    <BottomNav activeTab="explore" onNavigate={onNavigate} />
  </div>
);


// ==============================
// 6. Service Detail Page
// ==============================
const ServiceDetailScreen = ({ onNavigate }) => (
  <div className="w-full h-full flex flex-col bg-white relative">
    {/* Header Actions */}
    <div className="absolute top-14 inset-x-0 px-6 flex justify-between z-20">
      <button onClick={() => onNavigate('explore')} className="w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-slate-800 shadow-sm">
        <ChevronLeft size={24} />
      </button>
      <button className="w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-slate-800 shadow-sm">
        <Heart size={20} />
      </button>
    </div>

    <div className="flex-1 overflow-y-auto pb-24">
      {/* Hero Image */}
      <div className="h-72 bg-slate-200 relative">
         <img src="https://api.dicebear.com/7.x/shapes/svg?seed=detail&backgroundColor=94a3b8" alt="cover" className="w-full h-full object-cover opacity-80" />
      </div>

      <div className="px-6 py-6 -mt-6 bg-white rounded-t-3xl relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-extrabold text-slate-800 leading-tight">Pet Heaven Grooming</h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1"><Shield size={12}/> Verified</span>
              <span className="text-slate-500 text-sm flex items-center gap-1"><MapPin size={14}/> Subang Jaya (3km)</span>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 justify-end font-bold text-lg text-slate-800">
              <Star size={18} className="fill-amber-400 text-amber-400"/> 4.9
            </div>
            <p className="text-xs text-slate-400 underline mt-1">120 Reviews</p>
          </div>
        </div>

        <div className="py-6 border-b border-slate-100">
          <h4 className="font-bold text-lg text-slate-800 mb-3">About</h4>
          <p className="text-slate-500 text-sm leading-relaxed">
            Professional pet grooming and boarding services with over 5 years of experience. We treat your furry friends like our own family.
          </p>
        </div>

        <div className="py-6 border-b border-slate-100">
          <h4 className="font-bold text-lg text-slate-800 mb-4">Pricing</h4>
          <div className="space-y-3">
            <div className="bg-slate-50 rounded-2xl p-4 flex justify-between items-center">
              <div>
                <p className="font-bold text-slate-800">Basic Grooming</p>
                <p className="text-xs text-slate-500">Bath, nail trim, ear cleaning</p>
              </div>
              <span className="font-extrabold text-teal-600">RM60</span>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 flex justify-between items-center">
              <div>
                <p className="font-bold text-slate-800">Full Grooming</p>
                <p className="text-xs text-slate-500">Basic + styling haircut</p>
              </div>
              <span className="font-extrabold text-teal-600">RM120</span>
            </div>
          </div>
        </div>

        <div className="py-6">
          <h4 className="font-bold text-lg text-slate-800 mb-4">Safety Features</h4>
          <div className="space-y-3">
            {["Verified Professional Staff", "Daily Photo/Video Updates", "Vaccination Required"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <CheckCircle2 size={18} className="text-teal-500" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Sticky Action */}
    <div className="absolute bottom-0 inset-x-0 bg-white border-t border-slate-100 p-6 pt-4 flex gap-4 z-20">
      <div className="flex-1">
        <p className="text-xs text-slate-500 font-medium">Starts from</p>
        <p className="font-extrabold text-xl text-slate-800">RM60</p>
      </div>
      <button onClick={() => onNavigate('booking-flow')} className="flex-[2] bg-teal-500 text-white rounded-2xl py-4 font-bold text-lg shadow-lg shadow-teal-500/30 active:scale-95 transition-transform">
        Book Now
      </button>
    </div>
  </div>
);


// ==============================
// 7. Booking Flow
// ==============================
const BookingFlowScreen = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  return (
    <div className="w-full h-full flex flex-col bg-slate-50 relative pb-24">
      <div className="bg-white pt-14 pb-4 px-6 border-b border-slate-100 sticky top-0 z-10">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => step > 1 ? setStep(step - 1) : onNavigate('service-detail')} className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-600">
            <ChevronLeft size={20} />
          </button>
          <h2 className="text-xl font-bold text-slate-800">Booking Summary</h2>
        </div>
        
        {/* Progress */}
        <div className="flex gap-2">
          {[1, 2, 3].map(i => (
            <div key={i} className={`h-1.5 rounded-full flex-1 ${i <= step ? 'bg-teal-500' : 'bg-slate-200'}`}></div>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-extrabold text-slate-800">Select Pet & Service</h3>
            
            <div>
              <p className="font-bold text-sm text-slate-500 mb-3 uppercase tracking-wider">Who is this for?</p>
              <div className="flex gap-4">
                <div className="border-2 border-teal-500 bg-teal-50 rounded-2xl p-4 flex flex-col items-center gap-2 flex-1 relative">
                  <div className="absolute top-2 right-2"><CheckCircle2 size={16} className="text-teal-500 fill-white"/></div>
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-2xl">🐶</div>
                  <span className="font-bold text-slate-800">Luna</span>
                </div>
                <div className="border border-slate-200 bg-white rounded-2xl p-4 flex flex-col items-center justify-center gap-2 flex-1 text-slate-400">
                  <div className="w-12 h-12 border-2 border-dashed border-slate-300 rounded-full flex items-center justify-center text-2xl">+</div>
                  <span className="font-semibold">Add Pet</span>
                </div>
              </div>
            </div>

            <div>
              <p className="font-bold text-sm text-slate-500 mb-3 uppercase tracking-wider">Package</p>
              <div className="space-y-3">
                <div className="border-2 border-teal-500 bg-teal-50 rounded-2xl p-4 flex justify-between items-center relative">
                  <div>
                    <h4 className="font-bold text-slate-800">Basic Grooming</h4>
                    <p className="text-xs text-slate-500 mt-1">~ 1.5 Hours</p>
                  </div>
                  <span className="font-extrabold text-teal-600">RM60</span>
                </div>
                <div className="border border-slate-200 bg-white rounded-2xl p-4 flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-slate-800">Full Grooming</h4>
                    <p className="text-xs text-slate-500 mt-1">~ 2.5 Hours</p>
                  </div>
                  <span className="font-bold text-slate-600">RM120</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-extrabold text-slate-800">Date & Transport</h3>
            
            <div>
              <p className="font-bold text-sm text-slate-500 mb-3 uppercase tracking-wider">Select Date</p>
              <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center justify-between text-slate-800 font-medium">
                <div className="flex items-center gap-3">
                  <Calendar className="text-teal-500" size={20} />
                  Sat, 14 Oct 2023
                </div>
                <ChevronRight size={20} className="text-slate-400" />
              </div>
            </div>
            
            <div>
              <p className="font-bold text-sm text-slate-500 mb-3 uppercase tracking-wider">Select Time</p>
              <div className="grid grid-cols-3 gap-3">
                {["10:00 AM", "11:30 AM", "02:00 PM", "03:30 PM"].map((t, i) => (
                   <div key={t} className={`py-3 text-center rounded-xl font-semibold text-sm ${i===2 ? 'bg-teal-500 text-white' : 'bg-white border border-slate-200 text-slate-600'}`}>{t}</div>
                ))}
              </div>
            </div>

            <div>
               <p className="font-bold text-sm text-slate-500 mb-3 uppercase tracking-wider">Transport</p>
               <div className="border-2 border-teal-500 bg-teal-50 rounded-2xl p-4 flex items-start gap-4">
                 <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 shrink-0 mt-1"><Car size={20}/></div>
                 <div>
                   <h4 className="font-bold text-slate-800 mb-1">Pick up & Drop off</h4>
                   <p className="text-xs text-slate-500 mb-2">Driver will arrive at 01:30 PM</p>
                   <span className="font-extrabold text-teal-600 text-sm">+ RM20</span>
                 </div>
               </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-extrabold text-slate-800">Payment Summary</h3>
            
            <div className="bg-white border border-slate-200 rounded-3xl p-5 space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                   <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-2xl">🐶</div>
                   <div>
                     <p className="font-bold text-slate-800">Basic Grooming</p>
                     <p className="text-xs text-slate-500">Sat, 14 Oct • 02:00 PM</p>
                   </div>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-slate-600"><span>Service Fee</span><span className="font-medium text-slate-800">RM 60.00</span></div>
                <div className="flex justify-between text-slate-600"><span>Transport</span><span className="font-medium text-slate-800">RM 20.00</span></div>
                <div className="flex justify-between text-teal-600 font-medium"><span>Promo (FIRST20)</span><span>- RM 12.00</span></div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                <span className="font-bold text-slate-800">Total Payment</span>
                <span className="font-extrabold text-2xl text-slate-800">RM 68.00</span>
              </div>
            </div>

            <div>
              <p className="font-bold text-sm text-slate-500 mb-3 uppercase tracking-wider">Payment Method</p>
              <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center justify-between text-slate-800 font-medium">
                <div className="flex items-center gap-3">
                  <CreditCard className="text-slate-400" size={20} />
                  •••• 4242
                </div>
                <span className="text-teal-600 text-sm font-bold">Change</span>
              </div>
            </div>
          </div>
        )}

      </div>

      <div className="absolute bottom-0 inset-x-0 bg-white border-t border-slate-100 p-6 z-20">
        <button 
          onClick={() => step < 3 ? setStep(step + 1) : onNavigate('bookings')} 
          className="w-full bg-slate-900 text-white rounded-2xl py-4 font-bold text-lg shadow-lg shadow-slate-900/20 active:scale-95 transition-transform"
        >
          {step < 3 ? 'Continue' : 'Confirm & Pay RM68'}
        </button>
      </div>
    </div>
  );
};


// ==============================
// 8. My Bookings
// ==============================
const BookingsScreen = ({ onNavigate }) => (
  <div className="w-full h-full flex flex-col bg-slate-50 relative pb-20">
    <div className="bg-white pt-14 pb-4 px-6 border-b border-slate-100 sticky top-0 z-10 space-y-4">
      <h2 className="text-2xl font-extrabold text-slate-800">My Bookings</h2>
      <div className="flex gap-2">
        {["Upcoming", "Completed", "Cancelled"].map((tab, idx) => (
          <button key={tab} className={`px-5 py-2.5 rounded-full text-sm font-bold transition-colors ${idx === 0 ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-500'}`}>
            {tab}
          </button>
        ))}
      </div>
    </div>

    <div className="flex-1 overflow-y-auto p-6 space-y-4">
      {[1, 2].map((item) => (
        <div key={item} className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="flex gap-3">
              <div className="w-12 h-12 bg-teal-50 text-teal-500 rounded-xl flex items-center justify-center">
                <Calendar size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg">Happy Paw Grooming</h3>
                <p className="text-sm text-slate-500">Tomorrow • 02:00 PM</p>
              </div>
            </div>
            <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">Confirmed</span>
          </div>

          <div className="bg-slate-50 rounded-xl p-3 flex items-center justify-between text-sm mb-4">
            <div className="flex items-center gap-2 font-medium text-slate-700">
              <span className="text-lg">🐶</span> Luna (Basic Grooming)
            </div>
            <span className="font-bold text-slate-800">RM 68.00</span>
          </div>

          <div className="flex gap-3 mt-2">
            <button className="flex-1 bg-white border-2 border-slate-200 text-slate-700 py-3 rounded-xl font-bold text-sm">Contact</button>
            <button onClick={() => onNavigate('tracking')} className="flex-1 bg-teal-500 text-white py-3 rounded-xl font-bold text-sm shadow-md shadow-teal-500/20">Track Transport</button>
          </div>
        </div>
      ))}
    </div>
    
    <BottomNav activeTab="bookings" onNavigate={onNavigate} />
  </div>
);


// ==============================
// 9. Live Transport Tracking
// ==============================
const TrackingScreen = ({ onNavigate }) => (
  <div className="w-full h-full flex flex-col bg-slate-50 relative">
    {/* Full screen Map Placeholder */}
    <div className="absolute inset-0 bg-slate-200">
      <img src="https://api.dicebear.com/7.x/shapes/svg?seed=map&backgroundColor=cbd5e1" alt="map" className="w-full h-full object-cover opacity-50" />
      
      {/* Route & Pins */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-4 border-dashed border-teal-400 rounded-full opacity-50"></div>
      <div className="absolute top-1/3 left-1/3 w-8 h-8 bg-slate-900 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white"><MapPin size={14}/></div>
      <div className="absolute top-2/3 right-1/3 w-10 h-10 bg-teal-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white animate-bounce"><Car size={18}/></div>
    </div>

    <div className="absolute top-14 left-6 z-10">
      <button onClick={() => onNavigate('bookings')} className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-800 shadow-lg">
        <ChevronLeft size={24} />
      </button>
    </div>

    {/* Bottom Sheet */}
    <div className="absolute bottom-0 inset-x-0 bg-white rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] p-6 pt-4 pb-10 z-20">
      <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-6"></div>
      
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-2xl font-extrabold text-slate-800">Driver Arriving</h3>
          <p className="text-teal-600 font-bold mt-1 text-lg flex items-center gap-2"><Clock size={18}/> 10 mins away</p>
        </div>
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-3xl">🚗</div>
      </div>

      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-slate-300 rounded-full overflow-hidden">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=driver" alt="driver" className="w-full h-full" />
          </div>
          <div>
            <h4 className="font-bold text-slate-800 text-lg">Mike T.</h4>
            <div className="flex items-center gap-1 text-sm text-slate-500 font-medium"><Star size={12} className="fill-amber-400 text-amber-400"/> 4.9 • Toyota Vios (WXX 1234)</div>
          </div>
        </div>
        <button className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
          <Phone size={20} className="fill-green-600" />
        </button>
      </div>

      <button onClick={() => onNavigate('review')} className="w-full bg-slate-900 text-white rounded-2xl py-4 font-bold text-lg shadow-lg">
        [Simulate Complete to Review]
      </button>
    </div>
  </div>
);


// ==============================
// 10. Review Page
// ==============================
const ReviewScreen = ({ onNavigate }) => (
  <div className="w-full h-full flex flex-col bg-slate-50 relative pb-20">
    <div className="bg-white pt-14 pb-4 px-6 border-b border-slate-100 sticky top-0 z-10 flex items-center gap-4">
      <button onClick={() => onNavigate('home')} className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-600">
        <ChevronLeft size={20} />
      </button>
      <h2 className="text-xl font-bold text-slate-800">Rate Experience</h2>
    </div>

    <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center">
      
      <div className="w-24 h-24 bg-slate-200 rounded-3xl overflow-hidden mb-4 mt-4">
         <img src="https://api.dicebear.com/7.x/shapes/svg?seed=detail&backgroundColor=94a3b8" alt="cover" className="w-full h-full object-cover" />
      </div>
      <h3 className="text-2xl font-extrabold text-slate-800 text-center">Pet Heaven Grooming</h3>
      <p className="text-slate-500 text-sm mt-1">Basic Grooming • Today, 02:00 PM</p>

      <div className="flex gap-2 my-10">
        {[1,2,3,4,5].map(i => (
          <Star key={i} size={40} className="fill-amber-400 text-amber-400 cursor-pointer" />
        ))}
      </div>

      <div className="w-full space-y-4">
        <textarea 
          className="w-full bg-white border border-slate-200 rounded-2xl p-4 shadow-sm focus:border-teal-500 outline-none h-32 resize-none" 
          placeholder="Share your experience... How was the service?" 
        />
        
        <div className="w-full h-24 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-500 cursor-pointer">
          <Camera size={24} className="mb-1" />
          <span className="text-xs font-semibold">Add Photos</span>
        </div>
      </div>

      <div className="flex items-center gap-2 text-emerald-600 text-sm font-bold mt-8 bg-emerald-50 px-4 py-2 rounded-full">
        <Shield size={16} /> Verified Booking Review
      </div>
    </div>
    
    <div className="absolute bottom-0 inset-x-0 bg-white border-t border-slate-100 p-6 pt-4 z-20">
      <button onClick={() => onNavigate('merchant')} className="w-full bg-teal-500 text-white rounded-2xl py-4 font-bold text-lg shadow-lg shadow-teal-500/30 active:scale-95 transition-transform">
        Submit Review
      </button>
      <div className="text-center mt-2">
        <span className="text-xs text-slate-400">Next preview: Merchant Dashboard</span>
      </div>
    </div>
  </div>
);


// ==============================
// 11. Merchant Dashboard
// ==============================
const MerchantScreen = ({ onNavigate }) => (
  <div className="w-full h-full flex flex-col bg-slate-900 relative pb-20 text-white">
    <div className="pt-14 pb-6 px-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-slate-400 text-sm font-medium">Merchant Portal</p>
          <h2 className="text-2xl font-extrabold">Pet Heaven 🏬</h2>
        </div>
        <button onClick={() => onNavigate('home')} className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white">
          <LogOut size={18} />
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-800 rounded-3xl p-5 border border-slate-700">
          <h3 className="text-slate-400 text-sm font-medium mb-2">Today's Revenue</h3>
          <p className="text-2xl font-bold text-emerald-400">RM 840</p>
        </div>
        <div className="bg-slate-800 rounded-3xl p-5 border border-slate-700">
          <h3 className="text-slate-400 text-sm font-medium mb-2">Pending Requests</h3>
          <p className="text-2xl font-bold text-amber-400">4 New</p>
        </div>
      </div>
    </div>

    <div className="flex-1 bg-slate-50 rounded-t-[2.5rem] p-6 pt-8 text-slate-800 overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-xl">Booking Management</h3>
        <span className="text-teal-600 font-bold text-sm">See All</span>
      </div>

      <div className="space-y-4 mb-8">
        {[1, 2].map((item) => (
          <div key={item} className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-bold text-lg leading-tight">Basic Grooming</h4>
                <p className="text-sm text-slate-500 mt-1">Customer: Sarah • Luna 🐶</p>
              </div>
              <span className="font-extrabold text-slate-800">RM 60</span>
            </div>
            <p className="text-xs text-amber-600 font-bold bg-amber-50 px-2 py-1 rounded-md inline-block mb-4">Today, 04:00 PM</p>
            
            <div className="flex gap-3">
              <button className="flex-1 bg-slate-100 text-slate-600 rounded-xl py-3 font-bold text-sm">Reject</button>
              <button className="flex-1 bg-teal-500 text-white rounded-xl py-3 font-bold text-sm shadow-md shadow-teal-500/20">Accept Request</button>
            </div>
          </div>
        ))}
      </div>

      <h3 className="font-bold text-xl mb-4">Analytics</h3>
      <div className="h-48 bg-white border border-slate-100 rounded-3xl shadow-sm flex items-end justify-between px-6 pb-6 pt-10">
         {/* Fake Chart */}
         {[40, 70, 45, 90, 60, 100, 80].map((h, i) => (
           <div key={i} className="w-6 bg-teal-100 rounded-t-md relative">
             <div className="absolute bottom-0 inset-x-0 bg-teal-500 rounded-t-md" style={{height: `${h}%`}}></div>
           </div>
         ))}
      </div>
    </div>
  </div>
);


// ==============================
// 12. Profile & Settings
// ==============================
const SettingsScreen = ({ onNavigate }) => (
  <div className="w-full h-full flex flex-col bg-slate-50 relative pb-20">
    <div className="bg-white pt-16 pb-6 px-6 border-b border-slate-100 relative text-center">
      <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-md">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=sarah" alt="avatar" className="w-full h-full" />
      </div>
      <h2 className="text-2xl font-extrabold text-slate-800">Sarah Jenkins</h2>
      <p className="text-slate-500 text-sm mt-1">+60 12-345 6789 • sarah@example.com</p>
    </div>

    <div className="flex-1 overflow-y-auto p-6 space-y-6">
      
      <div>
        <h3 className="font-bold text-sm text-slate-400 mb-3 uppercase tracking-wider pl-2">Account</h3>
        <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
          {[
            { icon: User, label: "Personal Information", nav: 'home' },
            { icon: Dog, label: "My Pets", nav: 'pet-profile' },
            { icon: MapPin, label: "Saved Addresses", nav: 'home' }
          ].map((item, i) => (
            <div key={i} onClick={() => onNavigate(item.nav)} className="px-5 py-4 flex items-center justify-between border-b border-slate-50 last:border-0 cursor-pointer hover:bg-slate-50">
              <div className="flex items-center gap-3 text-slate-700 font-medium">
                <item.icon size={20} className="text-teal-500" />
                {item.label}
              </div>
              <ChevronRight size={18} className="text-slate-400" />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-bold text-sm text-slate-400 mb-3 uppercase tracking-wider pl-2">Preferences</h3>
        <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
          {[
            { icon: CreditCard, label: "Payment Methods" },
            { icon: Bell, label: "Notifications" },
            { icon: Settings, label: "App Settings" }
          ].map((item, i) => (
            <div key={i} className="px-5 py-4 flex items-center justify-between border-b border-slate-50 last:border-0 cursor-pointer hover:bg-slate-50">
              <div className="flex items-center gap-3 text-slate-700 font-medium">
                <item.icon size={20} className="text-slate-400" />
                {item.label}
              </div>
              <ChevronRight size={18} className="text-slate-400" />
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => onNavigate('auth')} className="w-full bg-white border border-red-100 text-red-500 py-4 rounded-2xl font-bold text-lg shadow-sm hover:bg-red-50 flex items-center justify-center gap-2">
        <LogOut size={20} />
        Log Out
      </button>

    </div>
    
    <BottomNav activeTab="settings" onNavigate={onNavigate} />
  </div>
);
