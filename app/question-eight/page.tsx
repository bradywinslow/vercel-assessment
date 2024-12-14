import NavigationButtons from '../_components/NavigationButtons';
import HomeButton from '../_components/HomeButton';

export default function questionEight() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-center">
            <div className="flex flex-col gap-8 row-start-2 items-center">
                <h1>Question 8</h1>
                <p>How could we improve or alter this familiarization exercise?</p>
                <p>Some of the questions in the exercise involved quite a bit of research to understand and then answer. I suggest consolidating the questions into a list of 4-5 questions.</p>
                <NavigationButtons />
                <HomeButton />
            </div>
        </div>
    )
}
