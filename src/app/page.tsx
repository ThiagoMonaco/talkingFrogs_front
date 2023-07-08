import Link from 'next/link'
import { HomePage } from '@/pages/Home/HomePage'

export const metadata = {
    title: 'Talking Frogs'
}

export default async function Home() {
    return <HomePage />
}
