export default function PostPreview({ href, date, title }: { href: string, date: string, title: string }) {
    return (
        <>
            <div className="mt-5 mb-5">
                <h1 className="text-2xl font-bold mb-3">{title}</h1>
                <h1 className="text-sm font-light mb-5">{date}</h1>
                <a className="text-blue-500 underline" href={href}>Read</a>
            </div>
        </>
    )
}