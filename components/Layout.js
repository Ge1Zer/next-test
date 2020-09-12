import Link from "next/link";

export default function Layout({children}){
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    return(
        <>
            <div>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/about'}><a>About</a></Link>
                <Link href={'/users/[id]'} as={`/users/${getRandomInt(5)}`}><a>User</a></Link>
            </div>
            <>
                {children}
            </>
        </>
    )
}
