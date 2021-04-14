import "../styles/Content.css";

export const Content = (props) => {
    return (
        <div className="description-card">
            <h2 className="description-card__header">
                {props.header}
            </h2>

            <div className="description-card__content">
                {props.children}
            </div>

            {
                props.footer !== undefined &&
                <div className="description-card__footer">
                    {props.footer}
                </div>
            }
        </div>
    )
}