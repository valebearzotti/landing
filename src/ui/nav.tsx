import { useRouter } from "next/router"

export const Nav = () => {
    const router = useRouter()

    const isActive = (route: string) => {
        return route === router.pathname ? 'text-[#333333]' : 'text-[#9C9C9C] hover:text-[#333333] transition-colors'
    }

    const routes = [
        { name: 'About', path: '/' },
        { name: 'Experience', path: '/experience' },
        { name: 'Education', path: '/education' },
        { name: 'Projects', path: '/projects' },
        { name: 'Blog', path: '/blog' },
    ]

    return (
        <nav className="flex flex-row w-full justify-between text-xl border-b-2 px-4 mt-4">
            {routes.map((route, index) => (
                <a
                    key={index}
                    className={`py-4 ${isActive(route.path)}`}
                    href={route.path}
                >
                    {route.name}
                </a>
            ))}
        </nav>
    )
}