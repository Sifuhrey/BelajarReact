import './App.css'

function Header() {
    const headerFontSize = "text-2xl"; // Tailwind CSS class for font size
    return (
    
        <header className="bg-blue-500 text-white p-4 flex items-center justify-between">
            <h1 className={headerFontSize}>This is Header Component</h1>
            <p className="text-sm">its located on the top of the page</p>
        </header>
        
    )
}

export default Header