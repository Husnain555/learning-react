export function Card11(props) {
    return (
        <div>
            <img className='w-[300px] h-[300px]' src={props.image} alt={'fake API'} />
            <h1>{props.title}</h1>
            <h2>{props.price}</h2>
            <h3>{props.id}</h3>

        </div>
    )
}