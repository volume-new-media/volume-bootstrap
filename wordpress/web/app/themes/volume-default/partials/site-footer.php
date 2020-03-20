    <!-- FOOTER -->
    <footer class="footer">
    </footer>
    <!-- FOOTER END -->

    <?php wp_footer(); ?>

    <?php if (WP_ENV == 'development' && isset($_GET['debug'])) : ?>
        <?php _template(); ?>
        <?php _d($wp_query); ?>
    <?php endif; ?>

    </body>
</html>
