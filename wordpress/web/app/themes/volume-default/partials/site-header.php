<?php global $config; ?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php bloginfo('name'); ?> | <?php is_front_page() ? bloginfo('description') : wp_title(''); ?></title>
    <meta name="description" content="<?php bloginfo('description'); ?>" />
    <meta name="apple-mobile-web-app-title" content="<?php wp_title(''); ?>">
    <meta name="application-name" content="<?php wp_title(''); ?>">
    <meta name="theme-color" content="<?php echo $config['styles']['color']; ?>">

    <!-- DNS pre-fetch -->
    <!-- Any other domains required should be added to the prefetch chain -->
    <link href="//cdnjs.cloudflare.com" rel="dns-prefetch">
    <link href="//fonts.google.com" rel="dns-prefetch">
    <link href="//apis.google.com" rel="dns-prefetch">

    <link rel="profile" href="http://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <a id="top"></a>
    <!--[if lte IE 8]>
    <div class="ie-warning">
        <div class="ie-warning-inner">
            <p>It looks like your browser is out of date. Please update to a newer version, or use an alternate browser to properly view this site.
                <a href="http://browsehappy.com/" target="_blank">Click here</a> for more information.
            </p>
        </div>
    </div>
    <![endif]-->

    <!-- GLOBAL HEADER -->
    <header class="header">
    </header>
    <!-- GLOBAL HEADER END -->
