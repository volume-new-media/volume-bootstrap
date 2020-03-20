<?php
function _d($var, $print = false)
{
    if ($print) {
        echo '<pre class="xdebug-var-dump">';
        echo '----------------<br>';
        print_r($var);
        echo '<br>----------------';
        echo '</pre>';
    } else {
        var_dump($var);
    }
}

function _dd($var, $print = false)
{
    _d($var, $print);
    die();
}

function _template()
{
    global $template;
    echo '<pre class="xdebug-var-dump">';
    echo '----------------<br>';
    echo 'TEMPLATE:<br>'.basename($template);
    echo '<br>----------------';
    echo '</pre>';
}
