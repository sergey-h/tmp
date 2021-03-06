<?php
	$phpinfo =  pathinfo( __FILE__ );
	$path = $phpinfo['dirname'];
	include( $path . '/config.php' );

	$id = Mk_Static_Files::shortcode_id();



	$query = array(
	    'post_type'=>'animated-columns',
	    'showposts' => -1,
	);

	if ( $columns ) {
	    $query['post__in'] = explode( ',', $columns );
	}
	if ( $orderby ) {
	    $query['orderby'] = $orderby;
	}
	if ( $order ) {
	    $query['order'] = $order;
	}

	switch ($column_number) {
	    case 1:
	        $column_css = 'a_1col';
	        break;
	    case 2:
	        $column_css = 'a_2col';
	        break;
	    case 3:
	        $column_css = 'a_3col o2col';
	        break;
	    case 4:
	        $column_css = 'a_4col o3col o2col';
	        break;
	    case 5:
	        $column_css = 'a_5col o3col o2col';
	        break;
	    case 6:
	        $column_css = 'a_6col o3col o2col';
	        break;
	    case 7:
	        $column_css = 'a_7col o3col o2col';
	        break;
	    case 8:
	        $column_css = 'a_8col o3col o2col';
	        break;
	    default:
	        $column_css = 'a_4col o3col o2col';
	        break;
	}


	$r = new WP_Query( $query );
	global $post;

	$border_color_css = (!empty($border_color)) ? 'has-border ' : '';
?>
	<div id="animated-columns-<?php echo $id ?>" class="mk-animated-columns clear <?php echo $style; ?>-style <?php echo $column_css; ?> <?php echo $border_color_css; echo get_viewport_animation_class($animation); echo $el_class; ?>">
<?php
	while ( $r->have_posts() ) { $r->the_post();

	    $icon_type = get_post_meta( $post->ID, '_icon_type', true );
	    $icon_type = !empty($icon_type) ? $icon_type : 'icon';
	    $icon = get_post_meta( $post->ID, '_icon', true );
	    $image_icon = get_post_meta( $post->ID, '_image_icon', true );
	    $title = get_post_meta( $post->ID, '_title', true );
	    $desc = get_post_meta( $post->ID, '_desc', true );
	    $link = get_post_meta( $post->ID, '_link', true );
	    $btn_txt = get_post_meta( $post->ID, '_btn_text', true );
	    $target = get_post_meta( $post->ID, '_target', true );

?>
		<div class="animated-column-item s_item a_colitem a_position-relative a_opacity-0 a_float-left a_overflow-hidden a_align-center a_box-border">
		<?php
	    if($style == 'simple') {
		?>
			<?php if(!empty($link)) {?>
				<a href="<?php echo $link ?>" target="<?php echo $target ?>">
			<?php } ?>

				<div class="animated-column-holder a_position-absolute a_width-100-per a_height-100-per a_display-block padding-20 a_top-0 a_box-border">

			<?php  if($icon_type == 'image') { ?>
				<div class="animated-column-icon animated-column-image-icon a_margin-0-auto a_display-block a_padding-bottom-30"><img src="<?php echo $image_icon; ?>" /></div>
			<?php } else { ?>
				<i class="<?php echo $icon; ?> animated-column-icon a_padding-bottom-30"></i>
			<?php } ?>
				</div>
				<div class="animated-column-title s_title a_position-absolute a_width-100-per a_height-100-per a_font-weight-bold a_text-transform-up a_box-border">
					<span class="animated-column-simple-title"><?php echo $title; ?></span>
				</div>

			<?php if(!empty($link)) { ?></a><?php } ?>
		<?php
	    } else {
		?>
			<div class="animated-column-holder a_position-absolute a_width-100-per a_display-block padding-20 a_top-0 a_box-border">
			<?php  if($icon_type == 'image') { ?>
				<div class="animated-column-icon animated-column-image-icon a_margin-0-auto a_display-block a_padding-bottom-30"><img src="<?php echo $image_icon; ?>" /></div>
			<?php } else { ?>
				<i class="<?php echo $icon; ?> animated-column-icon a_padding-bottom-30"></i>
			<?php } ?>
				<div class="animated-column-title s_title a_position-relative a_font-weight-bold a_text-transform-up a_box-border"><?php echo $title; ?></div>
			</div>
			<p class="animated-column-desc s_desc a_top-100-per a_font-14 a_position-relative a_width-100-per a_line-25 a_box-border"><?php echo $desc; ?></p>
			<?php if(!empty($link)) {?>
				<div class="animated-column-btn a_position-relative a_top-100-per a_width-100-per">
				<?php echo do_shortcode( '[mk_button dimension="savvy" corner_style="pointed" outline_skin="custom" outline_active_color="'.$btn_color.'" outline_active_text_color="'.$btn_color.'" outline_hover_bg_color="'.$btn_hover_color.'" outline_hover_color='.$btn_hover_txt_color.' size="small" target="'.$target.'" align="center" url="'.$link.'"]'.$btn_txt.'[/mk_button]' ); ?>
				</div>
			<?php } ?>
			<?php
	    }
		?>
		</div>
<?php
	} //end while
?>
	</div>
<?php

	$border_full = !empty($border_color) ? ('border-top:1px solid '.$border_color.';') : '';
	$border_color = !empty($border_color) ? ('border-color:'.$border_color.';') : '';
	$icon_color = !empty($icon_color) ? ('color:'.$icon_color.';') : '';
	$icon_hover_color = !empty($icon_hover_color) ? ('color:'.$icon_hover_color.';') : '';

	Mk_Static_Files::addCSS("
	#animated-columns-{$id}.has-border {
	   {$border_full}
	}
	#animated-columns-{$id}.has-border .animated-column-item {
	    border-left-width:1px;
	    border-bottom-width:1px;
	    {$border_color}
	}
	#animated-columns-{$id} .animated-column-item {
	    background-color:{$bg_color};
	    min-height:{$column_height}px;
	}
	#animated-columns-{$id} .animated-column-item:hover {
	    background-color:{$bg_hover_color};
	}
	#animated-columns-{$id} .animated-column-item:hover .animated-column-title:after {
	    background-color:{$txt_hover_color}
	}

	#animated-columns-{$id} .animated-column-icon {
	    {$icon_color}
	    font-size:{$icon_size}px;
	}
	#animated-columns-{$id} .animated-column-image-icon {
	    width:{$icon_size}px;
	}

	#animated-columns-{$id} .animated-column-image-icon img {
	    max-width:100%;
	}

	#animated-columns-{$id} .animated-column-item:hover .animated-column-icon{
	    {$icon_hover_color}
	}

	#animated-columns-{$id} .animated-column-title,
	#animated-columns-{$id} .animated-column-desc{
	      color:{$txt_color};
	}

	#animated-columns-{$id} .animated-column-title
	{
	      font-size:{$title_size}px;
	}

	#animated-columns-{$id} .animated-column-title:after {
	    background-color: {$txt_color};
	}
	#animated-columns-{$id} .animated-column-item:hover .animated-column-title,
	#animated-columns-{$id} .animated-column-item:hover .animated-column-desc {
	    color:{$txt_hover_color}
	}", $id);

	wp_reset_postdata();
