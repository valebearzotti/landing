import { Nav } from "@/ui/nav"

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <div className="flex flex-col">
                <h1>Valentina Bearzotti</h1>
                <h2>Frontend Developer</h2>
            </div>
            <Nav />
            <div className="flex flex-col py-4 px-1 sm:py-6 sm:px-2">
                {children}
            </div>
        </main>
    )
}