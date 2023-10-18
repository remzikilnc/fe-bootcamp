import DeleteButton from "@/components/button/delete-button";
import StatusBadge from "@/components/badge/status-badge";

const todos = [
  {
    id: 1,
    title: 'Back End Developer',
    details: 'EngineeringEngineeringEngineeringEngineeringEngineeringEngineeringEngineeringEngineeringEngineeringEngineeringEngineeringEngineeringEngineering',
    status: false,
  },
  {
    id: 2,
    title: 'Test Test TestTest',
    details: 'Test TestTestTestTestTestTest Test Test',
    status: true,
  },
  {
    id: 3,
    title: 'Test ',
    details: 'Remote Test Test Test Test  Test',
    status: true,
  },
]



export default function Home() {

  const handleClick = () => {
    console.log('w')
  }

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="overflow-hidden bg-gray-900 shadow sm:rounded-md max-w-3xl w-full">
        <ul className="divide-y divide-gray-700">
          {todos.map((todo) => (
              <li key={todo.id}>
                <div className="flex flex-row w-full justify-between">
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center">
                      <p className="truncate text-sm font-medium text-white">{todo.title}</p>
                      <div className="ml-2 flex flex-shrink-0">
                       <StatusBadge status={todo.status}/>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="text-sm text-gray-500 text-ellipsis overflow-hidden whitespace-nowrap max-w-xl">
                          {todo.details}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center px-4 py-4 sm:px-6">
                    <DeleteButton/>
                  </div>
                </div>
              </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
