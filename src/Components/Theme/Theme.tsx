import "./Theme.css";

function Theme(props: any) {
    return (
        <div className="page-container">
            {props.children}
        </div>
    )
}

export default Theme;
