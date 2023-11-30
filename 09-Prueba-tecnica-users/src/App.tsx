import { useEffect, useMemo, useRef, useState } from 'react'
import { sortBy, type User } from './types.d'
import UsersTable from './Components/UsersTable'

type filterByCountryFn = (country: string) => User[]

const fetchUsers = async (page: number) => {
  return await fetch(
      `https://randomuser.me/api/?results=100&page=${page}&seed=thenat`
  ).then(async results => await results.json())
    .then(response => response.results)
}

export default function App () {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [coloredRows, setColoredRows] = useState<boolean>(false)
  const [sortingBy, setSortingBy] = useState<sortBy>(sortBy.NONE)
  const [filterByCountry, setFilterByCountry] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const originalUsers = useRef<User[]>([])

  const toggleColoredRows = () => {
    setColoredRows(prevState => !prevState)
  }

  const toggleSortByCountry = () => {
    if (sortingBy === sortBy.COUNTRY) setSortingBy(sortBy.NONE)

    setSortingBy(sortBy.COUNTRY)
  }

  const deleteUser = (id: string) => {
    setUsers(prevState => prevState.filter(user => user.login.uuid !== id))
  }

  const handleSortingChange = (sortType: sortBy) => {
    setSortingBy(sortType)
  }

  const handleFilterByCountry = useMemo<filterByCountryFn>(
    () => (country: string) => {
      const newFilteredUsers = users
        .filter(user => user.location.country.toLowerCase()
          .includes(country.toLowerCase()))

      return newFilteredUsers
    }, [filterByCountry])

  const filteredUsers = filterByCountry.length > 0
    ? handleFilterByCountry(filterByCountry)
    : users

  const sortUsers = useMemo<(users: User[]) => User[]>(() => (users: User[]) => {
    if (sortingBy === sortBy.COUNTRY) {
      return users.toSorted(
        (a, b) => a.location.country.localeCompare(b.location.country)
      )
    }
    if (sortingBy === sortBy.FIRST) {
      return users.toSorted(
        (a, b) => a.name.first.localeCompare(b.name.first)
      )
    }
    if (sortingBy === sortBy.LAST) {
      return users.toSorted(
        (a, b) => a.name.last.localeCompare(b.name.last)
      )
    }

    return users
  }, [filteredUsers, sortingBy])

  const sortedUsers = sortUsers(filteredUsers)

  useEffect(() => {
    setLoading(true)

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchUsers(currentPage).then(users => {
      setUsers(prevState => {
        const newUsers = prevState.concat(users)
        originalUsers.current = newUsers

        return newUsers
      })
    })
      .catch((err) => { console.log(err) })
      .finally(() => { setLoading(false) })
  }, [currentPage])

  return (
    <>
      <main>
        <h1 className='text-center text-4xl my-7'>Prueba tecnica</h1>
        <header className='w-full mb-10 flex justify-center gap-6 text-lg'>
          <button className='bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700 transition-colors' onClick={toggleColoredRows}>Colorear filas</button>
          <button className='bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700 transition-colors' onClick={toggleSortByCountry}>
            {sortingBy === sortBy.COUNTRY
              ? 'No ordenar por pais'
              : 'Ordenar por pais'
            }
          </button>
          <button className='bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700 transition-colors' onClick={() => { setUsers(originalUsers.current) }}>
            Restaurar usuarios
          </button>

          <div className="relative mt-1">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              placeholder="Search for items"
              className="text-base block py-3 ps-10 text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => { setFilterByCountry(e.target.value) }}
            />
          </div>
        </header>

        { users.length > 0
          ? <UsersTable
            users={sortedUsers}
            coloredRows={coloredRows}
            deleteUser={deleteUser}
            changeSorting={handleSortingChange}
          />
          : <></>
        }

        <div className='w-full py-6 flex justify-center text-lg'>

          { loading ? <h1>Cargando...</h1> : <></> }

          { loading
            ? <></>
            : <button className='w-64 bg-gray-800 px-4 py-2 rounded-md my-8 mx-auto hover:bg-gray-700 transition-colors' onClick={() => { setCurrentPage(currentPage + 1) }}>
              Cargar mas resultados
            </button>
          }
        </div>
      </main>
    </>
  )
}
