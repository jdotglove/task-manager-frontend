import BaseUserAuthForm from './BaseUserAuthForm';

export default function LoginForm({
  loginUser,
  loginError
}) {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Login to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <BaseUserAuthForm submitUser={loginUser} loginError={loginError} buttonTitle={"Login"} />
      </div>
    </div>
  )
}