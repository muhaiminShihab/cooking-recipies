import { Link } from "react-router-dom";

const Recipy = (props) => {
    const details = `/meal-details/${props.id}`;

    return (
        <div className="col-12 col-lg-4">
            <div className="card mb-3">
                <div className="card-body text-center">
                    <img src={props.thumb} alt="" className="img-fluid rounded" />
                    <h4>{props.name}</h4>
                    <div className="btn-group">
                        <a href={props.tutorial} className="btn btn-info btn-sm">Watch Recipy</a>
                        <Link to={details} className="btn btn-primary btn-sm">Recipy Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recipy;