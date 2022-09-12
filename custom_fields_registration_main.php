<?php
/**
 * Plugin Name: Custom Fields Account Registration For Woocommerce
 * Description: This plugin allows create Custom Fields Registration plugin.
 * Version: 1.0
 * Copyright: 2022
 * Text Domain: custom-fields-account-for-woocommerce-registration
 * Domain Path: /languages 
 */

if (!defined('ABSPATH')) {
    exit();
}
if (!defined('CFAFWR_PLUGIN_DIR')) {
    define('CFAFWR_PLUGIN_DIR', plugins_url('', __FILE__));
}

include_once('main/backend/cfafwr_backend.php');
include_once('main/backend/cfafwr_comman.php');
include_once('main/frontend/cfafwr_frontend.php');
include_once('main/resource/cfafwr-language.php');
include_once('main/resource/cfafwr-load-js-css.php');