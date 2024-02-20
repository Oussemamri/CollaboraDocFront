
function Tabcontent() {
    return (
        <div className="tab-content" id="myTabContent">
            {/* Tab-1 */}
            <div className="tab-pane fade show active" id="application-tab-pane" role="tabpanel" aria-labelledby="application-tab" tabIndex="0">
                <br />
                <section className="section">
                    <div className="row">
                        <div className="col-lg-6">

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title"></h5>

                                    {/* <!-- General Form Elements --> */}
                                    <form>
                                        <div className="row mb-3">
                                            <label htmlFor="inputText" className="col-sm-2 col-form-label">Name</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                                            <div className="col-sm-10">
                                                <input type="email" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                            <div className="col-sm-10">
                                                <input type="password" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputNumber" className="col-sm-2 col-form-label">Number</label>
                                            <div className="col-sm-10">
                                                <input type="number" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputNumber" className="col-sm-2 col-form-label">File Upload</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" type="file" id="formFile" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputDate" className="col-sm-2 col-form-label">Date</label>
                                            <div className="col-sm-10">
                                                <input type="date" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputTime" className="col-sm-2 col-form-label">Time</label>
                                            <div className="col-sm-10">
                                                <input type="time" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label htmlFor="inputColor" className="col-sm-2 col-form-label">Color Picker</label>
                                            <div className="col-sm-10">
                                                <input type="color" className="form-control form-control-color" id="exampleColorInput" value="#4154f1" title="Choose your color" />
                                            </div>
                                        </div>

                                        <fieldset className="row mb-3">
                                            <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                                            <div className="col-sm-10">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                                                    <label className="form-check-label" htmlFor="gridRadios1">
                                                        First radio
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                                    <label className="form-check-label" htmlFor="gridRadios2">
                                                        Second radio
                                                    </label>
                                                </div>
                                                <div className="form-check disabled">
                                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios" value="option" disabled />
                                                    <label className="form-check-label" htmlFor="gridRadios3">
                                                        Third disabled radio
                                                    </label>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <div className="row mb-3">
                                            <legend className="col-form-label col-sm-2 pt-0">Checkboxes</legend>
                                            <div className="col-sm-10">

                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                                    <label className="form-check-label" htmlFor="gridCheck1">
                                                        Example checkbox
                                                    </label>
                                                </div>

                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="gridCheck2" checked />
                                                    <label className="form-check-label" htmlFor="gridCheck2">
                                                        Example checkbox 2
                                                    </label>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label className="col-sm-2 col-form-label">Disabled</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" value="Read only / Disabled" disabled />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label className="col-sm-2 col-form-label">Select</label>
                                            <div className="col-sm-10">
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label className="col-sm-2 col-form-label">Multi Select</label>
                                            <div className="col-sm-10">
                                                <select className="form-select" multiple aria-label="multiple select example">
                                                    <option selected>Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label className="col-sm-2 col-form-label">Submit Button</label>
                                            <div className="col-sm-10">
                                                <button type="submit" className="btn btn-primary">Submit Form</button>
                                            </div>
                                        </div>

                                    </form>
                                    {/* <!-- End General Form Elements --> */}

                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title"></h5>

                                    {/* <!-- Advanced Form Elements --> */}
                                    <form>
                                        <div className="row mb-5">
                                            <label className="col-sm-2 col-form-label">Switches</label>
                                            <div className="col-sm-10">
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Checked switch checkbox input</label>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled />
                                                    <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" checked disabled />
                                                    <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mb-5">
                                            <label className="col-sm-2 col-form-label">Ranges</label>
                                            <div className="col-sm-10">
                                                <div>
                                                    <label htmlFor="customRange1" className="form-label">Example range</label>
                                                    <input type="range" className="form-range" id="customRange1" />
                                                </div>
                                                <div>
                                                    <label htmlFor="disabledRange" className="form-label">Disabled range</label>
                                                    <input type="range" className="form-range" id="disabledRange" disabled />
                                                </div>
                                                <div>
                                                    <label htmlFor="customRange2" className="form-label">Min and max with steps</label>
                                                    <input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange2" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label className="col-sm-2 col-form-label">Floating labels</label>
                                            <div className="col-sm-10">
                                                <div className="form-floating mb-3">
                                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                                    <label htmlFor="floatingInput">Email address</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                                    <label htmlFor="floatingPassword">Password</label>
                                                </div>

                                                <div className="form-floating mb-3">
                                                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                                        <option selected>Open this select menu</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                    <label htmlFor="floatingSelect">Works with selects</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mb-5">
                                            <label className="col-sm-2 col-form-label">Input groups</label>
                                            <div className="col-sm-10">
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="basic-addon1">@</span>
                                                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                                </div>

                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                    <span className="input-group-text" id="basic-addon2">@example.com</span>
                                                </div>

                                                <label htmlFor="basic-url" className="form-label">Your vanity URL</label>
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                                                    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                                                </div>

                                                <div className="input-group mb-3">
                                                    <span className="input-group-text">$</span>
                                                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                    <span className="input-group-text">.00</span>
                                                </div>

                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" />
                                                    <span className="input-group-text">@</span>
                                                    <input type="text" className="form-control" placeholder="Server" aria-label="Server" />
                                                </div>

                                                <div className="input-group">
                                                    <span className="input-group-text">With textarea</span>
                                                    <textarea className="form-control" aria-label="With textarea"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary">Submit</button>
                    <button type="button" className="btn btn-danger mx-2">Cancel</button>
                </section>
            </div>

            {/* Tab-2 */}
            <div className="tab-pane fade" id="personal-tab-pane" role="tabpanel" aria-labelledby="personal-tab" tabIndex="0">
                <div>
                    <br />
                    This is some placeholder content the tab associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
                </div>
            </div>

            {/* Tab-3 */}
            <div className="tab-pane fade" id="supplementary-tab-pane" role="tabpanel" aria-labelledby="supplementary-tab" tabIndex="0">
                <div>
                    <br />
                    <main id="main" className="main">
                        <div className="pagetitle">
                            <h1>Supplementary Application</h1>
                            <p>Supplementary Card Required</p>
                            <button type="button" className="btn btn-primary">Submit</button>
                            <button type="button" className="btn btn-danger mx-2">Cancel</button>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Tabcontent