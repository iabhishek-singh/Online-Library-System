import { useRouteError ,Link} from "react-router-dom"
export function Error() {

    const err = useRouteError();
    // console.log(err);

    return (

        <>
            <h1 className="errorHading">Oops!! <br /></h1>
            <h3 className="errorHading">{err.data}</h3>
            <h3 className="errorHading">{err.status} {err.statusText}</h3>
        <br />
            <h1 className="text-2xl text-center text-blue-700 hover:underline"><Link to="/">Go to Home</Link></h1>
        </>
    );
}