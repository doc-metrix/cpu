
(function() {
	'use strict';

	var URLs = {},
		CONTEXT;

	URLs.readme = 'https://api.github.com/repos/doc-metrix/cpu/contents/README.md';
	URLs.markdown = 'https://api.github.com/markdown';
	URLs.doc = 'https://api.github.com/repos/doc-metrix/cpu/contents/doc/index.json';

	CONTEXT = 'doc-metrix/cpu';

	getResource( URLs.readme, onReadme );

	// FUNCTIONS //

	/**
	* FUNCTION: getResource( url, clbk )
	*	Fetches a resource from a provided URL and returns the result to a provided callback.
	*
	* @private
	* @param {String} url - resource location
	* @param {Function} clbk - callback to invoke upon resource receipt. Function should accept one input argument: [ result ]
	*/
	function getResource( url, clbk ) {
		var xhr;
		if ( url && clbk ) {
			// Create a new request object:
			xhr = new XMLHttpRequest();

			// Open the request connection:
			xhr.open( 'GET', url );

			// Define the state change callback:
			xhr.onreadystatechange = function () {
				if ( xhr.readyState != 4 || xhr.status != 200 ){
					return;
				}
				clbk( xhr.responseText );
			};
			// Send the request:
			xhr.send();
		} // end IF (parameters)
	} // end FUNCTION getResource()

	/**
	* FUNCTION: postResource( url, data, clbk )
	*	Post data to a resource at a provided URL and return the response to a provided callback.
	*
	* @param {string} url - resource location
	* @param {object} data - data to be sent to location
	* @param {function} clbk - callback to invoke upon response receipt. Function should accept one input argument: [ result ]
	*/
	function postResource( url, data, clbk ) {
		var xhr;
		if ( url && clbk ) {
			// Create a new request object:
			xhr = new XMLHttpRequest();

			// Open the request connection:
			xhr.open( 'POST', url, true );

			// Set the request header:
			xhr.setRequestHeader( 'Content-Type', 'application/json' );

			// Define the state change callback:
			xhr.onreadystatechange = function () {
				if ( xhr.readyState != 4 || xhr.status != 200 ){
					return;
				}
				clbk( xhr.responseText );
			};
			// Send the request:
			xhr.send( data );
		} // end IF (parameters)
	} // end FUNCTION postResource()

	/**
	* FUNCTION: onReadme( blob )
	*	Handler for receiving a README resource.
	*
	* @private
	* @param {String} blob - content blob which will be parsed as JSON
	*/
	function onReadme( blob ) {
		var content = window.atob( JSON.parse( blob ).content );
		render( content );
	} // end FUNCTION onReadme()

	/**
	* FUNCTION: render( content )
	*	Renders Markdown as HTML.
	*
	* @private
	* @param {String} content - Markdown to render
	*/
	function render( content ) {
		content = {
			'text': content,
			'mode': 'markdown',
			'context': CONTEXT
		};
		content = JSON.stringify( content );
		postResource( URLs.markdown, content, onResource );
	} // end FUNCTION render()

	/**
	* FUNCTION: onResource( html )
	*	Handler for receiving rendered HTML.
	*
	* @private
	* @param {String} html - rendered HTML
	*/
	function onResource( html ) {
		document.getElementById( 'readme' ).innerHTML = html;
		getDoc();
	} // end FUNCTION onResource()

	/**
	* FUNCTION: getDoc()
	*	Retrieves metric documentation.
	*
	* @private
	*/
	function getDoc() {
		getResource( URLs.doc, onDoc );
	} // end FUNCTION getDoc()

	/**
	* FUNCTION: onDoc( blob )
	*	Handler for receiving a documentation resource.
	*
	* @private
	* @param {String} blob - content blob which will be parsed as JSON
	*/
	function onDoc( blob ) {
		var doc = JSON.parse( window.atob( JSON.parse( blob ).content ) );
		getFormulas( doc );
	} // end FUNCTION onDoc()

	/**
	* FUNCTION: getFormulas( doc )
	*	Extracts formulas from the documentation and inserts them into the DOM.
	*
	* @private
	* @param {Object} doc - metric documentation
	*/
	function getFormulas( doc ) {
		var keys = Object.keys( doc ),
			cache = [],
			name,
			metric,
			formula,
			variables,
			el,
			parent,
			eqn,
			script,
			p,
			text,
			numKeys;

		// Slugify the keys, lowercase, and extract the formula:
		for ( var i = 0; i < keys.length; i++ ) {
			metric = doc[ keys[ i ] ];
			formula = metric.formula;
			if ( formula ) {
				name = keys[ i ]
					.split( '.' )
					.join( '' )
					.toLowerCase();
				cache.push({
					'name': name,
					'formula': formula
				});
			}
		} // end FOR i

		// Use jQuery to select the table sibling following our metric of interest. We will insert the formula just before the table.
		for ( var j = 0; j < cache.length; j++ ) {
			name = cache[ j ].name;
			formula = cache[ j ].formula;
			variables = formula.variables;

			// Get where in the DOM tree we want to place the equation:
			el = $( 'a[name="user-content-'+name+'"]' )
				.parent()
				.nextUntil( 'table' )[ 0 ];

			// Insert the formula:
			script = document.createElement( 'script' );
			script.type = 'math/tex; mode=display';
			script.text = 'x = ' + formula.equation;

			parent = el.parentNode;

			parent.insertBefore( script, el.nextSibling );

			// Step to the next sibling (i.e., the recently created script):
			el = el.nextSibling;

			// Generate the `variables` explanation...
			text = 'where ';

			keys = Object.keys( variables );
			numKeys = keys.length;
			for ( var k = 0; k < numKeys; k++ ) {
				name = keys[ k ];

				text += '\\(' + name + '\\) is ' + variables[ name ].description;

				if ( numKeys <= 2 ) {
					text += ' ';
				}
				if ( k < numKeys-1 && numKeys > 2 ) {
					text += ', ';
				}
				if ( k === numKeys - 2 ) {
					text += 'and ';
				}
				if ( k === numKeys - 1 ) {
					text += '.';
				}
			}

			p = document.createElement( 'p' );
			p.innerHTML = text;

			parent.insertBefore( p, el.nextSibling );

		} // end FOR j

		// Render all MathJax content:
		MathJax.Hub.Queue( ['Typeset', MathJax.Hub] );

	} // end FUNCTION getFormulas()

})();