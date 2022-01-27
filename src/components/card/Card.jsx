import './Card.css'

function Card({ description, figure }) {
    return (
        <>
            <div className="card">
                <div className="desc">
                    {description}
                </div>
                <div className="fig">
                    {figure}
                </div>
            </div>
        </>
    )
}

export default Card
