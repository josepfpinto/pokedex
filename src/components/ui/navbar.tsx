import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    const inHomepage = router.pathname === "/";
    let button_search

    if (inHomepage) {
        button_search = <p className=" mx-auto px-6 py-1 font-bold text-lg text-gray-50">
            Search bar
        </p>;
    } else {
        button_search = <Link href="/">
            <button type="button" className="rounded-full font-light mx-auto px-6 py-1 text-gray-50 bg-slate-700">
                Return
            </button>
        </Link>;
    }

    return (
        <nav className="flex px-16 py-8">
            <h1 className="flex-1 font-bold text-3xl text-gray-50">
                Pokedex
            </h1>
            {button_search}
        </nav>
    );
};

export default Navbar;