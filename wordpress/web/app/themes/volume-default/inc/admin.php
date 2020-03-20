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
    global $config;

    if (!$config['dashboard']['welcome_panel']) {
        remove_action('welcome_panel', 'wp_welcome_panel');
    }
    if (!$config['dashboard']['incoming_links']) {
        remove_meta_box('dashboard_incoming_links', 'dashboard', 'normal');
    }
    if (!$config['dashboard']['plugins']) {
        remove_meta_box('dashboard_plugins', 'dashboard', 'normal');
    }
    if (!$config['dashboard']['primary']) {
        remove_meta_box('dashboard_primary', 'dashboard', 'side');
    }
    if (!$config['dashboard']['secondary']) {
        remove_meta_box('dashboard_secondary', 'dashboard', 'normal');
    }
    if (!$config['dashboard']['quick_press']) {
        remove_meta_box('dashboard_quick_press', 'dashboard', 'side');
    }
    if (!$config['dashboard']['recent_drafts']) {
        remove_meta_box('dashboard_recent_drafts', 'dashboard', 'side');
    }
    if (!$config['dashboard']['recent_comments']) {
        remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal');
    }
    if (!$config['dashboard']['right_now']) {
        remove_meta_box('dashboard_right_now', 'dashboard', 'normal');
    }
    if (!$config['dashboard']['activity']) {
        remove_meta_box('dashboard_activity', 'dashboard', 'normal');
    }
});


// Site credit
add_filter('admin_footer_text', function () {
    echo 'Website by <a href="https://volume.net.au" target="_blank">Volume</a>';
}, 0);

// Style in admin
add_action('admin_head', function () {
    echo '<style type="text/css">
        .attachment-266x266, .thumbnail img {
             width: 100% !important;
             height: auto !important;
        }
        </style>';
});

// Admin script and styles
add_action('admin_enqueue_scripts', function () {
    wp_register_script('vnm-admin-scripts', get_bloginfo('template_url') . '/assets/js/admin.min.js', array( 'jquery' ), null, false);
    wp_enqueue_style('admin-css', get_bloginfo('template_url') . '/assets/css/admin.min.css');
    wp_enqueue_script('vnm-admin-scripts');
});

// Settings
add_action('after_switch_theme', function () {
    global $config;

    // Delete default posts
    if ($config['general']['delete_default_content']) {
        wp_delete_post(1, true); // Delete "Hello World" post
        wp_delete_post(2, true); // Delete "Sample Page" page
        wp_delete_post(3, true); // Delete "Privacy Policy" page
    }

    // Disable comments
    if ($config['general']['disable_comments']) {
        update_option('disable_comments_options', array(
            'disabled_post_types' => array(
                'post',
                'page',
                'attachment',
            ),
            'remove_everywhere' => 1,
            'extra_post_types' => '',
            'db_version' => 6,
        ));
    }

    // Clear default blog description
    if (get_option('blogdescription') === 'Just another WordPress site') {
        update_option('blogdescription', $config['general']['blogdescription']);
    }

    update_option('users_can_register', $config['general']['users_can_register']);
    update_option('default_role', $config['general']['default_role']);
    update_option('timezone_string', $config['general']['timezone']);
    update_option('start_of_week', date('w', strtotime($config['general']['start_of_the_week'])));
    update_option('time_format', $config['general']['time_format']);
    update_option('day_format', $config['general']['day_format']);
    update_option('date_format', $config['general']['date_format']);
    update_option('daydate_format', $config['general']['daydate_format']);
    update_option('daydatetime_format', $config['general']['daydatetime_format']);
    update_option('datetime_format', $config['general']['datetime_format']);

    // Writing

    // Reading
    update_option('posts_per_page', $config['reading']['posts_per_page']);
    update_option('posts_per_rss', $config['reading']['posts_per_page']);

    // Permalinks
    update_option('permalink_structure', $config['permalinks']['permalink_structure']);
});

// Set cURL timeout
add_action('http_api_curl', function ($handle) {
    global $config;

    curl_setopt($handle, CURLOPT_CONNECTTIMEOUT, $config['other']['curl_timeout']);
    curl_setopt($handle, CURLOPT_TIMEOUT, $config['other']['curl_timeout']);
}, 9999, 1);
add_filter('http_request_timeout', function ($timeout_value) {
    global $config;

    return $config['other']['curl_timeout'];
}, 9999);
add_filter('http_request_args', function ($r) {
    global $config;

    $r['timeout'] = $config['other']['curl_timeout'];
    return $r;
}, 9999, 1);
