import type { ReactNode } from "react"
import Header from "./Header"

type PageLayoutProps = {
    children: ReactNode
}

function PageLayout({ children }: PageLayoutProps) {
    return (
        <>
            <Header />
            <main className="bg-blue-300 min-h-lvh flex flex-col items-center justify-center gap-4">
                {children}
            </main>
        </>
    )
}
export default PageLayout