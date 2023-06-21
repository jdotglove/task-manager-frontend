import { Fragment, useState } from 'react';


export default function BaseForm({
  buttonTitle,
  submitUser,
  signup,
}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form className="space-y-6" action="#">
      <Fragment>
        <div className="items-center justify-between">
          <label htmlFor="username" className="block text-sm text-left font-medium leading-6 text-white">
            Username
          </label>
          <div className="mt-2">
            <input
              id="username"
              name="username"
              type="username"
              required
              value={username}
              onChange={(v) => setUsername(v.target.value)}
              className="block w-full rounded-md border-0 px-2 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </Fragment>
      {signup ? (
        <Fragment>
          <div className="items-center justify-between">
            <label htmlFor="email" className="block text-sm text-left font-medium leading-6 text-white">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(v) => setEmail(v.target.value)}
                className="block w-full rounded-md border-0 px-2 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment></Fragment>
      )}
      <Fragment>
        <div className="mt-2">
          {signup ? (
            <label htmlFor="password" className="block mb-2 text-left text-sm font-small leading-4 text-white">
              Enter password
            </label>
          ) : (
            <div className="text-sm">
              <label htmlFor="password" className="block mb-2 text-left font-medium leading-4 text-white">
                Password
              </label>
              <a href="/#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                Forgot password?
              </a>
            </div>
          )}
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            value={password}
            onChange={(v) => setPassword(v.target.value)}
            className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          />
        </div>
        {signup ? (
          <Fragment>
            <div className="mt-5">
              <label htmlFor="password" className="block mb-2 text-left text-sm font-small leading-4 text-white">
                Re-enter password
              </label>
              <input
                id="password-confirmation"
                name="password-confirmation"
                type="password"
                autoComplete="new-password"
                required
                value={passwordConfirmation}
                onChange={(v) => setPasswordConfirmation(v.target.value)}
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
            </div>
          </Fragment>
        ) : (
          <Fragment></Fragment>
        )}
      </Fragment>
      <div>
        <button
          type="button"
          onClick={() => submitUser(username, password, signup ? email : undefined)}
          className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          {buttonTitle}
        </button>
      </div>
    </form>
  )
}