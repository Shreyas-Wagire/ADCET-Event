import barLogo from "../assets/bar.png";
import { TAG_LINE } from "../constants";
import GetStartedButton from "./Button";

const DisplayLine = () => {
    const handleGetStarted = () => {
        const eventsSection = document.getElementById('events-section');
        if (eventsSection) {
            eventsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex items-center justify-center flex-col">
            <h1 className="my-3 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                Spark2K25 By ADCET
            </h1>

            <div className='flex flex-shrink-0 items-center justify-center'>
                <img className="mx-2 w-60 md:w-110 cursor-pointer" src={barLogo} alt="Bar Logo" />
            </div>
            <div className='flex flex-shrink-0 items-center justify-center'>
                <p className='my-2 max-w-xl py-6 text-center text-xl'>
                    {TAG_LINE}
                </p>
            </div>
            <GetStartedButton onClick={handleGetStarted}>
                EXPLORE EVENTS
            </GetStartedButton>
        </div>
    )
}

export default DisplayLine