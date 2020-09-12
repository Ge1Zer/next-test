import Link from "next";

export default function User({user}){
    return(
        <>
            hello { user }
            <Link href={'/'} as={'/'}><a>Home</a></Link>

        </>
    )
}
