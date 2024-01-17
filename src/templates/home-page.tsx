import { Link } from 'waku'

export const HomePage = async () => {
  const data = await getData()

  return (
    <div>
      <h1>I&apos;m Jeongjin Oh</h1>
      <div className='flex flex-col items-start w-full flex-1 text-start pt-5 sm:pt-10 px-0 sm:px-10 lg:px-40'>
        <p></p>
      </div>
      <Link to='/about'>About me</Link>
    </div>
  )
}

const getData = async () => {
  const data = {
    title: 'Waku',
    body: 'Hello world!',
  }

  return data
}
