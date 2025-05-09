import WorkStep from "./Shared/WorkStep";

const WorkSteps = () => {
    const step1 = 'Submit Intake Form';
    const step2 = 'We do the search and curation for list of jobs';
    const step3 = 'You approve, we do the tedious part (applying)';
    const step4 = 'You get the interviews';

    return (
        <div className="px-4 md:px-10 py-18 w-full md:w-[1000px] mx-auto">
            <h1 className='text-lightblue text-3xl mb-20  md:text-left sm:text-center'>How we work?</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 sm:p-10 p-3">
                <WorkStep num={1} des={step1} />
                <WorkStep num={2} des={step2} />
                <WorkStep num={3} des={step3} />
                <WorkStep num={4} des={step4} />
            </div>
        </div>
    );
};

export default WorkSteps;
