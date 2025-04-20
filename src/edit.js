import { useBlockProps, MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Edit = ({ attributes, setAttributes }) => {
    const { beforeImage, afterImage } = attributes;

    const onSelectImage = (image, type) => {
        setAttributes({ [type]: { url: image.url, alt: image.alt } });
    };

    return (
        <div {...useBlockProps()}>
            <div className="comparison-slider">
                <div class="container">
                    <div class="inner">                        
                        <div class="comparison-slider-wrapper">
                            <div class="comparison-slider">
                                <div class="overlay">And I am the <strong>after</strong> image.</div>
                                <img src="https://raw.githubusercontent.com/Mario-Duarte/CodePen/main/assets/marioPhoto-2.jpg" alt="marioPhoto 2"/>
                           
                                <div class="resize">
                                    <div class="overlay">I am the <strong>before</strong> image.</div>
                                    <img className="second-img" src="https://raw.githubusercontent.com/Mario-Duarte/CodePen/main/assets/marioPhoto-1.jpg" alt="marioPhoto 1"/>
                                </div>
                            
                                <div class="divider"></div>
                            </div>
                        </div>
                        
                        
                        
                        

                    </div>

                </div>




















            </div>
        </div>
    );
};

export default Edit;
