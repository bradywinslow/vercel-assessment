import Link from "@/node_modules/next/link";

export default function HomeButton() {
    return (
        <div className="row-start-3 flex gap-10 flex-wrap items-center justify-center">
            <Link href='/'>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                    Home
                </button>
            </Link>
        </div>
    )
}
