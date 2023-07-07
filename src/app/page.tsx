import Link from 'next/link'

export const metadata = {
    title: 'Talking Frogs'
}

export default async function Home() {
    return (
        <div>
            <Link href={'/auth/login'}>login</Link>
        </div>
    )
}
