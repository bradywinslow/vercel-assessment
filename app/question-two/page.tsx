import NavigationButtons from "../_components/NavigationButtons";
import HomeButton from '../_components/HomeButton';

export default function questionTwo() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-center">
            <div className="flex flex-col gap-8 row-start-2 items-center">
                <h1>Question 2</h1>
                <p>When should I choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?</p>
                <p>Hi Trevor,</p>
                <p>Knowing that your goal is being able to personalize what is offered on your online shop based on geolocation, here are some suggestions for when to use Edge Functions, Serverless Functions, and Edge Middleware with Vercel:</p>
                <ul>
                    <li>Edge functions: Because they run closer to the user and provide for minimal delay, edge functions are ideal for fast personalization and can be used to show local wine recommendations and shipping options based on location.</li>
                    <li>Serverless Functions: These are best used for completing backend tasks that don’t require immediate results, like calculating shipping costs, or fetching API data.</li>
                    <li>Edge Middleware: These can help with redirects based on location or enforcing location-based restrictions before a page loads.</li>
                </ul>
                <p>Using a combination of Edge Functions, Serverless Functions, and Edge Middleware, you will be able to develop a tailored, location-based experience for your users.</p>
                <p>Brady</p>
                <NavigationButtons />
                <HomeButton />
            </div>
        </div>
    )
}
