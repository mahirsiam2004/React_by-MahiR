const ReactMap=()=>{
    const numbers=[1,2,3,4,5]
return <main>
{
    numbers.map(number=>(
        <ul key={number}>
            <li>
                {number}
            </li>
        </ul>
    )
    )
}
</main>
};
export default ReactMap