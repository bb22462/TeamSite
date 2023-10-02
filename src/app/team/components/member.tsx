export default function Member({fileName, name, role, list}: {fileName: any, name: any, role: any, list: Array<string>}) {
    let elements: any[] = [];
    for(let i = 0; i < list.length; i++) {
        elements.push(<li>{list[i]}</li>)
    }
    return (<>
        <div className='text-center flex flex-col items-center justify-center p-6'>
            <img className='rounded-full' src={`members/${fileName}.jpg`} alt="" style={{ height: '150px', width: '150px' }} />
            <h3 className='text-2xl mt-5'>{name}</h3>
            <h3 className='text-xl'>{role}</h3>
            <ul className='list-disc mt-5 text-left'>
                {elements}
            </ul>
        </div>
    </>)
}