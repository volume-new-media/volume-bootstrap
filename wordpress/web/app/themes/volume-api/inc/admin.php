<?php
/**
 * Admin settings
 */

// Change admin menu order
add_filter('menu_order', function () {
    return array(
        'index.php', // Dashboard
        'edit.php', // Posts
        'edit.php?post_type=page', // Pages
        'upload.php', // Media
    );
});
add_filter('custom_menu_order', function () {
    return true;
});

// Remove media button
add_action('admin_head', function () {
    remove_action('media_buttons', 'media_buttons');
});


// Remove dashboard meta boxes
add_action('wp_dashboard_setup', function () {
    remove_action('welcome_panel', 'wp_welcome_panel');
    remove_meta_box('dashboard_incoming_links', 'dashboard', 'normal');
    remove_meta_box('dashboard_plugins', 'dashboard', 'normal');
    remove_meta_box('dashboard_primary', 'dashboard', 'side');
    remove_meta_box('dashboard_secondary', 'dashboard', 'normal');
    remove_meta_box('dashboard_quick_press', 'dashboard', 'side');
    remove_meta_box('dashboard_recent_drafts', 'dashboard', 'side');
    remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal');
    /* remove_meta_box('dashboard_right_now', 'dashboard', 'normal'); */
    remove_meta_box('dashboard_activity', 'dashboard', 'normal');
});


// Site credit
add_filter('admin_footer_text', function () {
    echo 'Website by <a href="https://volume.net.au" target="_blank">Volume</a>';
}, 0);

/* // Style in admin */
/* add_action('admin_head', function () { */
/*     echo '<style type="text/css"> */
/*         .attachment-266x266, .thumbnail img { */
/*              width: 100% !important; */
/*              height: auto !important; */
/*         } */
/*         </style>'; */
/* }); */

/* // Admin script and styles */
/* add_action('admin_enqueue_scripts', function () { */
/*     wp_register_script('vnm-admin-scripts', get_bloginfo('template_url') . '/assets/js/admin.js', array( 'jquery' ), null, false); */
/*     wp_enqueue_style('admin-css', get_bloginfo('template_url') . '/assets/css/admin.css'); */
/*     wp_enqueue_script('vnm-admin-scripts'); */
/* }); */


// Settings
add_action('after_switch_theme', function () {

    // Delete default posts
    wp_delete_post(1, true); // Delete "Hello World" post
    wp_delete_post(2, true); // Delete "Sample Page" page
    wp_delete_post(3, true); // Delete "Privacy Policy" page

    // Clear default blog description
    if (get_option('blogdescription') === 'Just another WordPress site') {
        update_option('blogdescription', THEME_BLOG_DESCRIPTION);
    }

    update_option('users_can_register', THEME_USERS_CAN_REGISTER);
    update_option('default_role', THEME_DEFAULT_ROLE);
    update_option('timezone_string', THEME_TIMEZONE);
    update_option('start_of_week', date('w', strtotime(THEME_START_OF_THE_WEEK)));
    /* update_option('time_format', 'g:ia'); */
    /* update_option('day_format', 'l'); */
    /* update_option('date_format', 'd.m.y'); */
    /* update_option('daydate_format', 'l F j'); */
    /* update_option('daydatetime_format', 'l F j, g:ia'); */
    /* update_option('datetime_format', 'Y-m-d G:i'); */

    // Writing

    // Reading
    update_option('posts_per_page', THEME_POSTS_PER_PAGE);
    update_option('posts_per_rss', THEME_POSTS_PER_PAGE);

    // Permalinks
    update_option('permalink_structure', THEME_PERMALINK);
});

// Set cURL timeout
add_action('http_api_curl', function ($handle) {
    curl_setopt($handle, CURLOPT_CONNECTTIMEOUT, THEME_CURL_TIMEOUT);
    curl_setopt($handle, CURLOPT_TIMEOUT, THEME_CURL_TIMEOUT);
}, 9999, 1);
add_filter('http_request_timeout', function ($timeout_value) {
    return THEME_CURL_TIMEOUT;
}, 9999);
add_filter('http_request_args', function ($r) {
    $r['timeout'] = THEME_CURL_TIMEOUT;
    return $r;
}, 9999, 1);
