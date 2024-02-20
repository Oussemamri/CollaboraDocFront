
function Tablist(props) {
    return (
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="application-tab" data-bs-toggle="tab" data-bs-target="#application-tab-pane" type="button" role="tab" aria-controls="application-tab-pane" aria-selected="true">{props.tabs.tab1}</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="personal-tab" data-bs-toggle="tab" data-bs-target="#personal-tab-pane" type="button" role="tab" aria-controls="personal-tab-pane" aria-selected="false">{props.tabs.tab2}</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="supplementary-tab" data-bs-toggle="tab" data-bs-target="#supplementary-tab-pane" type="button" role="tab" aria-controls="supplementary-tab-pane" aria-selected="false">{props.tabs.tab3}</button>
            </li>
        </ul>
    )
}

export default Tablist