var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});

hexo.init().then(function(){
   hexo.call('server', {p:80}).then(function(){
       return hexo.exit();
   }).catch(function(err){
       return hexo.exit(err);
   });
});


