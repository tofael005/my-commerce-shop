

const SingleMens = ({singleMens}) => {
    const {title, image, price} = singleMens;
    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default SingleMens;