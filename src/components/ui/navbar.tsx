import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { SearchBar } from "./searchBar";
import styles from "../../styles/pokemon.module.css";

export const Navbar = () => {
    const router: NextRouter = useRouter();
    const inHomepage: boolean = router.pathname === "/";
    let button_searchBar

    if (inHomepage) {
        button_searchBar = <SearchBar />;
    } else {
        button_searchBar = <Link href="/">
            <button type="button" className={`${styles.buttonNavbar}`}>
                Return
            </button>
        </Link>;
    }

    return (
        <nav className="flex px-16 py-8 gap-2">
            <h1 className="flex-1 font-bold text-3xl text-gray-50">
                Pokedex
            </h1>
            {button_searchBar}
        </nav>
    );
};
