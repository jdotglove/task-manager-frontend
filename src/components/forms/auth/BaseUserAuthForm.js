import { Fragment, useState } from 'react';


export default function BaseForm({
  buttonTitle,
  submitUser,
  signup,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    submitUser(formData.username, formData.password, signup ? formData.email : undefined)
  }

  return (
    <form className="space-y-6" action="#" onSubmit={(e) => handleSubmit(e)}>
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
              defaultValue={''}
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
                defaultValue={''}
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
            defaultValue={''}
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
                defaultValue={''}
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
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          {buttonTitle}
        </button>
      </div>
    </form>
  )
}