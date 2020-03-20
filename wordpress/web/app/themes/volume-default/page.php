<?php get_template_part('partials/site-header'); ?>
<?php
$fields = get_fields();
$page = isset($fields['page']) ? $fields['page'] : false;
if (is_array($page) && count($page)) {
    foreach ($page as $content) {
        switch ($content['acf_fc_layout']) {
            case 'page_xxx':
                include(locate_template('partials/page-xxx.php', false, false));
                break;
        }
    }
} else {
    include(locate_template('partials/page-404.php', false, false));
}
?>
<?php get_template_part('partials/site-footer'); ?>
