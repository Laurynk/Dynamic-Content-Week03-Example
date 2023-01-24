export default function Card({
    degree="none",
    colour="purple",
    font="0",
    image="icon/personTwo.png"
}) {
    return(
        <div style={{backgroundColor: colour, fontSize:font}}>
            {
                colour=="#99C2A2" ? <img src={'icon/person.png'} width='50'/> :
                colour=="#99C2A2;" ? <img src={'icon/personThree.png'} width='50'/>:
                                 <img src={image} width='50'/>
            }
            {degree}
        </div>
    )
}