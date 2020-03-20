<?php
/**
 * Config
 */
return array(
    'styles' => array(
        'color' => '#ffffff',
    ),
    'dashboard' => array(
        'welcome_panel' => false,
        'incoming_links' => false,
        'plugins' => false,
        'primary' => false,
        'secondary' => false,
        'quick_press' => false,
        'recent_drafts' => false,
        'recent_comments' => false,
        'right_now' => true,
        'activity' => false,
    ),
    'general' => array(
        'delete_default_content' => true,
        'disable_comments' => true,
        'blogdescription' => '',
        'users_can_register' => 0,
        'default_role' => 'subscriber',
        'timezone' => 'Australia/Melbourne',
        'start_of_the_week' => 'Monday',
        'time_format' => 'g:ia',
        'day_format' => 'l',
        'date_format' => 'd.m.y',
        'daydate_format' => 'l F j',
        'daydatetime_format' => 'l F j, g:ia',
        'datetime_format' => 'Y-m-d G:i',
    ),
    'reading' => array(
        'posts_per_page' =>  24,
    ),
    'permalinks' => array(
        'permalink_structure' => '/%postname%/',
    ),
    'other' => array(
        'curl_timeout' => 30,
    ),
    'images' => array(
        'thumbnail' => array(
            'width' => 275,
            'height' => 275,
            'crop' => 1,
        ),
        'medium' => array(
            'width', 440,
            'height', 440,
            'crop', 0,
        ),
        'large' => array(
            'width' => 1070,
            'height' => 1070,
            'crop' => 0,
        ),
    ),
);
