<?php
 /**
 * Plugin Name: Full Search Bar
 * Description: Create the search bar without needing to edit search.php
 * Version: 0.1
 * Author: Nick Mole
 * Text Domain: fsb-full-search-bar
 */


function FullSearchBarCSS(){
  wp_register_style( 'full-bar-search', plugins_url('full-bar-search').'/src/css/search-form-style.css' );
  wp_enqueue_style( 'full-bar-search' );
}
function FullSearchBarJS(){
  wp_register_script( 'full-bar-script', plugins_url('full-bar-search').'/src/js/search-form-script.js' );
  wp_enqueue_script( 'full-bar-script' );
}

add_action( 'wp_footer', 'FullSearchBarCSS');
add_action( 'wp_footer', 'FullSearchBarJS');

add_shortcode( 'FullSearchBar', 'FullSearchBar' );

function FullSearchBar(){
  ?>
    <form role="search" method="get" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
      <label> 
        <span class="screen&#45;reader&#45;text"><?php echo esc_html_x( 'Search for:', 'label', 'visual&#45;composer&#45;starter' ); ?></span> 
        <input onfocus="searchClickToggleCSS()" type="search" class="search&#45;field" placeholder="<?php echo esc_attr_x( '', 'placeholder', 'visual&#45;composer&#45;starter' ); ?>" value="<?php echo get_search_query(); ?>" name="s" /> 
      </label> 
    <button type="submit" class="search&#45;submit"><span class="screen&#45;reader&#45;text"><?php echo esc_html_x( 'Search', 'submit button', 'visual&#45;composer&#45;starter' ); ?></span></button> 
  </form> 
  <?php
    
}


?>