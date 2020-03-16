<?php
/**
 * Config
 */

if (WP_ENV !== 'development') {
    defined('ACF_LITE') || define('ACF_LITE', true);
}

defined('THEME_POSTS_PER_PAGE') || define('THEME_POSTS_PER_PAGE', 24);
defined('THEME_TIMEZONE') || define('THEME_TIMEZONE', 'Australia/Melbourne');
defined('THEME_BLOG_DESCRIPTION') || define('THEME_BLOG_DESCRIPTION', '');
defined('THEME_USERS_CAN_REGISTER') || define('THEME_USERS_CAN_REGISTER', 0);
defined('THEME_DEFAULT_ROLE') || define('THEME_DEFAULT_ROLE', 'subscriber');
defined('THEME_START_OF_THE_WEEK') || define('THEME_START_OF_THE_WEEK', 'Monday');
defined('THEME_PERMALINK') || define('THEME_PERMALINK', '/%postname%/');
defined('THEME_CURL_TIMEOUT') || define('THEME_CURL_TIMEOUT', 30);
