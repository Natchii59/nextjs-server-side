import type { GetServerSideProps, NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <h1 className='text-2xl font-semibold mb-4'>
        Welcome to Server Side App
      </h1>

      <p>
        It is a test application. It use{' '}
        <a
          href='https://jsonplaceholder.typicode.com/'
          className='text-blue-400 underline underline-offset-2'
        >
          JsonPlaceHolder API
        </a>
        , for test server side.
      </p>

      <p>I use AppBar design of Discord</p>
    </>
  )
}

export default Home
