function init() { 
	document.body.addClassName('yui-skin-sam');
	
	if ($('part_0_filter_id'))
  {
    var parts = $j('.textarea');
    for (var i = 0; i < parts.length; i++)
    {
      if ($F('part_' + i + '_filter_id') == 'YuiEditor') {
				// mark textarea's that need to be wymified
				$('part_'+i+'_content').addClassName('yuified');
      }
    }
		// boot wym on marked textarea's
		ta = $$(".yuified");
		for (var i = 0; i < ta.length; i++){
			boot_yui(ta[i]);
		}
		
  } else if ($('snippet_filter')) {
    if ($F('snippet_filter') == 'YuiEditor') {
			boot_wym($j('.textarea')[0]);
    }
  }
} 
YAHOO.util.Event.onDOMReady(init);

function boot_yui(element) {
	var myEditor = new YAHOO.widget.Editor(element.id, { 
		collapse: true,
		titlebar: 'Text Editing Tools',
		draggable: true,
		buttonType: 'advanced',
		buttons: [
		    { group: 'textstyle', label: 'Font Style',
		        buttons: [
		            { type: 'push', label: 'Bold CTRL + SHIFT + B', value: 'bold' },
		            { type: 'push', label: 'Italic CTRL + SHIFT + I', value: 'italic' },
		            { type: 'push', label: 'Underline CTRL + SHIFT + U', value: 'underline' },
		            { type: 'separator' },
		            { type: 'push', label: 'Subscript', value: 'subscript', disabled: true },
		            { type: 'push', label: 'Superscript', value: 'superscript', disabled: true },
		            { type: 'separator' },
		            { type: 'push', label: 'Remove Formatting', value: 'removeformat', disabled: true },
		            { type: 'push', label: 'Show/Hide Hidden Elements', value: 'hiddenelements' }
		        ]
		    },
		    { type: 'separator' },
		    { group: 'alignment', label: 'Alignment',
		        buttons: [
		            { type: 'push', label: 'Align Left CTRL + SHIFT + [', value: 'justifyleft' },
		            { type: 'push', label: 'Align Right CTRL + SHIFT + ]', value: 'justifyright' }
		        ]
		    },
		    { type: 'separator' },
		    { group: 'parastyle', label: 'Paragraph Style',
		        buttons: [
		        { type: 'select', label: 'Normal', value: 'heading', disabled: true,
		            menu: [
		                { text: 'Paragraph', value: 'none', checked: true },
		                { text: 'Header 1', value: 'h1' },
		                { text: 'Header 2', value: 'h2' },
		                { text: 'Header 3', value: 'h3' },
		                { text: 'Header 4', value: 'h4' },
		                { text: 'Header 5', value: 'h5' },
		                { text: 'Header 6', value: 'h6' }
		            ]
		        }
		        ]
		    },
		    { type: 'separator' },
		    { group: 'indentlist', label: 'Indenting and Lists',
		        buttons: [
		            { type: 'push', label: 'Indent', value: 'indent', disabled: true },
		            { type: 'push', label: 'Outdent', value: 'outdent', disabled: true },
		            { type: 'push', label: 'Create an Unordered List', value: 'insertunorderedlist' },
		            { type: 'push', label: 'Create an Ordered List', value: 'insertorderedlist' }
		        ]
		    },
		    { type: 'separator' },
		    { group: 'insertitem', label: 'Insert Item',
		        buttons: [
		            { type: 'push', label: 'HTML Link CTRL + SHIFT + L', value: 'createlink', disabled: true },
		            { type: 'push', label: 'Insert Image', value: 'insertimage' }
		        ]
		    }
		]
	});
	myEditor.render();
}

function unboot_yui(element){
	
}

function switch_yui(index, filter){
	if (index != null) {
		// control for page parts
		var elem = $('part_'+(index)+'_content');
		if (filter == "YuiEditor") {
			boot_yui(elem);
		} else {
			//for(var i=0;i<WYM_INSTANCES.length;i++) { WYM_INSTANCES[i].update(); };
			unboot_yui(elem)
		}
	} else {
		// control for snippets
		var elem = $$('.textarea');
		if (filter == "YuiEditor") {
			boot_yui(elem[0]);
		} else {
			//for(var i=0;i<WYM_INSTANCES.length;i++) { WYM_INSTANCES[i].update(); };
			unboot_yui(elem[0]);
		}
	}
}