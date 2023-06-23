import dayjs from 'dayjs';
import { Fragment, useContext, useState } from 'react';
import { TrashIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid';
import EditTaskForm from '../forms/task/EditTaskForm';
import { SORT_DIRECTIONS } from '../../constants';
import { TaskManagerContext } from '../../contexts/TaskManagerContext';
import { compareISOTimestamps, compareStrings } from '../../utils';


const statuses = { 'Completed': 'text-green-400 ', 'In Progress': 'text-blue-400 ', 'Todo': 'text-yellow-400 ' }

export default function TaskTable({
  tasks,
}) {
  const { deleteTask } = useContext(TaskManagerContext);
  const [open, setOpen] = useState(false);
  const [liveEditTask, setLiveEditTask] = useState(null);
  const [activeSortDirection, setActiveSortDirection] = useState(SORT_DIRECTIONS.ASC_SORT);
  const [activeSortCol, setActiveSortCol] = useState('title');
  const handleClick = (task) => {
    setOpen(true);
    setLiveEditTask(task);
  }
  const formatDate = (date) => {
    return dayjs(date).format('MM/DD/YYYY');
  }
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
  }
  const handleSortClick = (columnTitle) => {
    if (columnTitle === activeSortCol) {
      if (activeSortDirection === SORT_DIRECTIONS.ASC_SORT) {
        setActiveSortDirection(SORT_DIRECTIONS.DSC_SORT);
      } else {
        setActiveSortDirection(SORT_DIRECTIONS.ASC_SORT);
      }
    } else {
      setActiveSortCol(columnTitle);
      setActiveSortDirection(SORT_DIRECTIONS.ASC_SORT);
    }
  }

  const chevronIcon = (columnTitle) => {
    let icon = (<ChevronUpIcon className="h-5 w-5" aria-hidden="true" />)
    if (activeSortCol === columnTitle && activeSortDirection === SORT_DIRECTIONS.DSC_SORT) {
      icon = (<ChevronDownIcon className="h-5 w-5" aria-hidden="true" />)
    }
    return icon
  }

  const sortedTasks = () => {
    const holder = tasks;
    if (activeSortCol === 'dueDate') {
      holder.sort((a, b) => {
        return compareISOTimestamps(dayjs(a.dueDate).toISOString(), dayjs(b.dueDate).toISOString(), activeSortDirection === SORT_DIRECTIONS.DSC_SORT);
      });
    } else {
      holder.sort((a, b) => {
        return compareStrings(a[activeSortCol], b[activeSortCol], activeSortDirection === SORT_DIRECTIONS.DSC_SORT)
      });
    }
    return holder;
  }

  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                  <button onClick={() => handleSortClick('title')} className="group inline-flex">
                    Title
                    <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                      {chevronIcon('title')}
                    </span>
                  </button>
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                  Description
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                  <button onClick={() => handleSortClick('status')} className="group inline-flex">
                    Status
                    <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                      {chevronIcon('status')}
                    </span>
                  </button>
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                  <button onClick={() => handleSortClick('dueDate')} className="group inline-flex">
                    Due Date
                    <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                      {chevronIcon('dueDate')}
                    </span>
                  </button>
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span className="sr-only">Edit</span>
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span className="sr-only">Delete</span>
                </th>
              </tr>
            </thead>
            {sortedTasks().length ? (
              <Fragment>
                <tbody className="divide-y divide-gray-800">
                  {sortedTasks().map((task) => (
                    <tr key={task._id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                        {task.title}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{task.description}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                        <div className='row'>
                          <div className='col'>
                            <div className={classNames(statuses[task.status], 'flex-none rounded-full p-1')}>
                              {task.status}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{formatDate(task.dueDate)}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <button onClick={() => handleClick(task)} type="button" className="text-indigo-400 hover:text-indigo-300">
                          Edit
                        </button>
                      </td>
                      <td className="relative whitespace-nowrap text-red-700 py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <TrashIcon onClick={() => deleteTask(task._id)} className="h-6 w-6" aria-hidden="true" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Fragment>
            ) : (
              <Fragment></Fragment>
            )}
          </table>
          {sortedTasks().length > 0 && liveEditTask ? (
            <Fragment>
              <EditTaskForm key={liveEditTask._id} open={open} setOpen={setOpen} task={liveEditTask} />
            </Fragment>
          ) : (
            <Fragment></Fragment>
          )}
        </div>
      </div>
    </div>
  )
}