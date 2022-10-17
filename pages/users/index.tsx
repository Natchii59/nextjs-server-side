import type { GetServerSideProps, NextPage } from 'next'
import NextLink from '../../components/next-link'
import { getAllUsers } from '../../lib/api'
import { User } from '../../lib/types'

interface UsersProps {
  users: User[]
}

const Users: NextPage<UsersProps> = ({ users }) => {
  return (
    <>
      <h1 className='text-2xl font-semibold mb-4'>Users List</h1>

      <div className='flex flex-col gap-2 max-w-md'>
        {users.map((user) => (
          <NextLink
            key={user.id}
            link={{ href: `/users/${user.id}` }}
            className='py-2 px-4 border border-zinc-500 rounded-md'
          >
            <p>
              <span className='text-blue-400 underline underline-offset-2'>
                {user.name}
              </span>{' '}
              <span className='text-zinc-400'>({user.id})</span>
            </p>

            <p className='text-zinc-300 text-sm'>{user.email}</p>
          </NextLink>
        ))}
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await getAllUsers()

  return {
    props: {
      users
    }
  }
}

export default Users
