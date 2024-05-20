import {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Bad Bats: Главная',
    description: 'Сайт команды Bad Bats',
}


export default function Home() {
    return (
        <main className='main-about sm:h-screen bg-white h-full'>

            <div className='p-5 flex flex-col md:flex-row justify-center items-center'>
                <div id="logo" className='p-5'>
                    <img src="logo.png" alt="" style={{height: "15rem", width: "15rem"}}/>
                </div>
                <div id="text" className='p-5 bg-white rounded-md'>
                    <h1 className='font-bold text-3xl'>Bad Bats 22462</h1>
                    <h1>FTC Команда Лицея N126. г. Санкт Петербург</h1>
                </div>
            </div>
          <div className='p-5 flex flex-col justify-center items-center bg-white'>
            <div className='p-5 flex flex-col lg:flex-row justify-center items-center'>
              <div className='flex-none p-5'>
                <img className='lg:h-[412px] lg:w-[626px] sm:h-[206px] sm:w-[313px] rounded-md'
                     src="members/team.jpg" alt="" style={{}}/>
              </div>
              <div className="m-5">
                <h1 className="text-3xl text-center mb-5">О Команде</h1>
                <h3 className=''>
                  &quot;Bad Bats 22462&quot; - Команда Лиги Инженеров из Санкт-Петербурга, созданная в 2022
                  году. Школьники Центра Цифрового Образования Infinity на базе лицея N°126
                  изучают инженерно-технические направления робототехники. Команда принимает участие в
                  товарищеских и официальных соревнованиях FTC.
                  Название команды &quot;Bad Bats&quot; можно перевести, как &quot;Плохие летучие
                  мыши&quot; или &quot;Плохие биты&quot;, потому что слово &quot;Bat&quot; имеет несколько
                  значений. Мы решили объединить эти два слова и получили &quot;Плохие летучие мыши с
                  битами&quot;. Это стало началом создания нашей команды. Так у нас появился логотип - летучая
                  мышь с битой за крылом, а вокруг него наш номер 22462 и название &quot;Bad Bats&quot;.
                </h3>
              </div>
            </div>
            <div className='p-5 flex flex-col lg:flex-row justify-center items-center'>
              <div className="m-5">
                <h1 className="text-3xl text-center mb-5">Награды</h1>
              </div>
            </div>
          </div>
        </main>
    )
}
