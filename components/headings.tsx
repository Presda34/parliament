import { Lato } from "next/font/google"

type Props = {
  children: React.ReactNode
}

const lato = Lato({ subsets: ['latin'], weight: '700' })

export function H1({ children }: Props) {
  return <h1 className={lato.className}>{children}</h1>
}

export function H2({ children }: Props) {
  return <h2 className={lato.className}>{children}</h2>
}