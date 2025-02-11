
export default function Random(){
    const random = Math.floor((Math.random()*6)+1);
    return <>
    <h1> This is a random number; {random}</h1>
    </>
}