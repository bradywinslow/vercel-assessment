import NavigationButtons from "../_components/NavigationButtons";
import HomeButton from '../_components/HomeButton';

export default function questionSix() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-center">
            <div className="flex flex-col gap-8 row-start-2 items-center">
                <h1>Question 6</h1>
                <p>Why didn’t my MIUs cover a high usage bill? I didn’t use all my MIUs last month so why didn’t those roll over?</p>
                <p>Hi,</p>
                <p>Thanks for your questions. I know it can be frustrating to get an unexpected overage bill. I’m happy to help answer your questions and work with you on a plan to hopefully prevent this from happening again in the future. MIUs typically cover the usage of serverless functions, static assets, and hosted edge functions. Fast origin transfer and fast data transfer is not always covered by MIUs, especially when it involves high performance routing or delivery of assets not hosted on Vercel. That is why the MIUs didn’t cover the fast origin transfer and fast data transfer usage. Also, MIUs are provided on a monthly basis and don’t roll over to the next month.</p>
                <p>There are various strategies that you can employ to mitigate future overage bills, like optimizing asset delivery, reducing data transfer costs, monitoring external API usage, and enabling analytics and alerts. Please see this article about <a href='https://vercel.com/docs/pricing/manage-and-optimize-usage' className="text-blue-500 underline">managing and optimizing usage</a> for strategies on how to optimize your usage of Vercel to save costs. We can also meet if you’d like to discuss these strategies and get them in place.</p>
                <p>Brady</p>
                <NavigationButtons />
                <HomeButton />
            </div>
        </div>
    )
}
