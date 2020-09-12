import Link from "next/link";
import Layout from "../Layout";

export default function LMenu({children}){
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    return(
        <>
            <div>
                <Link href={'/page/[id]'} as={`/page/${getRandomInt(5)}`}><a>Page</a></Link>
            </div>
            <>
                {children}
            </>
        </>
    )
}
