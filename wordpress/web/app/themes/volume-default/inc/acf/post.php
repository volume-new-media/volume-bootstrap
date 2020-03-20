<?php
/**
 * Post ACF fields
 */

// Add fields to post endpoint
add_action('rest_api_init', function () {
    register_rest_field('post', 'fields', array(
        'get_callback'    => function ($object) {
            return get_fields($object['id']);
        },
        'schema' => null,
    ));
});

if (function_exists('acf_add_local_field_group')) {
    $namespace = 'post';
    acf_add_local_field_group(array(
        'key' => 'group_post_fields',
        'title' => 'Post Fields',
        'fields' => array(
            acf_field_helper($namespace, 'text', 'text'),
            acf_field_helper($namespace, 'text_area', 'text_area'),
            acf_field_helper($namespace, 'number', 'number'),
            acf_field_helper($namespace, 'range', 'range'),
            acf_field_helper($namespace, 'email', 'email'),
            acf_field_helper($namespace, 'url', 'url'),
            acf_field_helper($namespace, 'password', 'password'),
            acf_field_helper($namespace, 'image', 'image'),
            acf_field_helper($namespace, 'file', 'file'),
            acf_field_helper($namespace, 'wysiwyg', 'wysiwyg'),
            acf_field_helper($namespace, 'oembed', 'oembed'),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'post',
                ),
            ),
        ),
        'menu_order' => 0,
        'position' => 'normal',
        'style' => 'seamless',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => array(
            0 => 'the_content',
            1 => 'excerpt',
            2 => 'discussion',
            3 => 'comments',
            4 => 'format',
            5 => 'page_attributes',
            6 => 'send-trackbacks',
        ),
        'active' => true,
        'description' => '',
    ));
}
