<?php
/**
 * Plugin Name:       Comparison Slider for Gutenberg
 * Description:       A Gutenberg block for adding an interactive before/after image comparison slider.
 * Version:           1.0.0
 * Author:            Md Laju Miah
 * Author URI:        https://www.upwork.com/freelancers/~0149190c8d83bae2e2
 * License:           GPL-2.0+
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       csfg
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

/**
 * Registers the block using metadata from `block.json`.
 */
function comparison_slider_register_block() {
    register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'comparison_slider_register_block' );

/**
 * Enqueue frontend and editor styles/scripts  if needed.
 */
function comparison_slider_enqueue_assets() {

    wp_enqueue_script('jquery');
    wp_enqueue_script(
        'comparison-slider',
        plugin_dir_url(__FILE__) . 'build/slider.js',
        array(),
        '1.0',
        true
    );

    wp_enqueue_style(
        'comparison-slider-style',
        plugin_dir_url( __FILE__ ) . 'build/style-index.css',
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'build/style-index.css' )
    );

     
}
add_action( 'enqueue_block_editor_assets', 'comparison_slider_enqueue_assets' );
