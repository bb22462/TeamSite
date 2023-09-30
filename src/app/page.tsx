import Image from 'next/image'
import Navbar from './components/Navbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bad Bats: Главная',
  description: 'Сайт команды Bad Bats',
}


export default function Home() {
  return (
    <main className='main-about sm:h-screen h-full'>
    
      <div className='p-5 flex flex-col md:flex-row justify-center items-center'>
          <div id="logo" className='p-5'>
            <img src="logo.png" alt="" style={{height: "15rem", width: "15rem"}} />
          </div>
          <div id="text" className='p-5 bg-white rounded-md'>
            <h1 className='font-bold text-3xl'>Bad Bats 22462</h1>
            <h1>FTC Команда Лицея N126. г. Санкт Петербург</h1>
          </div>
      </div>
      <div className='p-5 flex flex-col justify-center items-center'>
          <h1 className="text-3xl mb-5">О Команде</h1>
          <h3 className='text-center'>Мы - FTC-команда Bad Bats. Наша команда была основана в 2022 году. В первом сезоне мы стали участниками национальных соревнований в Екатеринбурге. Мы обучаемся в центре цифрового образования &quot;Инфинити&quot; на базе Лицея N126.</h3>
      </div> 
    </main>
  )
}
