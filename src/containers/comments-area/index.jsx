import Comment from "@components/comment";

const CommentsArea = () => (
    <div className="comments-wrapper pt--40">
        <div className="comments-area">
            <div className="trydo-blog-comment">
                <h5 className="comment-title mb--40">
                    9 replies on “Have You Heard? Agency Is Your Best Grow”
                </h5>
                <ul className="comment-list">
                    <li className="comment parent">
                        <Comment
                            image={{
                                src: "/images/blog/comment/comment-01.png",
                            }}
                            username="Parent"
                            time="August 20, 2021 at 8:44 pm"
                            text="A component that allows for easy creation of menu
                                                        items, quickly
                                                        creating paragraphs of “Lorem Ipsum” and
                                                        pictures with custom
                                                        sizes."
                        />
                        <ul className="children">
                            <li className="comment byuser ">
                                <Comment
                                    image={{
                                        src: "/images/blog/comment/comment-01.png",
                                    }}
                                    username="Parent"
                                    time="August 20, 2021 at 8:44 pm"
                                    text="A component that allows for easy creation of menu
                                                        items, quickly
                                                        creating paragraphs of “Lorem Ipsum” and
                                                        pictures with custom
                                                        sizes."
                                />
                            </li>
                        </ul>
                    </li>
                    <li className="comment">
                        <Comment
                            image={{
                                src: "/images/blog/comment/comment-01.png",
                            }}
                            username="Parent"
                            time="August 20, 2021 at 8:44 pm"
                            text="A component that allows for easy creation of menu
                                                        items, quickly
                                                        creating paragraphs of “Lorem Ipsum” and
                                                        pictures with custom
                                                        sizes."
                        />
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default CommentsArea;
