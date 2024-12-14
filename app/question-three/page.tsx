import NavigationButtons from "../_components/NavigationButtons";
import HomeButton from '../_components/HomeButton';

export default function questionThree() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-center">
            <div className="flex flex-col gap-8 row-start-2 items-center">
                <h1>Question 3</h1>
                <p>Why have I been receiving ongoing unexpected usage invoices for the last 6 months? If overages don’t stop, I’ll move our services to the AWS platform.</p>
                <p>Hi Leonardo,</p>
                <p>Thanks for the email and your concerns. I know that maintaining a certain price point is important for your company. I did some research into the account and discovered [list out findings]. Based on this information, I have a few suggestions for things that can be done to maintain a steady price point, while also hopefully eliminating the monthly overages. I recommend [recommendations for customer to implement]. I would be happy to meet with you to go over these suggestions and how to implement them, and answer any questions that you may have. Here is my calendar link to book a time that is convenient for you.</p>
                <p>Looking forward to chatting soon.</p>
                <p>Brady</p>
                <p>Steps to triage issue:</p>
                <ul>
                    <li>Look at customer plan to determine structure, features, allowances, etc.</li>
                    <li>Examine overage invoices to understand charges</li>
                    <li>Examine plan analytics to understand overages</li>
                    <li>Identify recommended changes that customer can make to decrease and/or eliminate overage charges</li>
                </ul>
                <NavigationButtons />
                <HomeButton />
            </div>
        </div>
    )
}
