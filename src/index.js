import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import './editor.css';
import './style.css';
import './slider';
import Edit from './edit';
import Save from './save';



registerBlockType('comparison-slider-for-gutenberg/comparison-slider', {
    title: __('Comparison Slider', 'csfg'),
    category: 'common',
    icon:{
        src: 'images-alt2',
        foreground: '#fe0000'
    },
    edit: Edit,
    save: Save
});
