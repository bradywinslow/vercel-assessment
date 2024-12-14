import NavigationButtons from "../_components/NavigationButtons";
import HomeButton from '../_components/HomeButton';

export default function questionSeven() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-center">
            <div className="flex flex-col gap-8 row-start-2 items-center">
                <h1>Question 7</h1>
                <p>What resources would you prepare and provide to a new Enterprise customer so they have everything they need to succeed as they migrate to the Enterprise version of the platform?</p>
                <p>Hi Ty,</p>
                <p>I’m excited to work with you and your team as you migrate to Vercel’s Enterprise platform. I know you are interested in the security products that Vercel offers so I wanted to send along this article from our <a href='https://vercel.com/security' className="text-blue-500 underline">security center</a>. Also, this article will provide more information about the <a href='https://vercel.com/docs/accounts/plans/enterprise' className="text-blue-500 underline">Vercel Enterprise Plan</a> and the features that it includes. Please review these articles and then let me know which offerings you would like more information about. In terms of our roadmap, are there particular features that you are interested in talking about? Having a better understanding of the features that you are interested in will help me in sharing relevant parts of the roadmap.</p>
                <p>Brady</p>
                <NavigationButtons />
                <HomeButton />
            </div>
        </div>
    )
}
