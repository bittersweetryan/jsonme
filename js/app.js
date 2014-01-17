window.app = (  function( window, $, snack ){
	'use strict';
	
	//From Handlebars.Utils.escapeExpression
	var escape = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		'\'': '&#x27;',
		'`': '&#x60;'
	};
	var badChars = /[&<>"'`]/g;
	var possible = /[&<>"'`]/;

	var escapeChar = function(chr) {
		return escape[chr] || chr;
	};
	var escapeStr = function(string) {
		if (!possible.test(string)) {
			return string;
		}
		return string.replace(badChars, escapeChar);
	};

	var format = function(str, context) {
		return str.replace(/\$\{([^{}]+)\}/g, function(match, key) {
			if (context.hasOwnProperty(key)) {
				return escapeStr(context[key]);
			} else {
				return '';
			}
		});
	};

	var remove = function(ele) {
		ele.parentNode.removeChild(ele);
		return ele;
	};

	var parseData = function( data ) {

		var json        = snack.parseJSON(data),
            ele         = null,
            sections    = $('[data-content]');

		document.title =  'Resumé for ' + json.name;

		// $( '#contact' )[0].innerHTML = json.contact;

		snack.each(json, function(val, key) {
            ele = $('[data-content=' + key + ']')[0];

			if( ele ){
				//standard keys just populate the section
				if( !snack.isArray( val ) ){

					ele.innerHTML = val;
				}
				else if( snack.isArray( val ) ){
					var frag = '';

					snack.each( val , function( item, index ){
						var template = $( '#' + key + '-template' )[ 0 ].innerHTML
								.replace( /^\s\s*/, '' )
								.replace( /\s\s*$/, '' );

						//template found, key is a string
						if( template && typeof item === 'string' ){
							frag += template.replace(new RegExp('\\$\\{' + key + '\\}', 'g'), item);
						}
						else if( template && typeof item === 'object' ){
							var cur = format(template, item);

							for( var innerKey in item ){
								cur = cur.replace('${' + innerKey + '}', item[ innerKey ] );
							}

							if(index === val.length-1){
								cur = cur.replace('<li>','<li class="last">');
							}

							frag += cur;
						}
					});

					ele.innerHTML = frag;

					//remove unused fields
                    snack.each($('li .content', ele), function(child) {
                        if (!/\w/.test(child.innerHTML)) {
                            remove(child.parentNode);
                        }
                    });
				}
			}
		});

		snack.each(sections, function(section) {
            if (!/\w/.test(section.innerHTML)) {
                remove(section.parentNode);
            }
        });
	};

	return {
		loadData : function( ) {
			var opts = {
				method : 'get',
				url : 'resume.json'
			};

			snack.request( opts, function( err, response ) {
				if( err ){
					return;
				}
				else{
					parseData( response );
				}
			} );
		}
	};

}( window, window.Sizzle, window.snack ) );