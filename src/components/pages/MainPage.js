export default function HomePage() {
    return (
        <div>
            <h2 className="h2tag">
                Welcome to our small shop
            </h2>

            <div className="container">

                <div className="card">
                    <h3>Login</h3>
                    <p>In the following component we are making post request to server, and once we get response status<b>(2...)</b>, state of loggedIn is being changed to <b>True</b> so that the path to "/products" is open</p>
                    <ul>Used features:
                        <li>- UseContext - to import global states</li>
                        <li>- UseState - to change the state of <i>LoggedIn</i></li>
                        <li>- Axios - to post the input values and set <i>LoggedIn</i>accordingly</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>Sign Up</h3>
                    <p>This component takes the values of input fields and sends post request. Server-side is creating new constant of our DB Schema and saving it (if <i>Express</i> validator allows).   Afterwards we're sending back status eigther <b>(2...)</b> or <span className="false">(4...)</span>. And in case of success we redirect our user to "/products" page whilst changing <i>LoggedIn</i> to <b>True</b></p>
                </div>

                <div className="card">
                    <h3>Products</h3>
                    <p></p>
                </div>

                <div className="card">
                <h3>Products</h3>
                    <p></p>
                </div>
            </div>


        </div>

    )
}