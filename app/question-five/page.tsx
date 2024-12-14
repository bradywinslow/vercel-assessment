import NavigationButtons from '../_components/NavigationButtons';
import HomeButton from '../_components/HomeButton';

export default function questionFive() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-center">
            <div className="flex flex-col gap-8 row-start-2 items-center">
                <h1>Question Five</h1>
                <p>What are some recommended options for third-party integrations for monitoring or logging and best practices when it comes to observability?</p>
                <p>Hi Evelyn,</p>
                <p>There are a variety of third-party integrations that we recommend for monitoring and logging. For <a href='https://vercel.com/marketplace?category=logging' className="text-blue-500 underline">logging</a> we recommend services like Axiom, Baseline, Logalert, or Logflare. As for <a href='https://vercel.com/marketplace?category=monitoring' className="text-blue-500 underline">monitoring</a>, Checkly, DebugBear, and Zeitgeist are compatible services.</p>
                <p>In terms of observability best practices, we suggest taking a look at the “Using Observability” section of our <a href='https://vercel.com/docs/observability' className="text-blue-500 underline">Observability</a> documentation. It outlines a suggested method for effectively utilizing that tab.</p>
                <p>Brady</p>
                <NavigationButtons />
                <HomeButton />
            </div>
        </div>
    )
}
