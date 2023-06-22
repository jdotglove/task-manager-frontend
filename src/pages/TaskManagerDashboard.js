import { useState, useContext, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import { TaskManagerContext } from '../contexts/TaskManagerContext';
import AddTaskForm from '../components/forms/task/AddTaskForm';
import TaskTable from '../components/tables/TaskTable';

export default function Example() {
  const { user, loadTasks, tasks } = useContext(TaskManagerContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate('/');
    } else {
      loadTasks();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
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
                <TaskTable tasks={tasks} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}	
