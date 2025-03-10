import { signIn } from '@/app/auth/actions/sign-in';

const SignInForm = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center"> {/* Dark background with opacity */}
      <form 
        action={signIn} 
        className="w-full max-w-md p-6 bg-gray-800 shadow-lg rounded-lg flex flex-col gap-y-4 transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2"
      >
        {/* Email Field */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-gray-300 mb-1">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            className="px-4 py-2 border border-gray-600 rounded-md text-gray-100 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-lightblue-400"
          />
        </div>

        {/* Password Field */}
        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm font-medium text-gray-300 mb-1">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
            className="px-4 py-2 border border-gray-600 rounded-md text-gray-100 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-lightblue-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 py-2 px-4 bg-lightblue-500 text-white font-semibold rounded-md hover:bg-lightblue-600 focus:outline-none focus:ring-2 focus:ring-lightblue-400"
        >
          Sign In
        </button>

        {/* Optionally, Add a "Forgot password" link */}
        <div className="mt-4 text-center text-sm">
          <a href="#" className="text-lightorange-400 hover:text-lightorange-500">Forgot password?</a>
        </div>
      </form>
    </div>
  );
};

export { SignInForm };
