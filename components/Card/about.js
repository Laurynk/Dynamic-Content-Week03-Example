export default function Card ({
    name="none",
    positon="none",
    font="0",
    fontColour="white"
}) {
    return (
        <div style={{
            fontSize: font,
            color: fontColour,
            border: "5px groove",
            display: "flex",
            alignItems: "center",
            margin: "30px"
        }}>
            <div style={{
                marginRight: "50px",
                marginLeft: "20px"
            }}>
                {
                    name === "Mark Lee" ? <img src={"icon/person.png"} />:
                    name === "Walter White" ? <img src={"icon/person.png"} />:
                    name === "Elon Musk" ? <img src={"icon/person/png"} />:
                    <img src={image}/>
                }
            </div>
        </div>
    )
}