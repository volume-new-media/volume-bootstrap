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
update_option('thumbnail_size_w', $config['images']['thumbnail']['width']);
update_option('thumbnail_size_h', $config['images']['thumbnail']['height']);
update_option('thumbnail_crop', $config['images']['thumbnail']['crop']);
update_option('medium_size_w', $config['images']['thumbnail']['width']);
update_option('medium_size_h', $config['images']['thumbnail']['height']);
update_option('medium_crop', $config['images']['thumbnail']['crop']);
update_option('large_size_w', $config['images']['thumbnail']['width']);
update_option('large_size_h', $config['images']['thumbnail']['height']);
update_option('large_crop', $config['images']['thumbnail']['crop']);
