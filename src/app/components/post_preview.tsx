import { ClockIcon } from '@heroicons/react/24/outline'

export default function PostPreview({ href, date, title }: { href: string, date: string, title: string }) {
    return (
        <>
            <div className="mt-5 mb-5">
                <h1 className="text-2xl font-bold mb-3">{title}</h1>
                <h1 className="text-sm font-light mb-5"><ClockIcon className="h-4 w-4 inline"></ClockIcon> {date}</h1>
                <a className="text-blue-500 underline" href={href}>Читать</a>
            </div>
        </>
    )
}