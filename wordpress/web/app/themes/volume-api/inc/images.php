<?php
/**
 * Images
 */

// Allow SVG filetype
add_filter('wp_check_filetype_and_ext', function ($data, $file, $filename, $mimes) {
    $filetype = wp_check_filetype($filename, $mimes);
    return [
        'ext'             => $filetype['ext'],
        'type'            => $filetype['type'],
        'proper_filename' => $data['proper_filename']
    ];
}, 10, 4);

// Add svg filetype
add_filter('upload_mimes', function ($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
});

// Add featured image support
add_theme_support('post-thumbnails');

// Define image sizes
update_option('thumbnail_size_w', 275);
update_option('thumbnail_size_h', 275);
update_option('thumbnail_crop', 1);
update_option('medium_size_w', 440);
update_option('medium_size_h', 440);
update_option('medium_crop', 0);
update_option('large_size_w', 1070);
update_option('large_size_h', 1070);
update_option('large_crop', 0);
