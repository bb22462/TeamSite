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
                        <Member fileName="danya" name="Парамонов Даня" role="Конструктор" list={["Сборка робота", "Контроль за кабинетом", "Систематизация"]}></Member>
                        <Member fileName="matvey" name="Калякин Матвей" role="3D-Моделист" list={["Сборка робота", "Моделирование подъемника", "Создание стратегии"]}></Member>
                        <Member fileName="misha" name="Юхимчук Миша" role="Конструктор" list={["Создание стратегии", "Управление роботом", "Работа над роботом"]}></Member>
                        <Member fileName="oleg" name="Калугин Олег" role="Программист" list={["Написание кода", "Работа с соцсетями", "Компьютерный мастер"]}></Member>
                        <Member fileName="nastya" name="Муромцева Настя" role="Коммуникация" list={["Взаимодействие с командами", "Работа над портфолио", "Ведение соцсетей"]}></Member>
                        <Member fileName="varya" name="Захарова Варя" role="Дизайнер" list={["Разработка логотипа", "Дизайн стикер-пака", "Создание флага"]}></Member>
                    </div>
                </div>
            </div>
        </main>
    )
}
