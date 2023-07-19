import { H1 } from "@/components/headings";
import "./404.css";

export default function NotFoundPage() {
  return <div className='flex flex-col container mx-auto gap-4 p-16'>
    <H1>Page not found</H1>
    <p>
      The page that you tried to access does not exist.
    </p>
  </div>
}