import './Reservation.css'

const Reservation = () => {

    return (
        <div className="content_wrap">
            <div className="reservation_doc">
                <div className="reservation_doc_header">
                    <div className="gender"></div>
                    <div className="age"></div>
                    <div className="date"></div>
                </div>
                <div className="reservation_doc_body">
                    <div className="category"></div>
                    <div className="symptom"></div>
                    <div className="expectation"></div>
                    <div className="conseling_history"></div>
                    <div className="conseling_content"></div>
                    <div className="growth_process"></div>
                    <div className="additional_content"></div>
                </div>
            </div>
        </div>
    )
}

export default Reservation