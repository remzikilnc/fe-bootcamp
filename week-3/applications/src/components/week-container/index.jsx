export function WeekContainer({ weekNumber, children }) {
    return (
        <div className="justify-center flex items-center flex-col max-w-7xl w-full">
            <div className="w-full p-8 flex justify-center items-center flex-col rounded-md bg-black/10">
                <h2 className="font-semibold text-xl my-2">Week - {weekNumber}</h2>
                {children}
            </div>
        </div>
    );
}
