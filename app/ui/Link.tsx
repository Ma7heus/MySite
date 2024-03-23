import Link from 'next/link'

export default function NavLink({ name, href }){
    return (
    <Link 
        className="rounded-md p-2 hover:bg-gray-600 hover:text-white focus:outline-none  space-x-6" 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        >{name}
    </Link>
    )
}