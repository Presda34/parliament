import { H1, H2 } from '@/components/headings'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Home - Parliament Simulator',
  description: 'aims to give you the opportunity to simulate parliament votings for many parliaments throughout the world. You can play through different scenarios by choosing which parliamentary faction or group votes which way and therefore easily check if a certain legislature is likely to pass or not.',
}

export default function Home() {
  return (
    <div className='flex flex-col container mx-auto gap-4 py-16 px-6 md:px-16'>
      <H1>Parliament Simulator</H1>
      <H2>Welcome!</H2>
      <p>
        This little web app by <a className='text-blue-800 underline' href="https://github.com/firlus">Michael Firlus</a> aims to give you the opportunity to simulate parliament votings for many parliaments throughout the world. You can play through different scenarios by choosing which parliamentary faction or group votes which way and therefore easily check if a certain legislature is likely to pass or not.
      </p>
      <H2>
        Usage
      </H2>
      <p>Choose a country from the navigation on the left. You will be lead to this country&apos;s parliament&apos;s page and see a list of all parliamentary factions or group. Set their voting behaviour and watch the majority ratios change. </p>
      <Image src="/tutorial.png" alt="" />
      <H2>
        Roadmap
      </H2>
      <p>
        The app will be updated regularely to include more countries and functionalities. Stay tuned for more.
      </p>
      <H2>
        Contribute
      </H2>
      <p>
        Visit this project on <a href="https://github.com/firlus/parliament-simulator" className='text-blue-800 underline'>GitHub</a> and feel free to create issues and pull requests. I would be especially happy if someone feels like adding data for more countries and parliaments.
      </p>
    </div>

  )
}
