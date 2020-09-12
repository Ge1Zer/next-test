import Layout from "../../components/Layout";

export default function User({user}){
    return(
        <Layout>
            user{user}

        </Layout>
    )
}
User.getInitialProps = async ({query}) =>{
    return{
        user:query.id
    }
}

