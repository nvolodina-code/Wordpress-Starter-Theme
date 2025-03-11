<?php
// functions.php
function basic_wp_theme_setup() {
    add_theme_support('title-tag');
}
add_action('after_setup_theme', 'basic_wp_theme_setup');