import Layout from "../../components/Layout";
import Link from "next/link";
import LMenu from "../../components/library/LibraryMenu";

export default function Page({page}){

    return(
        <Layout>
            <LMenu>
                page{page}
            </LMenu>
        </Layout>
    )
}
Page.getInitialProps = async ({query}) =>{
    return{
        page:query.id
    }
}

