

function Processdata() {
    return (
        <main id="main" className="main">

            <section className="section">
                <div className="row">
                    <div className="col-lg-12">

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Processing Applications</h5>

                                {/* <!-- Table with stripped rows --> */}
                                <table className="table datatable">
                                    <thead>
                                        <tr>
                                            <th scope="col">Application ID</th>
                                            <th scope="col">Customer Name</th>
                                            <th scope="col">Updated Date</th>
                                            <th scope="col">Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>APPLICATION-1</th>
                                            <td>Brandon Jacob</td>
                                            <td>2016-05-25</td>
                                            <td><button type="button" className="btn btn-primary">Details</button></td>
                                        </tr>
                                        <tr>
                                            <th>APPLICATION-2</th>
                                            <td>Bridie Kessler</td>
                                            <td>2014-12-05</td>
                                            <td><button type="button" className="btn btn-primary">Details</button></td>
                                        </tr>
                                        <tr>
                                            <th>APPLICATION-3</th>
                                            <td>Ashleigh Langosh</td>
                                            <td>2011-08-12</td>
                                            <td><button type="button" className="btn btn-primary">Details</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                                {/* <!-- End Table with stripped rows --> */}

                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    )
}

export default Processdata