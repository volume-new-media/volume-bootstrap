<?php
/**
 * Options
 */

if (function_exists('acf_add_options_page')) {
    acf_add_options_page();
}

add_action('acf/init', function () {

    acf_add_local_field_group(array(
        'key' => 'group_options',
        'title' => 'Options',
        'fields' => array(
        ),
        'location' => array(
            array(
                array(
                    'param' => 'options_page',
                    'operator' => '==',
                    'value' => 'acf-options',
                ),
            ),
        ),
        'style' => 'default',
    ));
});
