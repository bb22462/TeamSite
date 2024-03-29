import Image from 'next/image'
import { Metadata } from 'next'
import Member from './components/member'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'

export const metadata: Metadata = {
    title: 'Bad Bats: Команда',
    description: 'Сайт команды Bad Bats',
}


export default function Team() {
    return (
        <main className='main-about'>
            <div className='p-5 flex flex-col md:flex-row justify-center items-center'>
                <div className="team-members">
                    <h1 className='font-bold text-3xl text-center'>Состав Команды</h1>
                    <div className='text-center mb-10'>
                        <Member fileName="elina" name="Элина Александровна" role="Руководитель" list={[]}></Member>
                        <a className="transition text-blue-500 bg-gray-950 hover:bg-gray-800 p-3 rounded-md " href="https://t.me/dy4enkolina">Telegram</a>                
                    </div>
                    <div className='grid lg:grid-cols-3 lg:grid-rows-2 grid-cols-1 grid-rows-6'>
                        <Member fileName="danya" name="Парамонов Даня" role="Конструктор" list={[]}></Member>
                        <Member fileName="matvey" name="Калякин Матвей" role="Конструктор" list={[]}></Member>
                        <Member fileName="misha" name="Юхимчук Миша" role="Драйвер" list={[]}></Member>
                        <Member fileName="oleg" name="Калугин Олег" role="Программист" list={[]}></Member>
                        <Member fileName="varya" name="Захарова Варя" role="Дизайнер" list={[]}></Member>
                        <Member fileName="nastya" name="Бараш Настя" role="3D-Моделист" list={[]}></Member>
                        <Member fileName="maxim" name="Кянксеп Максим" role="Дизайнер" list={[]}></Member>
                    </div>
                </div>
            </div>
        </main>
    )
}
