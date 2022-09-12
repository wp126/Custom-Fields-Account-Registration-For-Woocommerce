jQuery(document).ready(function(){

	jQuery('.cfafwr_country_select').change(function(){
		var this_val = jQuery(this).val();

		state_ajax_fun(this_val);
	});

	var this_val = jQuery('.cfafwr_country_select').val();

	state_ajax_fun(this_val);

	jQuery('.cfafwr_state_select').click(function(){
		var country = jQuery('.cfafwr_country_select').val();
		if (country == "") {
			alert('Please Select Your Country..!');
		}
	});

	jQuery(".color_sepctrum").spectrum({
		color: "",
		preferredFormat: "hex",
	});

	jQuery('.cfafwr_timepicker').timepicker();

	jQuery('.cfafwr_multiselect').select2({
        ajax: {
                url: ajax_postajax.ajaxurl,
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    return {
                        q: params.term,
                        action: 'cfafwr_multiselect_ajax',
                        selectid: jQuery(this).data('id')
                    };
                },
                processResults: function( data ) {
                var options = [];
                if ( data ) {
 
                    jQuery.each( data, function( index, text ) {
                        options.push( { id: text[0], text: text[1]  } );
                    });
 
                }
                return {
                    results: options
                };
            },
            cache: true
        },
        minimumInputLength: 0
    });

});

function state_ajax_fun(this_val){
	jQuery.ajax({
        url: ajax_postajax.ajaxurl,
        type: 'POST',
        data: {
            action: 'cfafwr_country_sel_ajax',
            sel_code: this_val,
        },
        success: function( response ) {
        	jQuery('.cfafwr_state_select').html(response);
        }
    });
}