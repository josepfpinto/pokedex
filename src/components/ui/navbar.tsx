import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex px-16 py-8">
            <h1 className="flex-1 font-bold text-2xl">
                <Link href="/">
                    <a>Pokedex</a>
                </Link>
            </h1>
        </nav>
    );
};

export default Navbar;