'use client'

 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <html>
      <body>
      <main>
            <div className='p-5 flex flex-col md:flex-row justify-center items-center'>
                <div id="text" className='p-5 bg-white rounded-md'>
                    <h1 className='font-bold text-3xl'>Что-то сломалось.</h1>
                    <h1>Возможно вы нашли баг. Можете написать <a className="text-blue-500 underline" href="https://t.me/index_zero">разработчику сайта</a>: </h1>
                    <a className="text-blue-500 underline" onClick={() => reset()}>Попробовать еще раз</a>
                </div>
                
            </div>
        </main>
      </body>
    </html>
  )
}