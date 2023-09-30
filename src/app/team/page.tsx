import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Bad Bats: Команда',
    description: 'Сайт команды Bad Bats',
}


export default function Team() {
    return (
        <main className='main-about'>
            <div className='p-5 flex flex-col md:flex-row justify-center items-center'>
                <div className="team-members">
                    <h1 className='font-bold text-3xl'>Состав Команды</h1>
                </div>
            </div>
        </main>
    )
}
