import dayjs from 'dayjs';
import { Fragment, useRef, useState, useContext, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import { REACT_APP_TASK_MANAGER_API_URL } from '../../../constants';
import { TaskManagerContext } from '../../../contexts/TaskManagerContext';
import StatusListbox from '../../listboxes/StatusListbox';
import { TASK_STATUSES } from '../../../constants';

export default function EditTaskForm({
  open,
  setOpen,
  task,
}) {
  const { user, loadTasks } = useContext(TaskManagerContext);
  const editTask = async (updatedTask) => {
    try {
      const response = await (await fetch(`${REACT_APP_TASK_MANAGER_API_URL}/user/${user._id}/task/${task._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...updatedTask,
          user: user._id,
        }),
      })).json();
      if (response.error) {
        throw new Error(response.errorMessage)
      } else if (response.data) {
        loadTasks(response.data);
      } else {
        throw new Error('No response from the server')
      }
    } catch (error) {
      console.error('Error: ', error.message);
    }
  }
  const cancelButtonRef = useRef(null);
  const submitButtonRef = useRef(null);
  const [description, setDescription] = useState(task.description || '');
  const [title, setTitle] = useState(task.title || '');

  const [date, setDate] = useState(new Date(task.dueDate).toISOString().slice(0, 10));
  const presetStatusIndex = TASK_STATUSES.findIndex(status => status.value === task.status)
  const [selectedStatus, setSelectedStatus] = useState(TASK_STATUSES[presetStatusIndex]);
  console.log(date)
  const handleStatusChange = (value) => {
    setSelectedStatus(value);
  }
  const submitUpdatedTask = async () => {
    await editTask({
      dueDate: dayjs(date).toDate(),
      description,
      title,
      status: selectedStatus.value
    });
    setOpen(false);
  }
  const handleClose = () => {
    setSelectedStatus(TASK_STATUSES[presetStatusIndex]);
    setDescription(task.description);
    setTitle(task.title);
    setDate(new Date(task.dueDate).toISOString().slice(0, 10));
    setOpen(false);
  }
  const validInput = () => {
    return !(
      date !== ''
      && title !== ''
      && description !== ''
    )
  }
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <Fragment>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                      Edit Task "{task.title}"
                    </Dialog.Title>
                    <div className="row">
                      <div className="col">
                        <label htmlFor="title" className="text-left block text-sm font-medium leading-6 text-gray-900">
                          Title
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="title"
                            id="title"
                            value={title}
                            onChange={(v) => setTitle(v.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="First Task"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <label htmlFor="description" className="text-left mt-2 block text-sm font-medium leading-6 text-gray-900">
                          Description
                        </label>
                        <div>
                          <textarea
                            rows={4}
                            name="description"
                            id="description"
                            placeholder="This is the first task that should be completed"
                            value={description}
                            onChange={(v) => setDescription(v.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <StatusListbox selected={selectedStatus} handleStatusChange={handleStatusChange} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <label htmlFor="dueDate" className="text-left mt-2 block text-sm font-medium leading-6 text-gray-900">
                          Due Date
                        </label>
                        <div className="mt-2">
                          <input
                            type="date"
                            name="dueDate"
                            id="dueDate"
                            value={date}
                            onChange={(v) => setDate(v.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                    onClick={() => handleClose()}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className={`inline-flex w-full justify-center rounded-md ${validInput() ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-500'}  px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2`}
                    onClick={() => submitUpdatedTask()}
                    ref={submitButtonRef}
                    disabled={validInput()}
                  >
                    Submit
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}