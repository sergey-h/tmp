<?php
switch($view_params['column']) {
		case 1 :
		$column_class = 'one-column';
		break;
		case 2 :
		$column_class = 'two-column';
		break;
		case 3 :
		$column_class = 'three-column';
		break;
		case 4 :
		$column_class = 'four-column';
		continue;
	}
?>

<div class="mk-testimonial <?php echo $view_params['style']; ?>-style testimonial-column <?php echo $view_params['skin'].'-version '.$view_params['el_class']; ?> <?php echo $view_params['animation_css']; ?> clear" id="testimonial_<?php echo $view_params['id']; ?>">
	<?php if ( $view_params['style'] == 'simple' ) { ?>
		<i class="mk-moon-quotes-left"></i>
		<i class="mk-moon-quotes-right"></i>
	<?php } ?>
	<ul class="testimonial-ul clear">
		<?php
		$i = 0;
		while ( $view_params['loop']->have_posts() ):
			$view_params['loop']->the_post();
			$i++;

			echo mk_get_shortcode_view('mk_testimonials', 'loop-styles/'.$view_params['style'], true, ['column_class' => $column_class]);


			// if($i%$view_params['column'] == 0) {
			// 	echo '<div class="clearboth"></div>';
			// }

		endwhile;

		wp_reset_query();

		?>
	</ul>
</div>