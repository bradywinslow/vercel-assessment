import NavigationButtons from "../_components/NavigationButtons";
import HomeButton from '../_components/HomeButton';

export default function questionFour() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-center">
            <div className="flex flex-col gap-8 row-start-2 items-center">
                <h1>Question 4</h1>
                <p>What is Vercel and what does it do (2-5 sentence introduction)?</p>
                <p>Hi Clara,</p>
                <p>I’m excited that Acme University has purchased Vercel and that we will get to work together to implement it for the marketing department. Vercel is a platform for web developers that helps them build, deploy, and scale web applications. It is a fast and reliable tool for getting websites up and running and available for the public to view on the internet. It also has built-in features like analytics to help you better understand the performance of your website.</p>
                <p>Please see the following resources to better understand what Vercel is and what it can do:</p>
                <ul>
                    <li><a href='https://vercel.com/blog/what-is-vercel' className="text-blue-500 underline">What does Vercel do?</a></li>
                    <li><a href='https://vercel.com/docs/getting-started-with-vercel' className="text-blue-500 underline">Get started with Vercel</a></li>
                </ul>
                <p>Brady</p>
                <NavigationButtons />
                <HomeButton />
            </div>
        </div>
    )
}
