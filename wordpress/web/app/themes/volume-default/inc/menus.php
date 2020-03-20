<?php
/**
 * Menus
 */

// Add menu support
add_theme_support('menus');

// Register menus
add_action('init', function () {
    register_nav_menus(
        array(
            'primary' => __('Primary'),
            'secondary' => __('Secondary'),
        )
    );
});

add_filter('nav_menu_css_class', function ($classes, $item, $args) {
    if ($args->li_class) {
        $classes[] = $args->li_class;
    }
    return $classes;
}, 10, 3);

add_filter('nav_menu_link_attributes', function ($atts, $item, $args) {
    if ($args->a_class) {
        $atts['class'] = $args->a_class;
    }
    return $atts;
}, 10, 3);
