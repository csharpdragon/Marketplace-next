import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import ProjectTable from "@components/project-table";
import Pagination from "@components/pagination-02";

const POSTS_PER_PAGE = 3;

const UpcomingProjectsArea = ({ space, className, data }) => {
    const [upcomingProjects, setUpcomingProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const numberOfPages = Math.ceil(
        data.upcomingProjects.length / POSTS_PER_PAGE
    );
    const paginationHandler = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const creatorHandler = useCallback(() => {
        const start = (currentPage - 1) * POSTS_PER_PAGE;
        setUpcomingProjects(
            data.upcomingProjects.slice(start, start + POSTS_PER_PAGE)
        );
    }, [currentPage, data.upcomingProjects]);

    useEffect(() => {
        creatorHandler();
    }, [currentPage, creatorHandler]);
    return (
        <div
            className={clsx(
                "rn-upcoming-area",
                space === 1 && "rn-section-gap",
                className
            )}
        >
            <div className="container">
                {upcomingProjects?.map((upcomingProject, i) => (
                    <ProjectTable
                        key={upcomingProject.date}
                        title={upcomingProject.date}
                        className={clsx(i !== 0 && "mt--80")}
                        projects={upcomingProject.projects}
                    />
                ))}
                <div className="row">
                    <div
                        className="col-lg-12"
                        data-sal="slide-up"
                        data-sal-delay="950"
                        data-sal-duration="800"
                    >
                        <Pagination
                            currentPage={currentPage}
                            numberOfPages={numberOfPages}
                            onClick={paginationHandler}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

UpcomingProjectsArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        upcomingProjects: PropTypes.arrayOf(
            PropTypes.shape({
                date: PropTypes.string,
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
            })
        ),
    }),
};

UpcomingProjectsArea.defaultProps = {
    space: 1,
};
export default UpcomingProjectsArea;
