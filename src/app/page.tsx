import Link from 'next/link'

export default async function Home() {
  return (
      <div>
        <p>Home</p>
        <Link href={'/register'}> Cadastro</Link>
      </div>
  )
}
