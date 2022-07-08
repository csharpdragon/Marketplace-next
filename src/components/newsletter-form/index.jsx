import PropTypes from "prop-types";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import ErrorText from "@ui/error-text";

const NewsletterForm = ({ className }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        // eslint-disable-next-line no-console
        console.log(data);
    };
    return (
        <form
            className={clsx("subscribe-input-wrapper", className)}
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="input-group">
                <input
                    type="email"
                    id="subscribeEmail"
                    className="form-control bg-color--2"
                    placeholder="Your email"
                    aria-label="Recipient's email"
                    {...register("subscribeEmail", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "invalid email address",
                        },
                    })}
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-primary-alta btn-outline-secondary"
                        type="submit"
                    >
                        Subscribe
                    </button>
                </div>
            </div>
            {errors.subscribeEmail && (
                <ErrorText>{errors.subscribeEmail?.message}</ErrorText>
            )}
        </form>
    );
};

NewsletterForm.propTypes = {
    className: PropTypes.string,
};

export default NewsletterForm;
