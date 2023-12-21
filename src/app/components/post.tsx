import Markdown from 'react-markdown'

export default function Post({title, date, article}: {title: string, date: string, article: string}) {
    return(
        <>
            <div className="flex min-h-screen flex-col p-8 content-center text-center">
                <h1 className="text-2xl font-bold mb-3">{title}</h1>
                <h3 className="text-sm font-light mb-5">{date}</h3>
                <div>
                    <article className='prose prose-md'><Markdown>{article}</Markdown></article>
                </div>
            </div>
        </>
    )
}