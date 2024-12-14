import NavigationButtons from "../_components/NavigationButtons";
import HomeButton from '../_components/HomeButton';

export default function questionOne() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-center">
            <div className="flex flex-col gap-8 row-start-2 items-center">
                <h1>Question 1</h1>
                <p>What is the difference between React and Next.js and what are the benefits of using Next.js?</p>
                <p>Hi Christy,</p>
                <p>These are great questions. React is a JavaScript library that is used in building user interfaces. It allows for the creation of UI components and offers flexibility in the structuring of web applications. It is limited, though, in that it often requires third-party tools to make a complete React application. That’s where Next.js comes in. Next.js is a JavaScript framework built on top of React. It is a more comprehensive and complete tool for building web applications and includes built-in features like routing, data fetching, and caching, which contribute to faster performing applications. It even offers what is called server-side rendering that helps achieve better SEO and initial page loading times.</p>
                <p>For more information about the differences between React and Next.js and the benefits of using Next.js, please see the <a href='https://nextjs.org/learn/react-foundations/what-is-react-and-nextjs' className="text-blue-500 underline">About React and Next.js</a> article in our learning center.</p>
                <p>Brady</p>
                <NavigationButtons />
                <HomeButton />
            </div>
        </div>
    )
}
