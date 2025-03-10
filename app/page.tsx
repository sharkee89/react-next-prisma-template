import { SignInForm } from '@/app/components/auth/sign-in-form';
import { getAuth } from './auth/cookie';
import { redirect } from 'next/navigation';

const SignInPage = async () => {
  const { user } = await getAuth();
  if (!!user) {
    redirect("/dashboard");
  }
  return (
    <>
      <SignInForm />
    </>
  );
};

export default SignInPage;