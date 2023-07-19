import { H1 } from "@/components/headings";
import { Metadata } from "next";
import "./404.css";

export const metadata: Metadata = {
  title: 'Not found :( - Parliament Simulator',
  description: 'aims to give you the opportunity to simulate parliament votings for many parliaments throughout the world. You can play through different scenarios by choosing which parliamentary faction or group votes which way and therefore easily check if a certain legislature is likely to pass or not.',
}

export default function NotFoundPage() {
  return <div className='flex flex-col container mx-auto gap-4 p-16'>
    <H1>Page not found</H1>
    <p>
      The page that you tried to access does not exist.
    </p>
  </div>
}