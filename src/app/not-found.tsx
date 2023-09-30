import AnimatedButton from "./components/animated_button";

export default function NotFound() {
    return (<>
        <main>
            <div className='p-5 flex flex-col md:flex-row justify-center items-center'>
                <div id="logo" className='p-5'>
                    <img src="404.png" alt="" style={{ height: "15rem", width: "15rem" }} />
                </div>
                <div id="text" className='p-5 bg-white rounded-md'>
                    <h1 className='font-bold text-3xl'>Страница не найдена.</h1>
                    <h1>Данной страницы не существует. Возможно вы ошиблись в URL сайта.</h1>
                    <a className="text-blue-500 underline" href="/">Главная Страница</a>
                </div>
                
            </div>
        </main>
    </>)
}