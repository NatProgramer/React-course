import { sortBy, type User } from '../types.d'
import UserItem from './UserItem'

interface Props {
  coloredRows: boolean
  users: User[]
  deleteUser: (id: string) => void
  changeSorting: (sortType: sortBy) => void
}

export default function UsersTable ({
  coloredRows,
  users,
  deleteUser,
  changeSorting
}: Props) {
  return (

<div className="relative border border-[#56617e] overflow-x-auto shadow-md sm:rounded-sm">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="text-center px-6 py-3 border-x border-[#56617e]">
          Foto
        </th>
        <th onClick={() => { changeSorting(sortBy.FIRST) }} scope="col" className="text-center px-6 py-3 border-x border-[#56617e] cursor-pointer">
          Nombre
        </th>
        <th onClick={() => { changeSorting(sortBy.LAST) }} scope="col" className="text-center px-6 py-3 border-x border-[#56617e] cursor-pointer">
          Apellido
        </th>
        <th onClick={() => { changeSorting(sortBy.COUNTRY) }} scope="col" className="text-center px-6 py-3 border-x border-[#56617e] cursor-pointer">
          Pais
        </th>
        <th scope="col" className="text-center px-6 py-3 border-x border-[#56617e]">
          Accion
        </th>
      </tr>
    </thead>
    <tbody className='even:border-gray-700'>
      {users.map((user, index) => {
        return (
          <UserItem
            coloredRows={coloredRows}
            deleteUser={deleteUser}
            index={index}
            user={user}
            key={user.login.uuid}
          />
        )
      })}
    </tbody>
  </table>
</div>
  )
}

/*
*/
