import { FaLocationArrow } from "react-icons/fa";
import SectionTitle from "../../../reuseableComponents/SectionTitle";
import { FaStar } from "react-icons/fa6";


const AddReview = () => {
    return (
        <div>
            <SectionTitle heading='give a review' subHeading='Sharing is Caring'></SectionTitle>

            <form className="sm:py-10 py-8 px-5 sm:px-14 mx-auto space-y-3 bg-slate-200 rounded">
                <h3 className="text-center text-2xl sm:text-3xl cinzel uppercase tracking-wider text-yellow-700 font-bold">Rate Us</h3>
                <p className="flex gap-3 items-center text-3xl justify-center text-gray-500 mb-10">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </p>
                <div>
                    <div className="label">
                        <span className="label-text text-lg">Which recipe would you liked most?</span>
                    </div>
                    <input type="text" placeholder="Recipe you liked most" className="input rounded w-full" />
                </div>
                <div>
                    <div className="label">
                        <span className="label-text text-lg">Do you have any suggestion for us?</span>
                    </div>
                    <input type="text" placeholder="Suggestion" className="input rounded w-full" />
                </div>
                <div>
                    <div className="label">
                        <span className="label-text text-lg">Kindly express your care in a short way.</span>
                    </div>
                    <textarea className="textarea rounded w-full" placeholder="Review in details....." rows={5}>
                    </textarea>
                </div>
                <button type="submit" className="flex gap-2 items-center text-white bg-yellow-700 rounded px-7 py-3 font-medium">Send Review<FaLocationArrow className="text-lg" /></button>
            </form>
        </div>
    )
}

export default AddReview;