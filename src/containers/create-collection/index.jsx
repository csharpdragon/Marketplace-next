import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ImageUpload from "@ui/image-upload";
import NiceSelect from "@ui/nice-select";
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import { isEmpty } from "@utils/methods";

const CreateCollectionArea = () => {
    const [category, setCategory] = useState("");
    const [hasCatError, setHasCatError] = useState(false);

    const categoryHandler = (item) => {
        setCategory(item.value);
    };
    const notify = () => toast("Your collection has submitted");

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        getValues,
        watch,
    } = useForm({
        mode: "onChange",
    });

    watch(["logoImg", "featImg", "bannerImg"]);

    const onSubmit = (data) => {
        setHasCatError(!category);
        notify();
        reset();
        // eslint-disable-next-line no-console
        console.log(data);
    };

    return (
        <div className="creat-collection-area pt--80">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h2 className="title">Create a Collection</h2>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="create-collection-form-wrapper"
                        >
                            <div className="collection-single-wized">
                                <h6 className="title required">Logo image</h6>
                                <span className="sub">
                                    This image will also be used for navigation.
                                    350 x 350 recommended.
                                </span>

                                <ImageUpload
                                    className="logo-image"
                                    id="logoImg"
                                    placeholder={{
                                        src: "/images/profile/profile-01.jpg",
                                    }}
                                    preview={getValues("logoImg")?.[0]}
                                    {...register("logoImg", {
                                        required: "Upload logo image",
                                    })}
                                />

                                {errors.logoImg && (
                                    <ErrorText>
                                        {errors.logoImg?.message}
                                    </ErrorText>
                                )}
                            </div>
                            <div className="collection-single-wized">
                                <h6 className="title">Featured image</h6>
                                <span className="sub">
                                    This image will be used for featuring your
                                    collection on the homepage, category pages,
                                    or other promotional areas of OpenSea. 600 x
                                    400 recommended.
                                </span>
                                <ImageUpload
                                    className="feature-image"
                                    id="featImg"
                                    placeholder={{
                                        src: "/images/portfolio/portfolio-12.jpg",
                                    }}
                                    preview={getValues("featImg")?.[0]}
                                    {...register("featImg", {
                                        required: "Upload feature image",
                                    })}
                                />
                                {errors.featImg && (
                                    <ErrorText>
                                        {errors.featImg?.message}
                                    </ErrorText>
                                )}
                            </div>
                            <div className="collection-single-wized">
                                <h6 className="title">Banner image</h6>
                                <span className="sub">
                                    This image will appear at the top of your
                                    collection page. Avoid including too much
                                    text in this banner image, as the dimensions
                                    change on different devices. 1400 x 400
                                    recommended.
                                </span>
                                <ImageUpload
                                    className="banner-image"
                                    id="bannerImg"
                                    placeholder={{
                                        src: "/images/profile/cover-01.jpg",
                                    }}
                                    preview={getValues("bannerImg")?.[0]}
                                    {...register("bannerImg", {
                                        required: "Upload banner image",
                                    })}
                                />
                                {errors.bannerImg && (
                                    <ErrorText>
                                        {errors.bannerImg?.message}
                                    </ErrorText>
                                )}
                            </div>
                            <div className="collection-single-wized">
                                <h6 className="title required">Name</h6>
                                <div className="create-collection-input">
                                    <input
                                        className="name"
                                        type="text"
                                        {...register("name", {
                                            required: "Name is required",
                                        })}
                                    />
                                    {errors.name && (
                                        <ErrorText>
                                            {errors.name?.message}
                                        </ErrorText>
                                    )}
                                </div>
                            </div>
                            <div className="collection-single-wized">
                                <h6 className="title">URL</h6>
                                <span className="sub">
                                    Customize your URL on Nuron. Must only
                                    contain lowercase letters,numbers, and
                                    hyphens.
                                </span>
                                <div className="create-collection-input">
                                    <input
                                        className="url"
                                        type="text"
                                        placeholder="URL"
                                        {...register("url", {
                                            required: "Url is required",
                                        })}
                                    />
                                    {errors.url && (
                                        <ErrorText>
                                            {errors.url?.message}
                                        </ErrorText>
                                    )}
                                </div>
                            </div>
                            <div className="collection-single-wized">
                                <h6 className="title">Description</h6>
                                <span className="sub">
                                    Markdown syntax is supported. 0 of 1000
                                    characters used.
                                </span>
                                <div className="create-collection-input">
                                    <textarea
                                        className="text-area"
                                        {...register("description", {
                                            required: "Description is required",
                                        })}
                                    />
                                    {errors.description && (
                                        <ErrorText>
                                            {errors.description?.message}
                                        </ErrorText>
                                    )}
                                </div>
                            </div>
                            <div className="collection-single-wized">
                                <h6 className="title">Category</h6>
                                <span className="sub">
                                    Adding a category will help make your item
                                    discoverable on Nuron.
                                </span>
                                <div className="create-collection-input">
                                    <NiceSelect
                                        name="category"
                                        placeholder="Add Category"
                                        options={[
                                            { value: "art", text: "Art" },
                                            { value: 2, text: "Collectibles" },
                                            { value: 3, text: "Music" },
                                            { value: 4, text: "Sports" },
                                        ]}
                                        onChange={categoryHandler}
                                    />
                                    {((!category && !isEmpty(errors)) ||
                                        hasCatError) && (
                                        <ErrorText>Select a category</ErrorText>
                                    )}
                                </div>
                            </div>
                            <Button type="submit" className="max-fit-content">
                                CREATE
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateCollectionArea;
