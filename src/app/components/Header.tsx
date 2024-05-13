import Link from "next/link";

export default function Header() {
    return (
        <header className="self-center">
            <nav>
                <Link href={"/"}>Home</Link>
            </nav>
        </header>
    );
}