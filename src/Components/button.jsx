// function Button() {
//     return (
//         <>
//             <button className="bg-violet-600 px-5 py-2 text-white">Inicio</button>
//         </>
//     )
// }

const Button = (props) => {
    const { name } = props;
    return (
        <>
            <button className="bg-violet-600 px-5 py-2 text-white">{name}</button>
        </>
    )
}
export default Button;