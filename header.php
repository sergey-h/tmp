<!DOCTYPE html>
<html <?php echo language_attributes();?> >
<head>
<meta name="alexaVerifyID" content="wj1SK8mkaOcRTvbm61h-tiDSBaU"/>
<meta name="msvalidate.01" content="EF247A9C58722E24F8647D03E98BEB37" />
<meta name="google-site-verification" content="oomLgVuUZfUTw4_RWLW9-gYj98ZgAR9OzFbUgUMujX4" /> 
<meta name="keywords" content="ECommerce Website Design, Website and UI Designs , E-Commerce Design and Development , Web Design and Development, Web Development Services, , Web E-Commerce Services, , E-Commerce Website Development, , Magento Development Services, WordPress and Plugin Developers."/>
    <?php wp_head(); ?>
</head>

<body <?php body_class(mk_get_body_class(global_get_post_id())); ?> <?php echo get_schema_markup('body'); ?> data-adminbar="<?php echo is_admin_bar_showing() ?>">

	<?php
		// Hook when you need to add content right after body opening tag. to be used in child themes or customisations.
		do_action('theme_after_body_tag_start');
	?>

	<!-- Target for scroll anchors to achieve native browser bahaviour + possible enhancements like smooth scrolling -->
	<div id="top-of-page"></div>

		<div id="mk-boxed-layout">

			<div id="mk-theme-container" <?php echo is_header_transparent('class="trans-header"'); ?>>

				<?php mk_get_header_view('styles', 'header-'.get_header_style());