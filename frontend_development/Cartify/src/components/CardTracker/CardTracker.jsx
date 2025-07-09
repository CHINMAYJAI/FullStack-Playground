const CardTracker = ({ rejectedCardsLength, removedCardIds, acceptedCardsLength, acceptedCardIds }) => {
    return (
        <div style={{ position: 'fixed', top: '50%', right: '20px', transform: 'translateY(-50%)', padding: '16px', border: '2px solid #ccc', borderRadius: '10px', backgroundColor: '#f9f9f9', fontFamily: 'Arial, sans-serif', zIndex: 9999, boxShadow: '0 4px 12px rgba(0,0,0,0.15)', width: '250px', color: 'black'}}>

            <h2 style={{ textAlign: 'center', marginBottom: '12px' }}>Card Tracker</h2>

            <div style={{ marginBottom: '16px' }}>
                <h3 style={{ color: 'green' }}>Accepted Cards: {acceptedCardsLength}</h3>
                {/* list all the accepted cards */}
                <ul>
                    {acceptedCardIds.map((id)=>
                        <li key={id}>Accepted Card Id: {id}</li>
                    )}
                </ul>

            </div>

            <div>
                <h3 style={{ color: 'red' }}>Rejected Cards: {rejectedCardsLength}</h3>
                {/* list all the rejected cards */}
                <ul>
                    {removedCardIds.map((id)=>
                        <li key={id}>Removed Card Id: {id}</li>
                    )}
                </ul>
                
            </div>
        </div>
    );
};

export default CardTracker;