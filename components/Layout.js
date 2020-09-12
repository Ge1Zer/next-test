import Link from "next/link";

export default function Layout({children}){

    return(
        <>
            <div>
                <Link href={'/i'}><a>i </a></Link>
                <Link href={'/work'}><a>work </a></Link>
                <Link href={'/library'}><a>library </a></Link>
            </div>
            <>
                {children}
            </>
        </>
    )
}
