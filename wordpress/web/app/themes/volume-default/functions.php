<?php
/**
 * Volume API
 */
global $config;

$config = include dirname(__FILE__).'/config.php';

if (class_exists('ACF')) {
    require_once dirname(__FILE__).'/inc/acf/acf.php';
    require_once dirname(__FILE__).'/inc/acf/post.php';
    require_once dirname(__FILE__).'/inc/acf/options.php';
}

require_once dirname(__FILE__).'/inc/admin.php';
require_once dirname(__FILE__).'/inc/images.php';
require_once dirname(__FILE__).'/inc/menus.php';

require_once dirname(__FILE__).'/inc/_debug.php';
