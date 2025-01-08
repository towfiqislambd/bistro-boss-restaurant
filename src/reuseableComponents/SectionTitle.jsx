const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center mx-auto sm:w-5/12 lg:w-4/12 mb-10">
            <p className="text-lg text-yellow-600 font-medium">---- {subHeading} ----</p>
            <div className="divider m-0 my-2"></div>
            <h3 className="font-semibold uppercase text-2xl text-gray-700">{heading}</h3>
            <div className="divider m-0 my-2"></div>
        </div>
    )
}

export default SectionTitle;