import { signUp } from '../../auth/actions/sign-up';

const SignUpForm = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">  {/* Dark background with opacity */}
      <form 
        action={signUp} 
        className="w-full max-w-md p-6 bg-gray-800 shadow-lg rounded-lg flex flex-col gap-y-4 transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2"
      >
        {/* First Name Field */}
        <div className="flex flex-col">
          <label htmlFor="firstName" className="text-sm font-medium text-gray-300 mb-1">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            required
            className="px-4 py-2 border border-gray-600 rounded-md text-gray-100 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-lightblue-400"
          />
        </div>

        {/* Last Name Field */}
        <div className="flex flex-col">
          <label htmlFor="lastName" className="text-sm font-medium text-gray-300 mb-1">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Enter your last name"
            required
            className="px-4 py-2 border border-gray-600 rounded-md text-gray-100 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-lightblue-400"
          />
        </div>

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

        {/* Confirm Password Field */}
        <div className="flex flex-col">
          <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-300 mb-1">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            required
            className="px-4 py-2 border border-gray-600 rounded-md text-gray-100 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-lightblue-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 py-2 px-4 bg-lightblue-500 text-white font-semibold rounded-md hover:bg-lightblue-600 focus:outline-none focus:ring-2 focus:ring-lightblue-400"
        >
          Sign Up
        </button>

        {/* Optionally, Add a "Already have an account?" link */}
        <div className="mt-4 text-center text-sm">
          <a href="/sign-in" className="text-lightorange-400 hover:text-lightorange-500">Already have an account? Sign In</a>
        </div>
      </form>
    </div>
  );
};

export { SignUpForm };
