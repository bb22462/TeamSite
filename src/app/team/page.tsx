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
                    <div className='text-center'>
                        <Member fileName="elina" name="Элина Александровна" role="Руководитель" list={[]}></Member>
                        <a className="text-blue-500" href="https://t.me/dy4enkolina"><FontAwesomeIcon height={20} icon={faTelegram} size="2xs" className='inline ml-1' /> Telegram</a>
                        
                    </div>
                </div>
            </div>
        </main>
    )
}
