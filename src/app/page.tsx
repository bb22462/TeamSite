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
          <img src="logo.png" alt="" style={{ height: "15rem", width: "15rem" }} />
        </div>
        <div id="text" className='p-5 bg-white rounded-md'>
          <h1 className='font-bold text-3xl'>Bad Bats 22462</h1>
          <h1>FTC Команда Лицея N126. г. Санкт Петербург</h1>
        </div>
      </div>
      <div className='p-5 flex flex-col justify-center items-center'>
        <div className='p-5 flex flex-col lg:flex-row justify-center items-center'>
        <div className='flex-none p-5'>
          <img className='lg:h-[412px] lg:w-[626px] sm:h-[206px] sm:w-[313px] rounded-md' src="members/team.jpg" alt="" style={{}} />
        </div>
        <div>
          <h1 className="text-3xl text-center mb-5">О Команде</h1>
          <h3 className=''>FTC команда под названием &quot;Bad Bats 22462&quot; появилась в 2022 году. Ей всего год, но достижения уже пополнилась участием в соревнованиях в Екатеринбурге. 
            Обучение проходит в центре цифрового образования &quot;Инфинити&quot; на базе лицея N°126. Также наша группа уже совершила достаточно хороший прогресс: создание функционального робота из обычной базы из балок (Не обошлось без партнёров, создавших прототип).
            На данный момент идёт разработка робота для нового сезона соревнований.</h3>
        </div>
        
      </div>
        
      </div>
    </main>
  )
}
