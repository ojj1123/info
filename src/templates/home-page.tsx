import { Link } from 'waku'
import { Description } from '../components/description.js'

export const HomePage = async () => {
  const data = await getData()

  return (
    <div>
      <Description />
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
