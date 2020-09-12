import Link from "next";

export default function Home(){
    return(
        <>
            <Link href={'/users/[id]'} as={'/users/marko'}><a>user Marko</a></Link>
        </>
    )
}
