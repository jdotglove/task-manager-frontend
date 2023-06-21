import { useState, useContext, useEffect, Fragment } from 'react';	
import { useNavigate } from 'react-router-dom';	

import { UserContext } from '../contexts/UserContext';	
import AddTaskForm from '../components/forms/task/AddTaskForm';	

const tasks = [	
  { id: 1, title: 'First Task', description: 'This is the first task you should attempt to complete', status: 'Todo', dueDate: new Date().toDateString() },	
  // More people...	
]	



export default function Example() {	
  const { user } = useContext(UserContext);	
  const [open, setOpen] = useState(false);	
  const navigate = useNavigate();	

  useEffect(() => {	
    if (!user) {	
      navigate('/');	
    }	
  })	
  return (	
    <Fragment>	
      <div className="min-h-full">	
        <div className="bg-gray-900">	
          <div className="mx-auto max-w-7xl">	
            <div className="bg-gray-900 py-10">	
              <div className="px-4 sm:px-6 lg:px-8">	
                <div className="sm:flex sm:items-center">	
                  <div className="sm:flex-auto">	
                    <h1 className="text-base font-semibold leading-6 text-white">Tasks</h1>	
                    <p className="mt-2 text-sm text-gray-300">	
                      A list of all the tasks you've created including their title, description, status, and due date.	
                    </p>	
                  </div>	
                  <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">	
                    <button	
                      type="button"	
                      className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"	
                      onClick={() => setOpen(true)}	
                    >	
                      Add task	
                    </button>	
                  </div>	
                  <AddTaskForm open={open} setOpen={setOpen} />	
                </div>	
                <div className="mt-8 flow-root">	
                  <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">	
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">	
                      <table className="min-w-full divide-y divide-gray-700">	
                        <thead>	
                          <tr>	
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">	
                              Title	
                            </th>	
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">	
                              Description	
                            </th>	
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">	
                              Status	
                            </th>	
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">	
                              Due Date	
                            </th>	
                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">	
                              <span className="sr-only">Edit</span>	
                            </th>	
                          </tr>	
                        </thead>	
                        <tbody className="divide-y divide-gray-800">	
                          {tasks.map((task) => (	
                            <tr key={task.id}>	
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">	
                                {task.title}	
                              </td>	
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{task.description}</td>	
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{task.status}</td>	
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{task.dueDate}</td>	
                              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">	
                                <a href="#edit-task" className="text-indigo-400 hover:text-indigo-300">	
                                  Edit<span className="sr-only">, {task.title}</span>	
                                </a>	
                              </td>	
                            </tr>	
                          ))}	
                        </tbody>	
                      </table>	
                    </div>	
                  </div>	
                </div>	
              </div>	
            </div>	
          </div>	
        </div>	
      </div>	
    </Fragment>	
  )	
}	
