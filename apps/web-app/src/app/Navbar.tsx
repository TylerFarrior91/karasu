import Link from "next/link";

const links = {
    
}
export default function Navbar() {
    return (
        <header className="mb-8 border-b">
            <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
                <link href="/">
                    <h1 className="text-5xl font-bold">
                        Next<span className="text-primary">Katasu</span>
                    </h1>

                </link>
            </div>

        </header>
    );
}