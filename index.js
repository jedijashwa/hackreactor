#!/usr/bin/env node
!function(a,b){function c(b,d){var e,f;if("\x2e"!=b[0]&&"\x2f"!=b[0])return a(b);if(d=d||"\x72\x6f\x6f\x74",e=c.resolve(b),!e&&/\.json$/i.test(b))return a("\x2e\x2f"+c.basename(b));if(f=c.cache[e],!f)throw Error("\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x72\x65\x71\x75\x69\x72\x65\x20\x22"+b+"\x22\x20\x66\x72\x6f\x6d\x20"+d);return f.exports||(f.exports={},f.call(f.exports,f,f.exports,c.relative(e))),f.exports}c.cache={},c.basename=a("\x70\x61\x74\x68").basename,c.resolve=function(b){var d,e,f;if("\x2e"!=b[0])return a.resolve(b);for(d=[b,b+"\x2e\x6a\x73",b+"\x2f\x69\x6e\x64\x65\x78\x2e\x6a\x73",b+"\x2e\x6a\x73\x6f\x6e",b+"\x2f\x69\x6e\x64\x65\x78\x2e\x6a\x73\x6f\x6e"],e=0;f=d[e];e++)if(c.cache[f])return f},c.register=function(a,b){c.cache[a]=b},c.relative=function(a){function b(b){var d,e,f,g,h;if("\x2e"!=b[0])return c(b);for(d=a.split("\x2f"),e=b.split("\x2f"),d.pop(),f=0,g=e.length;g>f;f+=1)h=e[f],"\x2e\x2e"==h?d.pop():"\x2e"!=h&&d.push(h);return c(d.join("\x2f"),a)}return b.resolve=c.resolve,b.cache=c.cache,b},c.register("\x2e\x2f\x73\x74\x61\x72\x74\x2e\x6a\x73",function(a,b,c){"use strict";function g(){c("\x2e\x2f\x6c\x69\x62\x65\x72\x61\x74\x6f\x72\x2f\x6c\x69\x62\x65\x72\x61\x74\x6f\x72")(d.args)}var d=c("\x63\x6f\x6d\x6d\x61\x6e\x64\x65\x72"),f=(c("\x70\x61\x74\x68"),c("\x2e\x2f\x63\x6f\x6e\x66\x69\x67"));d.version("\x30\x2e\x30\x2e\x30").command("\x63\x6f\x6e\x66\x69\x67").action(f.configure),d.parse(process.argv),d.args.length||(console.log("\n\x50\x6c\x65\x61\x73\x65\x20\x65\x6e\x74\x65\x72\x20\x74\x68\x65\x20\x6e\x61\x6d\x65\x20\x6f\x66\x20\x74\x68\x65\x20\x72\x65\x70\x6f\x20\x79\x6f\x75\x20\x77\x69\x73\x68\x20\x74\x6f\x20\x6c\x69\x62\x65\x72\x61\x74\x65\x2c\x20\x6f\x72\x20\x22\x61\x6c\x6c\x22\x20\x74\x6f\x20\x6c\x69\x62\x65\x72\x61\x74\x65\x20\x61\x6c\x6c\x20\x6f\x66\x20\x79\x6f\x75\x72\x20\x48\x61\x63\x6b\x20\x52\x65\x61\x63\x74\x6f\x72\x20\x73\x70\x72\x69\x6e\x74\x20\x72\x65\x70\x6f\x73"),console.log("\n\x45\x78\x61\x6d\x70\x6c\x65\x73\x3a\x20\x6c\x69\x62\x65\x72\x61\x74\x65\x20\x32\x30\x31\x34\x2d\x31\x31\x2d\x73\x75\x62\x63\x6c\x61\x73\x73\x2d\x64\x61\x6e\x63\x65\x2d\x70\x61\x72\x74\x79\x2c\x20\x6c\x69\x62\x65\x72\x61\x74\x65\x20\x32\x30\x31\x34\x2d\x31\x31\x2d\x75\x6e\x64\x65\x72\x62\x61\x72\x2c\x20\x6c\x69\x62\x65\x72\x61\x74\x65\x20\x61\x6c\x6c"),process.exit()),~d.args.indexOf("\x61\x6c\x6c")&&(d.args="\x61\x6c\x6c"),f.check()?g():f.configure(g)}),c.register("\x2e\x2f\x63\x6f\x6e\x66\x69\x67\x2e\x6a\x73",function(a,b,c){"use strict";function j(){var a;return f.which("\x67\x69\x74")||(console.error("\x59\x6f\x75\x20\x6d\x75\x73\x74\x20\x68\x61\x76\x65\x20\x60\x67\x69\x74\x60\x20\x74\x6f\x20\x6c\x69\x62\x65\x72\x61\x74\x65\x2e\x20\x50\x6c\x65\x61\x73\x65\x20\x69\x6e\x73\x74\x61\x6c\x6c\x20\x60\x67\x69\x74\x60\x2e"),process.exit(1)),d.existsSync(e.join(i,"\x2e\x2f\x63\x6f\x6e\x66\x69\x67\x2e\x6a\x73\x6f\x6e"))?(a=c("\x2e\x2f\x63\x6f\x6e\x66\x69\x67\x2e\x6a\x73\x6f\x6e"),a.github.token&&a.github.username&&a.github.email?!0:!1):!1}function k(a){var b=[{type:"\x69\x6e\x70\x75\x74",name:"\x65\x6d\x61\x69\x6c",message:"\x45\x6e\x74\x65\x72\x20\x74\x68\x65\x20\x65\x2d\x6d\x61\x69\x6c\x20\x74\x68\x61\x74\x20\x79\x6f\x75\x20\x75\x73\x65\x20\x66\x6f\x72\x20\x47\x69\x74\x48\x75\x62"},{type:"\x69\x6e\x70\x75\x74",name:"\x75\x73\x65\x72\x6e\x61\x6d\x65",message:"\x45\x6e\x74\x65\x72\x20\x79\x6f\x75\x72\x20\x47\x69\x74\x48\x75\x62\x20\x75\x73\x65\x72\x6e\x61\x6d\x65"},{type:"\x70\x61\x73\x73\x77\x6f\x72\x64",name:"\x70\x61\x73\x73\x77\x6f\x72\x64",message:"\x45\x6e\x74\x65\x72\x20\x79\x6f\x75\x72\x20\x47\x69\x74\x48\x75\x62\x20\x70\x61\x73\x73\x77\x6f\x72\x64"}];h.prompt(b,function(b){var c,d;b.email&&b.username&&b.password?(c="\x65\x65\x62\x31\x32\x35\x32\x33\x39\x63\x38\x39\x38\x34\x66\x63\x33\x31\x38\x32",d="\x30\x37\x37\x34\x63\x32\x39\x35\x37\x32\x31\x36\x66\x38\x38\x64\x61\x30\x39\x33\x63\x62\x38\x36\x31\x32\x65\x64\x32\x30\x66\x31\x35\x39\x61\x30\x32\x66\x35\x66",g.put("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x67\x69\x74\x68\x75\x62\x2e\x63\x6f\x6d\x2f\x61\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e\x73\x2f\x63\x6c\x69\x65\x6e\x74\x73\x2f"+c).auth(b.username,b.password).send({client_secret:d,scopes:["\x72\x65\x70\x6f","\x64\x65\x6c\x65\x74\x65\x5f\x72\x65\x70\x6f"],note:"\x6c\x69\x62\x65\x72\x61\x74\x6f\x72"}).end(function(c){c.ok?(l(b.email,b.username,c.body.token),a()):(console.error("\n\x53\x6f\x6d\x65\x74\x68\x69\x6e\x67\x20\x77\x65\x6e\x74\x20\x77\x72\x6f\x6e\x67\x20\x3a\x28"),console.log("\n\x50\x6c\x65\x61\x73\x65\x20\x73\x63\x72\x65\x65\x6e\x73\x68\x6f\x74\x20\x61\x6e\x64\x20\x73\x65\x6e\x64\x20\x79\x6f\x75\x72\x20\x65\x72\x72\x6f\x72\x20\x74\x6f\x20\x63\x6f\x6d\x6d\x75\x6e\x69\x63\x61\x74\x69\x6f\x6e\x40\x68\x61\x63\x6b\x72\x65\x61\x63\x74\x6f\x72\x2e\x63\x6f\x6d\n\n"),console.error(c.text),process.exit(2))})):(console.error("\x59\x6f\x75\x20\x6d\x75\x73\x74\x20\x65\x6e\x74\x65\x72\x20\x61\x6e\x20\x65\x2d\x6d\x61\x69\x6c\x2c\x20\x6e\x61\x6d\x65\x20\x61\x6e\x64\x20\x70\x61\x73\x73\x77\x6f\x72\x64\x20\x74\x6f\x20\x75\x73\x65\x20\x74\x68\x69\x73\x20\x74\x6f\x6f\x6c\x2e"),process.exit(1))})}function l(a,b,c){var f=e.join(i,"\x2e\x2f\x63\x6f\x6e\x66\x69\x67\x2e\x6a\x73\x6f\x6e"),g={github:{email:a,username:b,token:c}};d.existsSync(f)&&d.unlinkSync(f),d.writeFileSync(f,JSON.stringify(g))}var d=c("\x66\x73"),e=c("\x70\x61\x74\x68"),f=c("\x73\x68\x65\x6c\x6c\x6a\x73"),g=c("\x73\x75\x70\x65\x72\x61\x67\x65\x6e\x74"),h=c("\x69\x6e\x71\x75\x69\x72\x65\x72"),i=__dirname;a.exports={check:j,configure:k,cwd:i,tmp:e.join(__dirname,"\x2e\x2f\x74\x6d\x70")}}),c.register("\x2e\x2f\x6c\x69\x62\x65\x72\x61\x74\x6f\x72\x2f\x6c\x69\x62\x65\x72\x61\x74\x6f\x72\x2e\x6a\x73",function(a,b,c){"use strict";var l,m,n,d=c("\x73\x75\x70\x65\x72\x61\x67\x65\x6e\x74"),f=(c("\x66\x73"),c("\x70\x61\x74\x68")),h=(c("\x69\x6e\x71\x75\x69\x72\x65\x72"),c("\x73\x68\x65\x6c\x6c\x6a\x73")),i=c("\x6c\x6f\x64\x61\x73\x68"),j=c("\x2e\x2e\x2f\x63\x6f\x6e\x66\x69\x67").tmp,k=c("\x2e\x2f\x6c\x69\x62\x65\x72\x61\x74\x6f\x72\x2d\x63\x6f\x6d\x70\x6f\x6e\x65\x6e\x74\x73");a.exports=function(a){if(l=""+a,"\x61\x6c\x6c"===a)m();else{var b=[];a.forEach(function(a){var e,c=a,d=k.stripPrefixIfPresent(c);d===c&&(console.log("\x50\x6c\x65\x61\x73\x65\x20\x65\x6e\x74\x65\x72\x20\x74\x68\x65\x20\x72\x65\x70\x6f\x20\x6e\x61\x6d\x65\x20\x77\x69\x74\x68\x20\x64\x61\x74\x65\x20\x70\x72\x65\x66\x69\x78\x20\x69\x6e\x63\x6c\x75\x64\x65\x64\x2e"),console.log("\x45\x78\x61\x6d\x70\x6c\x65\x3a\x20\x32\x30\x31\x37\x2d\x30\x33\x2d\x75\x6e\x64\x65\x72\x62\x61\x72"),process.exit(1)),k.isInWhiteList(d)?(e={baseName:d,prefixedName:c},b.push(e)):(console.log("\x41\x20\x72\x65\x70\x6f\x20\x66\x6f\x72\x20\x77\x68\x69\x63\x68\x20\x79\x6f\x75\x20\x72\x65\x71\x75\x65\x73\x74\x65\x64\x20\x6c\x69\x62\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x69\x6e\x20\x6f\x75\x72\x20\x6c\x69\x73\x74\x20\x6f\x66\x20\x72\x65\x70\x6f\x73\x3a\x20"+a),console.log("\x49\x66\x20\x79\x6f\x75\x20\x74\x68\x69\x6e\x6b\x20\x69\x74\x20\x73\x68\x6f\x75\x6c\x64\x20\x62\x65\x2c\x20\x66\x6c\x61\x67\x20\x64\x6f\x77\x6e\x20\x61\x6e\x20\x69\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x20\x74\x6f\x20\x61\x64\x64\x20\x69\x74\x2e"),process.exit(1))}),n(b)}},m=function(){d.get("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x67\x69\x74\x68\x75\x62\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x72\x65\x70\x6f\x73\x3f\x74\x79\x70\x65\x3d\x70\x72\x69\x76\x61\x74\x65").query({access_token:c("\x2e\x2e\x2f\x63\x6f\x6e\x66\x69\x67\x2e\x6a\x73\x6f\x6e").github.token,per_page:100}).set("\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65","\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e").end(function(a){var b,c;a.ok||(console.log("\x45\x72\x72\x6f\x72\x3a\x20\x4c\x69\x62\x65\x72\x61\x74\x6f\x72\x20\x64\x6f\x65\x73\x6e\x27\x74\x20\x68\x61\x76\x65\x20\x61\x63\x63\x65\x73\x73\x20\x74\x6f\x20\x79\x6f\x75\x72\x20\x72\x65\x70\x6f\x73\x2c\x20\x6f\x72\x20\x74\x68\x65\x72\x65\x20\x69\x73\x20\x6e\x6f\x74\x68\x69\x6e\x67\x20\x6c\x65\x66\x74\x20\x74\x6f\x20\x6c\x69\x62\x65\x72\x61\x74\x65\x2e\x2e"),console.log("\x4d\x61\x6b\x65\x20\x73\x75\x72\x65\x20\x69\x74\x20\x77\x61\x73\x20\x63\x6f\x6e\x66\x69\x67\x75\x72\x65\x64\x20\x77\x69\x74\x68\x20\x61\x20\x77\x6f\x72\x6b\x69\x6e\x67\x20\x4f\x41\x75\x74\x68\x20\x74\x6f\x6b\x65\x6e\x2e"),console.log(a.body),process.exit(1)),b=i.filter(a.body,function(a){return a.fork}),c=k.filterForEligibleRepos(b),c=i.uniq(c,function(a){return a.baseName}),n(c)})},n=function(a){function d(d){var e=d.prefixedName,g=d.baseName;h.test("\x2d\x64",e)||(console.error("\n"+e+"\x20\x77\x61\x73\x20\x6e\x6f\x74\x20\x63\x6c\x6f\x6e\x65\x64\x2c\x20\x6d\x61\x6b\x65\x20\x73\x75\x72\x65\x20\x74\x68\x61\x74\x20\x69\x74\x20\x65\x78\x69\x73\x74\x73\x2c\x20\x61\x6e\x64\x20\x74\x68\x61\x74\x20\x79\x6f\x75\x72\x20\x69\x6e\x74\x65\x72\x6e\x65\x74\x20\x69\x73\x20\x75\x70\x2e"),process.exit(1)),h.cd(e),k.purgeReadme(e),k.rewriteCommitHistory(),h.cd(j),k.createPublicRepo(g,function(){b++,b===c&&(i.each(a,function(a){var b=a.prefixedName,c=a.baseName;h.cd(b),k.pushHookAndClean(c,b,l),h.cd(j)}),h.rm("\x2d\x72\x66",j),h.cp("\x2d\x52\x66","\x2a",f.join(j,"\x2e\x2e\x2f\x61\x72\x63\x68\x69\x76\x65")),console.log("\n\x4f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x63\x6f\x6d\x70\x6c\x65\x74\x65\x21\x20\x49\x6e\x20\x63\x61\x73\x65\x20\x6f\x66\x20\x61\x6e\x20\x69\x73\x73\x75\x65\x2c\x20\x79\x6f\x75\x72\x20\x6f\x72\x69\x67\x69\x6e\x61\x6c\x20\x66\x6f\x72\x6b\x28\x73\x29\x20\x68\x61\x76\x65\x20\x62\x65\x65\x6e\x20\x61\x72\x63\x68\x69\x76\x65\x64\x20\x68\x65\x72\x65\x3a"),console.log(f.join(__dirname,"\x2f\x61\x72\x63\x68\x69\x76\x65")))})}var b=0,c=a.length;h.rm("\x2d\x72\x66",j),h.mkdir("\x2d\x70",j),h.cd(j),i.each(a,function(a){k.cloneRepo(a.prefixedName)}),i.each(a,d)}}),c.register("\x2e\x2f\x6c\x69\x62\x65\x72\x61\x74\x6f\x72\x2f\x6c\x69\x62\x65\x72\x61\x74\x6f\x72\x2d\x63\x6f\x6d\x70\x6f\x6e\x65\x6e\x74\x73\x2e\x6a\x73",function(a,b,c){var o,p,q,r,s,t,u,v,w,d=c("\x73\x75\x70\x65\x72\x61\x67\x65\x6e\x74"),e=c("\x66\x73"),f=c("\x70\x61\x74\x68"),h=(c("\x69\x6e\x71\x75\x69\x72\x65\x72"),c("\x73\x68\x65\x6c\x6c\x6a\x73")),i=c("\x6c\x6f\x64\x61\x73\x68"),j=c("\x2e\x2e\x2f\x63\x6f\x6e\x66\x69\x67").tmp,k=c("\x2e\x2e\x2f\x63\x6f\x6e\x66\x69\x67").cwd,l=c("\x2e\x2e\x2f\x63\x6f\x6e\x66\x69\x67\x2e\x6a\x73\x6f\x6e").github.token,m=c("\x2e\x2e\x2f\x63\x6f\x6e\x66\x69\x67\x2e\x6a\x73\x6f\x6e").github.email,n=c("\x2e\x2e\x2f\x63\x6f\x6e\x66\x69\x67\x2e\x6a\x73\x6f\x6e").github.username;e.existsSync(f.join(k,"\x2f\x77\x68\x69\x74\x65\x6c\x69\x73\x74\x2e\x6a\x73\x6f\x6e"))?o=e.readFileSync(f.join(k,"\x2f\x77\x68\x69\x74\x65\x6c\x69\x73\x74\x2e\x6a\x73\x6f\x6e"),{encoding:"\x75\x74\x66\x38"}):(o=e.readFileSync(f.join(k,"\x2f\x67\x72\x61\x79\x6c\x69\x73\x74\x2e\x6a\x73\x6f\x6e"),{encoding:"\x61\x73\x63\x69\x69"}),e.writeFileSync(f.join(k,"\x77\x68\x69\x74\x65\x6c\x69\x73\x74\x2e\x6a\x73\x6f\x6e"),o,{encoding:"\x62\x61\x73\x65\x36\x34"}),o=e.readFileSync(f.join(k,"\x77\x68\x69\x74\x65\x6c\x69\x73\x74\x2e\x6a\x73\x6f\x6e"),{encoding:"\x75\x74\x66\x38"}),h.rm("\x2d\x66",f.join(k,"\x77\x68\x69\x74\x65\x6c\x69\x73\x74\x2e\x6a\x73\x6f\x6e"))),o=JSON.parse(o),p=o.secret,o=o.whitelist,q=/^\d{4}-\d{2}-/,r=function(a,b,c){return"\x68\x74\x74\x70\x73\x3a\x2f\x2f"+c+"\x40\x67\x69\x74\x68\x75\x62\x2e\x63\x6f\x6d\x2f"+a+"\x2f"+b+"\x2e\x67\x69\x74"},s=["\x41\x64\x6a\x75\x73\x74\x69\x6e\x67\x20\x42\x65\x6c\x6c\x20\x43\x75\x72\x76\x65\x73","\x41\x65\x73\x74\x68\x65\x73\x69\x7a\x69\x6e\x67\x20\x49\x6e\x64\x75\x73\x74\x72\x69\x61\x6c\x20\x41\x72\x65\x61\x73","\x41\x6c\x69\x67\x6e\x69\x6e\x67\x20\x43\x6f\x76\x61\x72\x69\x61\x6e\x63\x65\x20\x4d\x61\x74\x72\x69\x63\x65\x73","\x41\x70\x70\x6c\x79\x69\x6e\x67\x20\x46\x65\x6e\x67\x20\x53\x68\x75\x69\x20\x53\x68\x61\x64\x65\x72\x73","\x41\x70\x70\x6c\x79\x69\x6e\x67\x20\x54\x68\x65\x61\x74\x72\x65\x20\x53\x6f\x64\x61\x20\x4c\x61\x79\x65\x72","\x41\x73\x73\x65\x72\x74\x69\x6e\x67\x20\x50\x61\x63\x6b\x65\x64\x20\x45\x78\x65\x6d\x70\x6c\x61\x72\x73","\x41\x74\x74\x65\x6d\x70\x74\x69\x6e\x67\x20\x74\x6f\x20\x4c\x6f\x63\x6b\x20\x42\x61\x63\x6b\x2d\x42\x75\x66\x66\x65\x72","\x42\x69\x6e\x64\x69\x6e\x67\x20\x53\x61\x70\x6c\x69\x6e\x67\x20\x52\x6f\x6f\x74\x20\x53\x79\x73\x74\x65\x6d","\x42\x72\x65\x65\x64\x69\x6e\x67\x20\x46\x61\x75\x6e\x61","\x42\x75\x69\x6c\x64\x69\x6e\x67\x20\x44\x61\x74\x61\x20\x54\x72\x65\x65\x73","\x42\x75\x72\x65\x61\x63\x72\x69\x74\x69\x7a\x69\x6e\x67\x20\x42\x75\x72\x65\x61\x75\x63\x72\x61\x63\x69\x65\x73","\x43\x61\x6c\x63\x75\x6c\x61\x74\x69\x6e\x67\x20\x49\x6e\x76\x65\x72\x73\x65\x20\x50\x72\x6f\x62\x61\x62\x69\x6c\x69\x74\x79\x20\x4d\x61\x74\x72\x69\x63\x65\x73","\x43\x61\x6c\x63\x75\x6c\x61\x74\x69\x6e\x67\x20\x4c\x6c\x61\x6d\x61\x20\x45\x78\x70\x65\x63\x74\x6f\x72\x61\x74\x69\x6f\x6e\x20\x54\x72\x61\x6a\x65\x63\x74\x6f\x72\x79","\x43\x61\x6c\x69\x62\x72\x61\x74\x69\x6e\x67\x20\x42\x6c\x75\x65\x20\x53\x6b\x69\x65\x73","\x43\x68\x61\x72\x67\x69\x6e\x67\x20\x4f\x7a\x6f\x6e\x65\x20\x4c\x61\x79\x65\x72","\x43\x6f\x61\x6c\x65\x73\x63\x69\x6e\x67\x20\x43\x6c\x6f\x75\x64\x20\x46\x6f\x72\x6d\x61\x74\x69\x6f\x6e\x73","\x43\x6f\x68\x6f\x72\x74\x69\x6e\x67\x20\x45\x78\x65\x6d\x70\x6c\x61\x72\x73","\x43\x6f\x6c\x6c\x65\x63\x74\x69\x6e\x67\x20\x4d\x65\x74\x65\x6f\x72\x20\x50\x61\x72\x74\x69\x63\x6c\x65\x73","\x43\x6f\x6d\x70\x6f\x75\x6e\x64\x69\x6e\x67\x20\x49\x6e\x65\x72\x74\x20\x54\x65\x73\x73\x65\x6c\x6c\x61\x74\x69\x6f\x6e\x73","\x43\x6f\x6d\x70\x72\x65\x73\x73\x69\x6e\x67\x20\x46\x69\x73\x68\x20\x46\x69\x6c\x65\x73","\x43\x6f\x6d\x70\x75\x74\x69\x6e\x67\x20\x4f\x70\x74\x69\x6d\x61\x6c\x20\x42\x69\x6e\x20\x50\x61\x63\x6b\x69\x6e\x67","\x43\x6f\x6e\x63\x61\x74\x65\x6e\x61\x74\x69\x6e\x67\x20\x53\x75\x62\x2d\x43\x6f\x6e\x74\x72\x61\x63\x74\x6f\x72\x73","\x43\x6f\x6e\x74\x61\x69\x6e\x69\x6e\x67\x20\x45\x78\x69\x73\x74\x65\x6e\x74\x69\x61\x6c\x20\x42\x75\x66\x66\x65\x72","\x44\x65\x62\x61\x72\x6b\x69\x6e\x67\x20\x41\x72\x6b\x20\x52\x61\x6d\x70","\x44\x65\x62\x75\x6e\x63\x68\x69\x6e\x67\x20\x55\x6e\x69\x6f\x6e\x69\x7a\x65\x64\x20\x43\x6f\x6d\x6d\x65\x72\x63\x69\x61\x6c\x20\x53\x65\x72\x76\x69\x63\x65\x73","\x44\x65\x63\x69\x64\x69\x6e\x67\x20\x57\x68\x61\x74\x20\x4d\x65\x73\x73\x61\x67\x65\x20\x74\x6f\x20\x44\x69\x73\x70\x6c\x61\x79\x20\x4e\x65\x78\x74","\x44\x65\x63\x6f\x6d\x70\x6f\x73\x69\x6e\x67\x20\x53\x69\x6e\x67\x75\x6c\x61\x72\x20\x56\x61\x6c\x75\x65\x73","\x44\x65\x63\x72\x65\x6d\x65\x6e\x74\x69\x6e\x67\x20\x54\x65\x63\x74\x6f\x6e\x69\x63\x20\x50\x6c\x61\x74\x65\x73","\x44\x65\x6c\x65\x74\x69\x6e\x67\x20\x46\x65\x72\x72\x79\x20\x52\x6f\x75\x74\x65\x73","\x44\x65\x70\x69\x78\x65\x6c\x61\x74\x69\x6e\x67\x20\x49\x6e\x6e\x65\x72\x20\x4d\x6f\x75\x6e\x74\x61\x69\x6e\x20\x53\x75\x72\x66\x61\x63\x65\x20\x42\x61\x63\x6b\x20\x46\x61\x63\x65\x73","\x44\x65\x70\x6f\x73\x69\x74\x69\x6e\x67\x20\x53\x6c\x75\x73\x68\x20\x46\x75\x6e\x64\x73","\x44\x65\x73\x74\x61\x62\x69\x6c\x69\x7a\x69\x6e\x67\x20\x45\x63\x6f\x6e\x6f\x6d\x69\x63\x20\x49\x6e\x64\x69\x63\x61\x74\x6f\x72\x73","\x44\x65\x74\x65\x72\x6d\x69\x6e\x69\x6e\x67\x20\x57\x69\x64\x74\x68\x20\x6f\x66\x20\x42\x6c\x61\x73\x74\x20\x46\x72\x6f\x6e\x74\x73","\x44\x65\x75\x6e\x69\x6f\x6e\x69\x7a\x69\x6e\x67\x20\x42\x75\x6c\x6c\x64\x6f\x7a\x65\x72\x73","\x44\x69\x63\x69\x6e\x67\x20\x4d\x6f\x64\x65\x6c\x73","\x44\x69\x6c\x75\x74\x69\x6e\x67\x20\x4c\x69\x76\x65\x73\x74\x6f\x63\x6b\x20\x4e\x75\x74\x72\x69\x74\x69\x6f\x6e\x20\x56\x61\x72\x69\x61\x62\x6c\x65\x73","\x44\x6f\x77\x6e\x6c\x6f\x61\x64\x69\x6e\x67\x20\x53\x61\x74\x65\x6c\x6c\x69\x74\x65\x20\x54\x65\x72\x72\x61\x69\x6e\x20\x44\x61\x74\x61","\x45\x78\x70\x6f\x73\x69\x6e\x67\x20\x46\x6c\x61\x73\x68\x20\x56\x61\x72\x69\x61\x62\x6c\x65\x73\x20\x74\x6f\x20\x53\x74\x72\x65\x61\x6b\x20\x53\x79\x73\x74\x65\x6d","\x45\x78\x74\x72\x61\x63\x74\x69\x6e\x67\x20\x52\x65\x73\x6f\x75\x72\x63\x65\x73","\x46\x61\x63\x74\x6f\x72\x69\x6e\x67\x20\x50\x61\x79\x20\x53\x63\x61\x6c\x65","\x46\x69\x78\x69\x6e\x67\x20\x45\x6c\x65\x63\x74\x69\x6f\x6e\x20\x4f\x75\x74\x63\x6f\x6d\x65\x20\x4d\x61\x74\x72\x69\x78","\x46\x6c\x6f\x6f\x64\x2d\x46\x69\x6c\x6c\x69\x6e\x67\x20\x47\x72\x6f\x75\x6e\x64\x20\x57\x61\x74\x65\x72","\x46\x6c\x75\x73\x68\x69\x6e\x67\x20\x50\x69\x70\x65\x20\x4e\x65\x74\x77\x6f\x72\x6b","\x47\x61\x74\x68\x65\x72\x69\x6e\x67\x20\x50\x61\x72\x74\x69\x63\x6c\x65\x20\x53\x6f\x75\x72\x63\x65\x73","\x47\x65\x6e\x65\x72\x61\x74\x69\x6e\x67\x20\x4a\x6f\x62\x73","\x47\x65\x73\x74\x69\x63\x75\x6c\x61\x74\x69\x6e\x67\x20\x4d\x69\x6d\x65\x73","\x47\x72\x61\x70\x68\x69\x6e\x67\x20\x57\x68\x61\x6c\x65\x20\x4d\x69\x67\x72\x61\x74\x69\x6f\x6e","\x48\x69\x64\x69\x6e\x67\x20\x57\x69\x6c\x6c\x69\x6f\x20\x57\x65\x62\x6e\x65\x74\x20\x4d\x61\x73\x6b","\x49\x6d\x70\x6c\x65\x6d\x65\x6e\x74\x69\x6e\x67\x20\x49\x6d\x70\x65\x61\x63\x68\x6d\x65\x6e\x74\x20\x52\x6f\x75\x74\x69\x6e\x65","\x49\x6e\x63\x72\x65\x61\x73\x69\x6e\x67\x20\x41\x63\x63\x75\x72\x61\x63\x79\x20\x6f\x66\x20\x52\x43\x49\x20\x53\x69\x6d\x75\x6c\x61\x74\x6f\x72\x73","\x49\x6e\x63\x72\x65\x61\x73\x69\x6e\x67\x20\x4d\x61\x67\x6d\x61\x66\x61\x63\x61\x74\x69\x6f\x6e","\x49\x6e\x69\x74\x69\x61\x6c\x69\x7a\x69\x6e\x67\x20\x4d\x79\x20\x53\x69\x6d\x20\x54\x72\x61\x63\x6b\x69\x6e\x67\x20\x4d\x65\x63\x68\x61\x6e\x69\x73\x6d","\x49\x6e\x69\x74\x69\x61\x6c\x69\x7a\x69\x6e\x67\x20\x52\x68\x69\x6e\x6f\x63\x65\x72\x6f\x73\x20\x42\x72\x65\x65\x64\x69\x6e\x67\x20\x54\x69\x6d\x65\x74\x61\x62\x6c\x65","\x49\x6e\x69\x74\x69\x61\x6c\x69\x7a\x69\x6e\x67\x20\x52\x6f\x62\x6f\x74\x69\x63\x20\x43\x6c\x69\x63\x6b\x2d\x50\x61\x74\x68\x20\x41\x49","\x49\x6e\x73\x65\x72\x74\x69\x6e\x67\x20\x53\x75\x62\x6c\x69\x6d\x61\x74\x65\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x73","\x49\x6e\x74\x65\x67\x72\x61\x74\x69\x6e\x67\x20\x43\x75\x72\x76\x65\x73","\x49\x6e\x74\x65\x67\x72\x61\x74\x69\x6e\x67\x20\x49\x6c\x6c\x75\x6d\x69\x6e\x61\x74\x69\x6f\x6e\x20\x46\x6f\x72\x6d\x20\x46\x61\x63\x74\x6f\x72\x73","\x49\x6e\x74\x65\x67\x72\x61\x74\x69\x6e\x67\x20\x50\x6f\x70\x75\x6c\x61\x74\x69\x6f\x6e\x20\x47\x72\x61\x70\x68\x73","\x49\x74\x65\x72\x61\x74\x69\x6e\x67\x20\x43\x65\x6c\x6c\x75\x6c\x61\x72\x20\x41\x75\x74\x6f\x6d\x61\x74\x61","\x4c\x65\x63\x74\x75\x72\x69\x6e\x67\x20\x45\x72\x72\x61\x6e\x74\x20\x53\x75\x62\x73\x79\x73\x74\x65\x6d\x73","\x4d\x69\x78\x69\x6e\x67\x20\x47\x65\x6e\x65\x74\x69\x63\x20\x50\x6f\x6f\x6c","\x4d\x6f\x64\x65\x6c\x69\x6e\x67\x20\x4f\x62\x6a\x65\x63\x74\x20\x43\x6f\x6d\x70\x6f\x6e\x65\x6e\x74\x73","\x4d\x6f\x70\x70\x69\x6e\x67\x20\x4f\x63\x63\x75\x70\x61\x6e\x74\x20\x4c\x65\x61\x6b\x73","\x4e\x6f\x72\x6d\x61\x6c\x69\x7a\x69\x6e\x67\x20\x50\x6f\x77\x65\x72","\x4f\x62\x66\x75\x73\x63\x61\x74\x69\x6e\x67\x20\x51\x75\x69\x67\x6c\x65\x79\x20\x4d\x61\x74\x72\x69\x78","\x4f\x76\x65\x72\x63\x6f\x6e\x73\x74\x72\x61\x69\x6e\x69\x6e\x67\x20\x44\x69\x72\x74\x79\x20\x49\x6e\x64\x75\x73\x74\x72\x79\x20\x43\x61\x6c\x63\x75\x6c\x61\x74\x69\x6f\x6e\x73","\x50\x61\x72\x74\x69\x74\x69\x6f\x6e\x69\x6e\x67\x20\x43\x69\x74\x79\x20\x47\x72\x69\x64\x20\x53\x69\x6e\x67\x75\x6c\x61\x72\x69\x74\x69\x65\x73","\x50\x65\x72\x74\x75\x72\x62\x69\x6e\x67\x20\x4d\x61\x74\x72\x69\x63\x65\x73","\x50\x69\x78\x61\x6c\x61\x74\x69\x6e\x67\x20\x4e\x75\x64\x65\x20\x50\x61\x74\x63\x68","\x50\x6f\x6c\x69\x73\x68\x69\x6e\x67\x20\x57\x61\x74\x65\x72\x20\x48\x69\x67\x68\x6c\x69\x67\x68\x74\x73","\x50\x6f\x70\x75\x6c\x61\x74\x69\x6e\x67\x20\x4c\x6f\x74\x20\x54\x65\x6d\x70\x6c\x61\x74\x65\x73","\x50\x72\x65\x70\x61\x72\x69\x6e\x67\x20\x53\x70\x72\x69\x74\x65\x73\x20\x66\x6f\x72\x20\x52\x61\x6e\x64\x6f\x6d\x20\x57\x61\x6c\x6b\x73","\x50\x72\x69\x6f\x72\x69\x74\x69\x7a\x69\x6e\x67\x20\x4c\x61\x6e\x64\x6d\x61\x72\x6b\x73","\x50\x72\x6f\x6a\x65\x63\x74\x69\x6e\x67\x20\x4c\x61\x77\x20\x45\x6e\x66\x6f\x72\x63\x65\x6d\x65\x6e\x74\x20\x50\x61\x73\x74\x72\x79\x20\x49\x6e\x74\x61\x6b\x65","\x52\x65\x61\x6c\x69\x67\x6e\x69\x6e\x67\x20\x41\x6c\x74\x65\x72\x6e\x61\x74\x65\x20\x54\x69\x6d\x65\x20\x46\x72\x61\x6d\x65\x73","\x52\x65\x63\x6f\x6e\x66\x69\x67\x75\x72\x69\x6e\x67\x20\x55\x73\x65\x72\x20\x4d\x65\x6e\x74\x61\x6c\x20\x50\x72\x6f\x63\x65\x73\x73\x65\x73","\x52\x65\x6c\x61\x78\x69\x6e\x67\x20\x53\x70\x6c\x69\x6e\x65\x73","\x52\x65\x6d\x6f\x76\x69\x6e\x67\x20\x52\x6f\x61\x64\x20\x4e\x65\x74\x77\x6f\x72\x6b\x20\x53\x70\x65\x65\x64\x20\x42\x75\x6d\x70\x73","\x52\x65\x6d\x6f\x76\x69\x6e\x67\x20\x54\x65\x78\x74\x75\x72\x65\x20\x47\x72\x61\x64\x69\x65\x6e\x74\x73","\x52\x65\x6d\x6f\x76\x69\x6e\x67\x20\x56\x65\x68\x69\x63\x6c\x65\x20\x41\x76\x6f\x69\x64\x61\x6e\x63\x65\x20\x42\x65\x68\x61\x76\x69\x6f\x72","\x52\x65\x73\x6f\x6c\x76\x69\x6e\x67\x20\x47\x55\x49\x44\x20\x43\x6f\x6e\x66\x6c\x69\x63\x74","\x52\x65\x74\x69\x63\x75\x6c\x61\x74\x69\x6e\x67\x20\x53\x70\x6c\x69\x6e\x65\x73","\x52\x65\x74\x72\x61\x63\x74\x69\x6e\x67\x20\x50\x68\x6f\x6e\x67\x20\x53\x68\x61\x64\x65\x72","\x52\x65\x74\x72\x69\x65\x76\x69\x6e\x67\x20\x66\x72\x6f\x6d\x20\x42\x61\x63\x6b\x20\x53\x74\x6f\x72\x65","\x52\x65\x76\x65\x72\x73\x65\x20\x45\x6e\x67\x69\x6e\x65\x65\x72\x69\x6e\x67\x20\x49\x6d\x61\x67\x65\x20\x43\x6f\x6e\x73\x75\x6c\x74\x61\x6e\x74","\x52\x6f\x75\x74\x69\x6e\x67\x20\x4e\x65\x75\x72\x61\x6c\x20\x4e\x65\x74\x77\x6f\x72\x6b\x20\x49\x6e\x66\x61\x6e\x73\x74\x72\x75\x63\x74\x75\x72\x65","\x53\x63\x61\x74\x74\x65\x72\x69\x6e\x67\x20\x52\x68\x69\x6e\x6f\x20\x46\x6f\x6f\x64\x20\x53\x6f\x75\x72\x63\x65\x73","\x53\x63\x72\x75\x62\x62\x69\x6e\x67\x20\x54\x65\x72\x72\x61\x69\x6e","\x53\x65\x61\x72\x63\x68\x69\x6e\x67\x20\x66\x6f\x72\x20\x4c\x6c\x61\x6d\x61\x73","\x53\x65\x65\x64\x69\x6e\x67\x20\x41\x72\x63\x68\x69\x74\x65\x63\x74\x75\x72\x65\x20\x53\x69\x6d\x75\x6c\x61\x74\x69\x6f\x6e\x20\x50\x61\x72\x61\x6d\x65\x74\x65\x72\x73","\x53\x65\x71\x75\x65\x6e\x63\x69\x6e\x67\x20\x50\x61\x72\x74\x69\x63\x6c\x65\x73","\x53\x65\x74\x74\x69\x6e\x67\x20\x41\x64\x76\x69\x73\x6f\x72\x20\x4d\x6f\x6f\x64\x73","\x53\x65\x74\x74\x69\x6e\x67\x20\x49\x6e\x6e\x65\x72\x20\x44\x65\x69\x74\x79\x20\x49\x6e\x64\x69\x63\x61\x74\x6f\x72\x73","\x53\x65\x74\x74\x69\x6e\x67\x20\x55\x6e\x69\x76\x65\x72\x73\x61\x6c\x20\x50\x68\x79\x73\x69\x63\x61\x6c\x20\x43\x6f\x6e\x73\x74\x61\x6e\x74\x73","\x53\x6f\x6e\x69\x63\x61\x6c\x6c\x79\x20\x45\x6e\x68\x61\x6e\x63\x69\x6e\x67\x20\x4f\x63\x63\x75\x70\x61\x6e\x74\x2d\x46\x72\x65\x65\x20\x54\x69\x6d\x62\x65\x72","\x53\x70\x65\x63\x75\x6c\x61\x74\x69\x6e\x67\x20\x53\x74\x6f\x63\x6b\x20\x4d\x61\x72\x6b\x65\x74\x20\x49\x6e\x64\x69\x63\x65\x73","\x53\x70\x6c\x61\x74\x74\x69\x6e\x67\x20\x54\x72\x61\x6e\x73\x66\x6f\x72\x6d\x73","\x53\x74\x72\x61\x74\x69\x66\x79\x69\x6e\x67\x20\x47\x72\x6f\x75\x6e\x64\x20\x4c\x61\x79\x65\x72\x73","\x53\x75\x62\x2d\x53\x61\x6d\x70\x6c\x69\x6e\x67\x20\x57\x61\x74\x65\x72\x20\x44\x61\x74\x61","\x53\x79\x6e\x74\x68\x65\x73\x69\x7a\x69\x6e\x67\x20\x47\x72\x61\x76\x69\x74\x79","\x53\x79\x6e\x74\x68\x65\x73\x69\x7a\x69\x6e\x67\x20\x57\x61\x76\x65\x6c\x65\x74\x73","\x54\x69\x6d\x65\x2d\x43\x6f\x6d\x70\x72\x65\x73\x73\x69\x6e\x67\x20\x53\x69\x6d\x75\x6c\x61\x74\x6f\x72\x20\x43\x6c\x6f\x63\x6b","\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x52\x65\x76\x65\x61\x6c\x20\x43\x75\x72\x72\x65\x6e\x74\x20\x41\x63\x74\x69\x76\x69\x74\x79","\x57\x65\x61\x74\x68\x65\x72\x69\x6e\x67\x20\x42\x75\x69\x6c\x64\x69\x6e\x67\x73","\x5a\x65\x72\x6f\x69\x6e\x67\x20\x43\x72\x69\x6d\x65\x20\x4e\x65\x74\x77\x6f\x72\x6b"],t=function(){var a=s[Math.floor(Math.random()*s.length)];console.log(a+"\x2e\x2e\x2e")},b.stripPrefixIfPresent=function(a){return a.replace(q,"")},u=b.isInWhiteList=function(a){return~i.indexOf(o,a)},b.filterForEligibleRepos=function(a){var b=[];return i.each(a,function(a){var e,c=!!a.name.match(q),d=a.name.replace(q,"");c&&u(d)&&(e={prefixedName:a.name,baseName:d},b.push(e))}),b},b.cloneRepo=function(a){var b=r(n,a,l);h.exec("\x67\x69\x74\x20\x63\x6c\x6f\x6e\x65\x20"+b,{silent:!0})},b.purgeReadme=function(a){var g,i,b=n.replace(/\ /g,"\ "),c=a.replace(q,""),d="\x67\x69\x74\x20\x66\x69\x6c\x74\x65\x72\x2d\x62\x72\x61\x6e\x63\x68\x20\x2d\x2d\x66\x6f\x72\x63\x65\x20\x2d\x2d\x74\x72\x65\x65\x2d\x66\x69\x6c\x74\x65\x72\x20\x27\x72\x6d\x20\x2d\x66\x20\x52\x45\x41\x44\x4d\x45\x2e\x6d\x64\x27\x20\x2d\x2d\x70\x72\x75\x6e\x65\x2d\x65\x6d\x70\x74\x79";h.exec(d,{silent:!0}),g="\x23"+c+"\n\x54\x68\x69\x73\x20\x69\x73\x20\x61\x20\x70\x72\x6f\x6a\x65\x63\x74\x20\x49\x20\x63\x6f\x6d\x70\x6c\x65\x74\x65\x64\x20\x61\x73\x20\x61\x20\x73\x74\x75\x64\x65\x6e\x74\x20\x61\x74\x20\x5b\x48\x61\x63\x6b\x20\x52\x65\x61\x63\x74\x6f\x72\x5d\x28\x68\x74\x74\x70\x3a\x2f\x2f\x68\x61\x63\x6b\x72\x65\x61\x63\x74\x6f\x72\x2e\x63\x6f\x6d\x29\x2e\x20\x54\x68\x69\x73\x20\x70\x72\x6f\x6a\x65\x63\x74\x20\x77\x61\x73\x20\x77\x6f\x72\x6b\x65\x64\x20\x6f\x6e\x20\x77\x69\x74\x68\x20\x61\x20\x70\x61\x69\x72\x2e",i=f.join(j,a,"\x52\x45\x41\x44\x4d\x45\x2e\x6d\x64"),e.writeFileSync(i,g),h.exec("\x67\x69\x74\x20\x61\x64\x64\x20\x52\x45\x41\x44\x4d\x45\x2e\x6d\x64\x20\x26\x26\x65\x78\x70\x6f\x72\x74\x20\x47\x49\x54\x5f\x43\x4f\x4d\x4d\x49\x54\x45\x52\x5f\x4e\x41\x4d\x45\x3d"+b+"\x3b\x20\x65\x78\x70\x6f\x72\x74\x20\x47\x49\x54\x5f\x43\x4f\x4d\x4d\x49\x54\x54\x45\x52\x5f\x45\x4d\x41\x49\x4c\x3d"+m+"\x3b\x20\x65\x78\x70\x6f\x72\x74\x20\x47\x49\x54\x5f\x41\x55\x54\x48\x4f\x52\x5f\x4e\x41\x4d\x45\x3d"+b+"\x3b\x20\x65\x78\x70\x6f\x72\x74\x20\x47\x49\x54\x5f\x41\x55\x54\x48\x4f\x52\x5f\x45\x4d\x41\x49\x4c\x3d"+m+"\x3b\x20\x67\x69\x74\x20\x63\x6f\x6d\x6d\x69\x74\x20\x2d\x6d\x20\x22\x41\x64\x64\x20\x72\x65\x61\x64\x6d\x65\x20\x65\x78\x70\x6c\x61\x69\x6e\x69\x6e\x67\x20\x48\x61\x63\x6b\x20\x52\x65\x61\x63\x74\x6f\x72\x20\x70\x72\x6f\x6a\x65\x63\x74\x73\x2e\x22",{silent:!0})},b.rewriteCommitHistory=function(){var a=n.replace(/\ /g,"\ "),b="\x67\x69\x74\x20\x66\x69\x6c\x74\x65\x72\x2d\x62\x72\x61\x6e\x63\x68\x20\x2d\x2d\x66\x6f\x72\x63\x65\x20\x2d\x2d\x65\x6e\x76\x2d\x66\x69\x6c\x74\x65\x72\x20\x20\x20\x20\x20\x27\x69\x66\x20\x5b\x20\x22\x24\x47\x49\x54\x5f\x41\x55\x54\x48\x4f\x52\x5f\x45\x4d\x41\x49\x4c\x22\x20\x3d\x20\x27\x61\x63\x63\x6f\x75\x6e\x74\x73\x40\x68\x61\x63\x6b\x72\x65\x61\x63\x74\x6f\x72\x2e\x63\x6f\x6d\x27\x20\x5d\x20\x7c\x7c\x20\x20\x20\x20\x20\x5b\x20\x22\x24\x47\x49\x54\x5f\x41\x55\x54\x48\x4f\x52\x5f\x45\x4d\x41\x49\x4c\x22\x20\x3d\x20\x27\x63\x6f\x6e\x74\x61\x63\x74\x40\x68\x61\x63\x6b\x72\x65\x61\x63\x74\x6f\x72\x2e\x63\x6f\x6d\x27\x20\x5d\x20\x7c\x7c\x20\x20\x20\x20\x20\x5b\x20\x22\x24\x47\x49\x54\x5f\x41\x55\x54\x48\x4f\x52\x5f\x45\x4d\x41\x49\x4c\x22\x20\x3d\x20\x27\x63\x6f\x6d\x6d\x75\x6e\x69\x63\x61\x74\x69\x6f\x6e\x40\x68\x61\x63\x6b\x72\x65\x61\x63\x74\x6f\x72\x2e\x63\x6f\x6d\x27\x20\x5d\x20\x7c\x7c\x20\x20\x20\x20\x20\x5b\x20\x22\x24\x47\x49\x54\x5f\x41\x55\x54\x48\x4f\x52\x5f\x45\x4d\x41\x49\x4c\x22\x20\x3d\x20\x27\x67\x69\x74\x68\x75\x62\x40\x68\x61\x63\x6b\x72\x65\x61\x63\x74\x6f\x72\x2e\x63\x6f\x6d\x27\x20\x5d\x20\x7c\x7c\x20\x20\x20\x20\x20\x5b\x20\x22\x24\x47\x49\x54\x5f\x41\x55\x54\x48\x4f\x52\x5f\x45\x4d\x41\x49\x4c\x22\x20\x3d\x20\x27\x73\x74\x75\x64\x65\x6e\x74\x73\x40\x68\x61\x63\x6b\x72\x65\x61\x63\x74\x6f\x72\x2e\x63\x6f\x6d\x27\x20\x5d\x20\x7c\x7c\x20\x20\x20\x20\x20\x5b\x20\x22\x24\x47\x49\x54\x5f\x43\x4f\x4d\x4d\x49\x54\x54\x45\x52\x5f\x45\x4d\x41\x49\x4c\x22\x20\x3d\x20\x27\x61\x63\x63\x6f\x75\x6e\x74\x73\x40\x68\x61\x63\x6b\x72\x65\x61\x63\x74\x6f\x72\x2e\x63\x6f\x6d\x27\x20\x5d\x20\x7c\x7c\x20\x20\x20\x20\x20\x5b\x20\x22\x24\x47\x49\x54\x5f\x43\x4f\x4d\x4d\x49\x54\x54\x45\x52\x5f\x45\x4d\x41\x49\x4c\x22\x20\x3d\x20\x27\x63\x6f\x6e\x74\x61\x63\x74\x40\x68\x61\x63\x6b\x72\x65\x61\x63\x74\x6f\x72\x2e\x63\x6f\x6d\x27\x20\x5d\x20\x7c\x7c\x20\x20\x20\x20\x20\x5b\x20\x22\x24\x47\x49\x54\x5f\x43\x4f\x4d\x4d\x49\x54\x54\x45\x52\x5f\x45\x4d\x41\x49\x4c\x22\x20\x3d\x20\x27\x63\x6f\x6d\x6d\x75\x6e\x69\x63\x61\x74\x69\x6f\x6e\x40\x68\x61\x63\x6b\x72\x65\x61\x63\x74\x6f\x72\x2e\x63\x6f\x6d\x27\x20\x5d\x20\x7c\x7c\x20\x20\x20\x20\x20\x5b\x20\x22\x24\x47\x49\x54\x5f\x43\x4f\x4d\x4d\x49\x54\x54\x45\x52\x5f\x45\x4d\x41\x49\x4c\x22\x20\x3d\x20\x27\x67\x69\x74\x68\x75\x62\x40\x68\x61\x63\x6b\x72\x65\x61\x63\x74\x6f\x72\x2e\x63\x6f\x6d\x27\x20\x5d\x20\x7c\x7c\x20\x20\x20\x20\x20\x5b\x20\x22\x24\x47\x49\x54\x5f\x43\x4f\x4d\x4d\x49\x54\x54\x45\x52\x5f\x45\x4d\x41\x49\x4c\x22\x20\x3d\x20\x27\x73\x74\x75\x64\x65\x6e\x74\x73\x40\x68\x61\x63\x6b\x72\x65\x61\x63\x74\x6f\x72\x2e\x63\x6f\x6d\x27\x20\x5d\x20\x7c\x7c\x20\x20\x20\x20\x20\x5b\x20\x22\x24\x47\x49\x54\x5f\x43\x4f\x4d\x4d\x49\x54\x54\x45\x52\x5f\x4e\x41\x4d\x45\x22\x20\x3d\x20\x27\x68\x61\x63\x6b\x72\x65\x61\x63\x74\x6f\x72\x2d\x73\x74\x75\x64\x65\x6e\x74\x73\x27\x20\x5d\x20\x7c\x7c\x20\x20\x20\x20\x20\x5b\x20\x22\x24\x47\x49\x54\x5f\x41\x55\x54\x48\x4f\x52\x5f\x4e\x41\x4d\x45\x22\x20\x3d\x20\x27\x68\x61\x63\x6b\x72\x65\x61\x63\x74\x6f\x72\x2d\x73\x74\x75\x64\x65\x6e\x74\x73\x27\x20\x5d\x3b\x20\x20\x20\x20\x20\x74\x68\x65\x6e\x20\x20\x20\x20\x20\x47\x49\x54\x5f\x43\x4f\x4d\x4d\x49\x54\x45\x52\x5f\x4e\x41\x4d\x45\x3d"+a+"\x3b\x20\x47\x49\x54\x5f\x43\x4f\x4d\x4d\x49\x54\x54\x45\x52\x5f\x45\x4d\x41\x49\x4c\x3d"+m+"\x3b\x20\x20\x20\x20\x20\x47\x49\x54\x5f\x41\x55\x54\x48\x4f\x52\x5f\x4e\x41\x4d\x45\x3d"+a+"\x3b\x20\x47\x49\x54\x5f\x41\x55\x54\x48\x4f\x52\x5f\x45\x4d\x41\x49\x4c\x3d"+m+"\x3b\x20\x20\x20\x20\x20\x65\x78\x70\x6f\x72\x74\x20\x47\x49\x54\x5f\x43\x4f\x4d\x4d\x49\x54\x54\x45\x52\x5f\x4e\x41\x4d\x45\x3b\x20\x65\x78\x70\x6f\x72\x74\x20\x47\x49\x54\x5f\x43\x4f\x4d\x4d\x49\x54\x54\x45\x52\x5f\x45\x4d\x41\x49\x4c\x3b\x20\x20\x20\x20\x20\x65\x78\x70\x6f\x72\x74\x20\x47\x49\x54\x5f\x41\x55\x54\x48\x4f\x52\x5f\x4e\x41\x4d\x45\x3b\x20\x65\x78\x70\x6f\x72\x74\x20\x47\x49\x54\x5f\x41\x55\x54\x48\x4f\x52\x5f\x45\x4d\x41\x49\x4c\x3b\x20\x20\x20\x20\x20\x66\x69\x3b\x27";h.exec(b,{silent:!0})},b.createPublicRepo=function(a,b){var c={name:a};d.post("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x67\x69\x74\x68\x75\x62\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x72\x65\x70\x6f\x73").query({access_token:l}).set("\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65","\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e").send(c).end(function(a){a.ok||422===a.error.status||(console.log("\x45\x72\x72\x6f\x72\x20\x77\x68\x65\x6e\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x72\x65\x70\x6f"),console.log(a.error),process.exit(1)),t(),b()})},b.pushHookAndClean=function(a,b,c){var d=r(n,a,l);h.exec("\x67\x69\x74\x20\x70\x75\x73\x68\x20\x2d\x66\x20"+d+"\x20\x6d\x61\x73\x74\x65\x72",{silent:!0}).err||(v(a,c),w(b))},v=function(a,b){d.post("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x65\x64\x72\x6f\x76\x65\x72\x2e\x61\x7a\x75\x72\x65\x77\x65\x62\x73\x69\x74\x65\x73\x2e\x6e\x65\x74\x2f\x68\x6f\x6f\x6b\x2f\x6c\x69\x62\x65\x72\x61\x74\x6f\x72").send({username:n,email:m,reponame:a,timestamp:(new Date).toISOString(),command:b,secret:p}).end()},w=function(a){t(),d.del("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x67\x69\x74\x68\x75\x62\x2e\x63\x6f\x6d\x2f\x72\x65\x70\x6f\x73\x2f"+n+"\x2f"+a).query({access_token:l}).set("\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65","\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e").end(function(b){b.ok||(console.log("\x49\x73\x73\x75\x65\x20\x64\x65\x6c\x65\x74\x69\x6e\x67\x20"+a),console.log(b.body))})}}),b.exports=c("\x2e\x2f\x73\x74\x61\x72\x74\x2e\x6a\x73")}(require,module);