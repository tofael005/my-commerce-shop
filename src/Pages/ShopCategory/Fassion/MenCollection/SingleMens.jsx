

const SingleMens = ({singleMens}) => {
    const {title, image, price} = singleMens;
    return (
        <div>
            <div>
                <img className="w-[350px] h-[280px] p-2" src={image} alt="" />
                <div>
                    <h1>{title}</h1>
                    <p>{price}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleMens;