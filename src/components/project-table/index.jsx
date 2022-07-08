import PropTypes from "prop-types";
import clsx from "clsx";

const ProjectTable = ({ className, title, projects }) => (
    <div className={clsx("row", className)}>
        <div className="col-12">
            <div className="table-title-area d-flex">
                <i className="feather-calendar" />
                <h3>{title}</h3>
            </div>

            <div className="box-table table-responsive">
                <table className="table upcoming-projects">
                    <thead>
                        <tr>
                            <th>
                                <span>Project</span>
                            </th>
                            <th>
                                <span>Time</span>
                            </th>
                            <th>
                                <span>Count</span>
                            </th>
                            <th>
                                <span>Price</span>
                            </th>
                            <th>
                                <span>Extras</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects?.map((item, i) => (
                            <tr
                                key={item.id}
                                className={i % 2 === 0 ? "color-light" : ""}
                            >
                                <td>
                                    <span>{item.project}</span>
                                </td>
                                <td>
                                    <span className="color-green">
                                        {item.time}
                                    </span>
                                </td>
                                <td>
                                    <span className="color-danger">
                                        {item.count}
                                    </span>
                                </td>
                                <td>
                                    <span className="color-info">
                                        {item.price}
                                    </span>
                                </td>
                                <td>
                                    <span>{item.extras}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

ProjectTable.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            project: PropTypes.string,
            time: PropTypes.string,
            count: PropTypes.string,
            price: PropTypes.string,
            extras: PropTypes.string,
        })
    ),
};
export default ProjectTable;
