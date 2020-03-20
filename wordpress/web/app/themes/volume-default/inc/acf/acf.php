<?php
/**
 * ACF
 */

defined('ACF_LITE') || define('ACF_LITE', true);
/* if (WP_ENV !== 'development') { */
/*     defined('ACF_LITE') || define('ACF_LITE', true); */
/* } */

add_action('the_post', function ($post_object) {
    $post_object->fields = get_fields($post_object->ID);

    return $post_object;
});

function acf_field_helper($namespace, $name, $type, $args = array())
{
    return array_merge(array(
        'key' => 'field_'.$namespace.'_'.$name,
        'label' => ucfirst(array_slice(explode('_', $name), -1)[0]),
        'name' => $namespace.'_'.$name,
        'type' => $type,
    ), $args);
}

add_action('acf/init', function () {
    // Tinymce toolbars
    add_filter('acf/fields/wysiwyg/toolbars', function ($toolbars) {
        $toolbars['Basic'] = array(
          1 => array(
            'styleselect',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'separator',
            'numlist',
            'bullist',
            'link',
            'unlink',
            'separator',
            'undo',
            'redo',
            'separator',
            'removeformat',
          )
        );

        return $toolbars;
    });

    // Tinymce formats
    add_filter('tiny_mce_before_init', function ($editor) {
        $editor['paste_as_text'] = true;

        $editor['style_formats'] = json_encode(array(
          array(
            'title' => 'Heading 2',
            'block' => 'h2',
          ),
          array(
            'title' => 'Heading 3',
            'block' => 'h3',
          ),
          array(
            'title' => 'Heading 4',
            'block' => 'h4',
          ),
          array(
            'title' => 'Paragraph',
            'block' => 'p',
          ),
        ));

        return $editor;
    });
});
