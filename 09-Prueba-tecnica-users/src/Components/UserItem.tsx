import { type User } from '../types'

interface Props {
  user: User
  coloredRows: boolean
  index: number
  deleteUser: (id: string) => void
}

export default function UserItem ({
  user,
  index,
  coloredRows,
  deleteUser
}: Props) {
  const backgroundColor = index % 2 === 0 ? '#111827' : '#1F2937'
  const color = coloredRows ? backgroundColor : 'transparent'
  return (
    <tr className='border-b border-[#3F465a]' style={{ backgroundColor: color }}>
      <th scope="row" className="flex justify-center items-center px-6 py-4 font-medium whitespace-nowrap text-white text-center">
        <img src={user.picture.thumbnail} alt={user.name.first} />
      </th>
      <td className="px-6 py-4 text-center border-x border-[#353c4f]">
        {user.name.first}
      </td>
      <td className="px-6 py-4 text-center border-x border-[#353c4f]">
        {user.name.last}
      </td>
      <td className="px-6 py-4 text-center border-x border-[#353c4f]">
        {user.location.country}
      </td>
      <td className="px-6 py-4 text-center border-x border-[#353c4f]">
        <button
          onClick={() => { deleteUser(user.login.uuid) }}
          className="font-medium text-red-600 text-center dark:text-red-500 hover:underline">Remove</button>
      </td>
    </tr>
  )
}
