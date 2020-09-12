import Layout from "../../components/Layout";
import Link from "next/link";
import LMenu from "../../components/library/LibraryMenu";

export default function Library(){

    return(
        <Layout>
            <LMenu>
                Library
            </LMenu>
        </Layout>
    )
}
// Page.getInitialProps = async ({query}) =>{
//     return{
//         page:query.id
//     }
// }

