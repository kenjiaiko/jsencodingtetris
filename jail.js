
// blog.livedoor.jp/dankogai/archives/51181891.html

var g_code = "";
var g_jail = {};
function exec_javascript_code(log) {
	try{
		eval('with(g_jail){ ' + g_code + ' };');
	}catch(e){
		return "ERR(code03): " + e;
	}
	return null;
}

jsJail = function(noexec) {
	this.log = {};
	this.err = null;
	if (noexec === null) {
		// cf. https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference
		this.noexec = (''
			+ 'Array Boolean Date Error EvalError Function Math Number Object '
			+ 'RangeError ReferenceError RegExp String SyntaxError TypeError URIError '
			+ 'java JavaArray JavaClass JavaObject JavaPackage netscape Packages sun '
			+ 'decodeURI decodeURIComponent encodeURI encodeURIComponent '
			+ 'eval isFinite isNaN parseFloat parseInt'
		).split(/\s+/);
	} else {
		this.noexec = noexec;
	}
	this.writelog = function(name, value) {
		this.log[name] = value;
	},
	this.result = function() {
		return {err:this.err, log:this.log};
	},
	this.eval = function(src) {
		var cnt = 0;
		var dqu = 0, squ = 0, yen = 0;
		this.err = null;
		for (var i=0, l=src.length; i < l; i++) {
			var c = src.substring(i, i+1);
			var n = c.charCodeAt(0);
			// judge multibytes
			if ((n >= 0x0 && n <= 0x80) ||
				(n == 0xf8f0) ||
				(n >= 0xff61 && n <= 0xff9f) ||
				(n >= 0xf8f1 && n <= 0xf8f3))
			{
				if (yen) {
					yen = 0;
					continue;
				}
				switch (c) {
					case '{':
						if (dqu == 0 && squ == 0)
							cnt++;
						break;
					case '}':
						if (dqu == 0 && squ == 0)
							cnt--;
						break;
					case '"':
						dqu = (dqu ? 0 : 1);
						break;
					case '\'':
						squ = (squ ? 0 : 1);
						break;
					case '\\':
						yen = 1;
						break;
				}
				if (cnt < 0) {
					this.err = "ERR(code01): put a code in parentheses";
					return 1;
				}
			} else {
				this.err = "ERR(code04): couldnt use multibytes";
				console.log(c + ":" + i);
				return 1;
			}
		}
		if(cnt != 0) {
			this.err = "ERR(code02): put a code in parentheses";
			return 1;
		}
		var jail  = {};
		var world = {};
		for (var p in window) {
			world[p] = window[p];
			jail[p]  = null;
		}
		for (var i=0, l=this.noexec.length; i < l; i++)
			jail[this.noexec[i]] = null;
		
		g_code = src;
		g_jail = jail;
		this.err = exec_javascript_code(this.log);
		
		for (var p in window) {
			if (world[p] === window[p])
				continue;
			if (p in world) {
				window[p] = world[p];
			} else {
				if (this.err == null)
					this.log[p] = window[p];
				delete window[p];
			}
		}
		if (this.err)
			return 1;
		return 0;
	};
}

