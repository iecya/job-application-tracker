function StatCard({statName, statValue}: {statName: string, statValue: number}) {
    return(
        <>
            <div className="shadow-sm shadow-teal-600/50 rounded-xl p-4 text-center w-4/9 md:w-3/10 xl:w-1/7">
                <p className="text-4xl font-bold">{statValue}</p>
                <h3 className="font-medium text-md italic text-teal-600 xl:text-sm">{statName}</h3>
            </div>
        </>
    )
}

export default StatCard