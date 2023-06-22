import { Cog8ToothIcon } from '@heroicons/react/24/outline';

export default function TaskTable({
  tasks,
}) {
  return (
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
                    <Cog8ToothIcon className="h-6 w-6" aria-hidden="true" />	
                    <a href="#edit-task" className="text-indigo-400 hover:text-indigo-300">
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}