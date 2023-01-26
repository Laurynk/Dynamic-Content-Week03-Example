export default function Card ({
    firstName="none",
    lastName="none",
    position="none",
    age="none",
    colourCard="none",
    colourInfo="none",
    font="0",
    fontColour="white",
    image="icon/personTwo.png"
}) {
    return (
        <div style={{
            backgroundColor: colourCard, 
            fontSize: font,
            color: fontColour,
            display: "flex",
            alignItems:"center",
            borderRadius: "10px",
            width: "600px",
            padding: "40px",
            margin: "40px",
            fontWeight: "700"
        }}>
            <div style={{
                marginRight: "40px",
                marginLeft: "10px"
            }}>
                {
                    firstName === "Mark" ? <img src={'icon/mark.jpeg'} width='100' />:
                    firstName === "Taeyong" ? <img src={'icon/kun.jpeg'} width='100' />:
                    firstName === "Kun" ? <img src={'icon/taeyong.jpeg'} width='100'/>:
                    <img src={image} width='100'/>
                }
            </div>
            <div style={{
                backgroundColor: colourInfo,
                borderRadius: "10px",
                padding: "20px",
                display: "flex",
                flexDirection:"column",
                alignItems: "center",
                justifyContent: "center",
                width: "180px"
            }}>
                <div style={{
                    padding: "10px",
                    width: "100%",
                    backgroundColor: "#cced1d",
                    color: "#171717",
                    textAlign: "center",
                    borderRadius: "5px"
                }}>
                    {firstName}
                </div>
                <div style={{
                    padding: "10px",
                    textAlign: "left",
                    width: "100%"
                }}>
                    {position}
                </div>
                <div style={{
                    padding: "10px",
                    textAlign: "left",
                    width: "100%"
                }}>
                    {lastName}
                </div>
                <div style={{
                    padding: "10px",
                    textAlign: "left",
                    width: "100%"
                }}>
                    {age}
                </div>
            </div>   
        </div>
    )
}
