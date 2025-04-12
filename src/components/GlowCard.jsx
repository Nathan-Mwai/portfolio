const GlowCard = ({card, children}) => {
    return (
        <div className={'card card-border timeline-card rounded-xl p-10'}>
            <div className={'glow'}/>
            <div>
                {Array.from({length: 5})}
            </div>
        </div>
    )
}
export default GlowCard
