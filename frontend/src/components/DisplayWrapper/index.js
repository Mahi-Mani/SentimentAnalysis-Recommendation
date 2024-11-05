import {React} from "react";

function DisplayWrapper({children}) {
    return (
        <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12">
            {children}
        </div>
    )
}

export default DisplayWrapper;