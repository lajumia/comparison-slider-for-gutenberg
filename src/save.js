import { useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
    const { beforeImage, afterImage } = attributes;

    return (
        <div {...useBlockProps.save()}>
            <div className="comparison-slider">
                {beforeImage.url && afterImage.url && (
                    <div className="twentytwenty-container">
                        <img src={beforeImage.url} alt={beforeImage.alt} />
                        <img src={afterImage.url} alt={afterImage.alt} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Save;
