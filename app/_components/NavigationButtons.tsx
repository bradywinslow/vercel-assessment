import Link from "@/node_modules/next/link";

export default function NavigationButtons() {
    return (
        <div className="row-start-3 flex gap-10 flex-wrap items-center justify-center">
            <Link href='/question-one'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                    1
                </button>
            </Link>
            <Link href='/question-two'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                    2
                </button>
            </Link>
            <Link href='/question-three'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                    3
                </button>
            </Link>
            <Link href='/question-four'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                    4
                </button>
            </Link>
            <Link href='/question-five'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                    5
                </button>
            </Link>
            <Link href='/question-six'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                    6
                </button>
            </Link>
            <Link href='/question-seven'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                    7
                </button>
            </Link>
            <Link href='/question-eight'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                    8
                </button>
            </Link>
        </div>
    )
}
