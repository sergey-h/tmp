<?php
global $mk_options;
$style = !empty($mk_options['secondary_menu']) ? $mk_options['secondary_menu'] : 'fullscreen';

$seondary_header_for_all = !empty($mk_options['seondary_header_for_all']) ? $mk_options['seondary_header_for_all'] : 'false';

if($seondary_header_for_all == 'false' && get_header_style() != 3 && !$view_params['is_shortcode']) return false;

?>
<div class="mk-dashboard-trigger <?php echo $style; ?>-style add-header-height">
        <div class="mk-css-icon-menu icon-size-<?php echo $mk_options['header_burger_size']; ?>">
            <div class="mk-css-icon-menu-line-1"></div>
            <div class="mk-css-icon-menu-line-2"></div>
            <div class="mk-css-icon-menu-line-3"></div>
        </div>
</div>

