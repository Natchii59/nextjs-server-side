import type { GetServerSideProps, NextPage } from 'next'
import { getUserById } from '../../lib/api'
import { User } from '../../lib/types'

interface UserPageProps {
  user: User
}

const UserPage: NextPage<UserPageProps> = ({ user }) => {
  return (
    <>
      <h1 className='text-2xl font-semibold mb-4'>{user.name}</h1>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string }
  const user = await getUserById(id)

  return {
    props: {
      user
    }
  }
}

export default UserPage
